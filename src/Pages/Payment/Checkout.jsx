import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Container from "../../Components/SharedComponent/Container/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { PropTypes } from "prop-types";
import { axiosSecure } from "../../api/axiosSecure";
// import toast from "react-hot-toast";


const Checkout = ({ clientSecret, price, id, contestName }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')
    const [totalParticipant, setTotalParticipant] = useState(0)
    console.log(totalParticipant)

    useEffect(() => {
        axiosSecure.get(`/contest/${id}`)
            .then(result => {
                setTotalParticipant(result?.data?.participant)
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymouse',
                    name: user?.displayName || 'anonymouse'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent:', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id:',paymentIntent.id)
                setTransactionId(paymentIntent.id)


                const paymentData = {
                    contestId: id,
                    contestName: contestName,
                    name: user?.displayName,
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    price: price,
                    image: user?.photoURL

                }

                const res = await axiosSecure.post('/payment', paymentData);
                console.log(res);

                const updatedTotal = totalParticipant + 1;
                await axiosSecure.patch(`/contest/${id}`, { participant: updatedTotal });

                // Update state
                setTotalParticipant(updatedTotal);

            }
        }



    }

    return (
        <Container>
            <div className="flex justify-center items-center h-[500px]">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-gray-100 shadow-md rounded-md">
                    <label className="block mb-4">Card details</label>
                    <div className="mb-4">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        display: 'block',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }} />
                    </div>
                    <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md disabled:bg-gray-400" type="submit" disabled={!stripe || !clientSecret || !user}>
                        Pay
                    </button>
                    {error && <p className="text-red-600 mt-2">{error}</p>}
                    {transactionId && <p className="text-green-500 mt-2">Your transaction id: {transactionId}</p>}
                    {/* {toast('Payment successfull')} */}
                </form>
            </div>

        </Container>
    );
};
Checkout.propTypes = {
    clientSecret: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    contestName: PropTypes.string
}

export default Checkout;