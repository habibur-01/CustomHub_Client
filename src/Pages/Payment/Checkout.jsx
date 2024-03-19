import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Container from "../../Components/SharedComponent/Container/Container";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import { PropTypes } from "prop-types";
import { axiosSecure } from "../../api/axiosSecure";


const Checkout = ({ clientSecret, price, id, contestName }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')
    // console.log(id, contestName)


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

        const { paymentIntent, error: consirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymouse',
                    name: user?.displayName || 'anonymouse'
                }
            }
        })

        if (consirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent:', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                // console.log('transaction id:',paymentIntent.id)
                setTransactionId(paymentIntent.id)

                const paymentData = {
                    contestId: id,
                    contesName: contestName,
                    name: user?.displayName,
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    price: price,
                    image: user?.photoURL 

                }

                const res =await axiosSecure.post('/payment', paymentData);
                console.log(res);

            }
        }



    }

    return (
        <Container>
            <div className="flex justify-center items-center w-full h-[500px]">
                <form onSubmit={handleSubmit} className="w-1/2 ">
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


                    <button className="bg-[#646cff] px-3 py-2 mt-4 w-20 h-12 font-semibold text-white text-base" type="submit" disabled={!stripe || !clientSecret || !user}>
                        Pay
                    </button>
                    <p className="text-red-600">{error}</p>
                    {
                        transactionId && <p className="text-green-500 my-6">Your transaction id: {transactionId}</p>
                    }
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