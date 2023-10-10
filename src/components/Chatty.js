'use client'
import { response } from "@/utils/response";
import { useState } from "react";
import { AiOutlineSend } from 'react-icons/ai'
import Loader from "./Loader";
const Chatty = () => {

    const [inputValue, setInputValue] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false)
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const calculateRows = (content) => {
        const rows = content.split('\n').length;
        return Math.min(rows, 10); // Set a maximum number of rows if desired
    };

    const handleSubmit = async () => {
        setLoading(true);
        setState(true)
        const { data, error } = await response({ prompt: inputValue })
        if (error) {
            setError(error);
            setLoading(false);
            return;
        }
        setOutput(data);
        setLoading(false);
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && event.shiftKey) {
            handleSubmit();
        }
    };


    return (
        <div className="w-full" >
            <div className="mb-10 flex gap-2 justify-center">
                <div className="relative w-10/12 md:w-7/12 xl:w-6/12 z-10  ">
                    <label htmlFor="Search" className="sr-only"> Search </label>

                    <textarea
                        placeholder="Press enter+shift to send"
                        value={inputValue}
                        onChange={handleInput}
                        onInput={handleInput}
                        rows={calculateRows(inputValue)}
                        onKeyDown={handleKeyDown}
                        className="w-full rounded-md border-gray-200 px-2 py-2 pe-10 shadow-sm sm:text-sm focus:border-0"
                    />

                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
                <button onClick={handleSubmit} className={` inline rounded-xl mx-2px my-2 px-1 hover:cursor-pointer ${loading ? 'cursor-wait' : 'cursor-pointer'} `}  >
                    <AiOutlineSend className="text-2xl inline" />
                </button>
            </div>

            {state ? (
                !loading ? (
                    <div className="w-12/12 md:w-10/12 lg:w-7/12 mx-auto mb-10 px-6 py-6 rounded-sm bg-gray-100/20 card-neuo">


                        {output?.split('\n').map((item, index) => {
                            return (
                                <p key={index} >{item} <br /> </p>
                            )
                        })}

                    </div>
                ) :
                    (
                        <Loader />
                    )

            ) : (<p></p>)}


        </div >
    )
}

export default Chatty