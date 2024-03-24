
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext";
import { ImgUpload } from "../../../api/ImgUpload";
import { axiosSecure } from "../../../api/axiosSecure";
import toast from "react-hot-toast";
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
const people = [
    { name: 'Buisness' },
    { name: 'Gaming' },
    { name: 'Technology' },
    { name: 'Programming' },
    { name: 'Design' },
    { name: 'Medical' },
  ]

const AddContest = () => {
    const { user } = useContext(AuthContext)
    // const [contestType, setContestType] = useState('');
    const [selected, setSelected] = useState(people[0])
    


    const handleCheckOut = async (e) => {
        e.preventDefault()
        const form = e.target
        const contestName = form.name.value
        const type = selected.name
        const description = form.description.value
        const taskInstruction = form.instruction.value
        const endDate = form.endDate.value
        const price = form.price.value
        const prize = form.prize.value
        const img = form.image.files[0]
        const image = await ImgUpload(img)
        const userImage = image?.data?.display_url

        const addContestgData = { contestName, contestType: type.toLowerCase(), description, taskInstruction, image: userImage, endDate, price, prize, creator: user?.email, status: 'pending', participant: 0 }
        console.log(addContestgData)

        await axiosSecure.post("/contest", addContestgData)
            .then(response => {
                console.log('Contest added successfully:', response.data);

                if (response?.data?.acknowledged === true) {
                    toast('Contest added successfully')

                }
            })
            .catch(error => {
                console.error('Error adding user:', error);
                toast('Error adding user')
            });


    }
    return (
        <div>


            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body md:w-3/5  md:mx-auto grid grid-cols-1 lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Name</span>
                        </label>
                        <input type="text" name="name" placeholder="contes name" className="input input-bordered " required />
                    </div>


                    <div className="form-control relative">
                    <label className="label">
                            <span className="label-text">Contest Type</span>
                        </label>
                        
                        <div className="absolute mt-8  w-full">
                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full input input-bordered cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left h-[45px]] shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {people.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Price</span>
                        </label>
                        <input type="text" name="price" placeholder="contest price" className="input input-bordered focus-visible:border-indigo-500" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Prize money</span>
                        </label>
                        <input type="text" name="prize" placeholder="prize money" className="input input-bordered focus-visible:border-indigo-500" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" name="image" className="input input-bordered focus-visible:border-indigo-500" required />

                    </div>


                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">End date</span>
                        </label>
                        <input type="date" name="endDate" className="input input-bordered focus-visible:border-indigo-500" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Description</span>
                        </label>
                        <textarea type="text" name="description" placeholder="description" className="input input-bordered h-24 focus-visible:border-indigo-500" required ></textarea>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Instruction</span>
                        </label>
                        <textarea type="text" name="instruction" placeholder="task instruction" className="input input-bordered h-24 focus-visible:border-indigo-500" required ></textarea>

                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Add Contest</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContest;