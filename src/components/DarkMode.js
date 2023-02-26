import { useState } from 'react'
import { useContext } from 'react'
import { darkMode } from '../Context'
import {HiOutlineLightBulb} from 'react-icons/hi'


function DarkMode() {
    const { mode, setMode } = useContext(darkMode)
    const change = () => {
        setMode(!mode)
    }
    

    return (
        <div className='flex justify-end items-center'>
            <button className=' rounded px-6 py-3 text-[18px] bg-transparent m-4 hover:outline outline-1 hover:duration-700' onClick={change}>
           <HiOutlineLightBulb className='text-[1.5rem]'/>
            </button>
        </div>
    )
}
export default DarkMode

