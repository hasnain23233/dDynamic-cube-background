import React from 'react'

const Navbar = () => {
    return (
        <div className='text-center text-white pt-4 '>
            <header className='p-4 m-auto w-6/12 rounded-xl'>
                <nav>
                    <ul className='font-bold text-xl flex gap-10 justify-center items-center'>
                        <li className='py-2 px-5 border-2 border-transparent rounded-full hover:border-green-500 hover:text-green-500'><a href="#">Home</a></li>
                        <li className='py-2 px-5 rounded-full border-transparent border-2 hover:border-green-500 hover:text-green-500'><a href="#">About</a></li>
                        <li className='py-2 px-5 rounded-full border-transparent border-2 hover:border-green-500 hover:text-green-500'><a href="#">Service</a></li>
                        <li className='py-2 px-5 rounded-full border-transparent border-2 hover:border-green-500 hover:text-green-500'><a href="#">Project</a></li>
                        <li className='bg-white text-black py-2 px-5 rounded-full'><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
