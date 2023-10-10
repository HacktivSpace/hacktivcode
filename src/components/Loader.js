import React from 'react'
import { RiLoaderLine } from 'react-icons/ri'

const Loader = () => {
    return (
        <div className="flex gap-x-2 items-center justify-center">
           <RiLoaderLine className='animate-spin' /> <button disabled className='animate-pulse' >Thinking...</button>
        </div>
    )
}

export default Loader