import React from 'react';

const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className='text-gray-800 text-[30px] py-[2rem] pb-[3rem] font-bold w-[100%] block'>
                The value that holds us true and to account
            </h1>

            <div className='grid gap-[5rem] grid-cols-3 items-center'>
                <div className='singleGrid rounded-[10px] hover:bg-[#f1f1f9] p-[2rem] bg-white shadow-lg transition duration-300 ease-in-out'>
                    <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[80px] w-[80px] flex items-center justify-center mb-5'>
                        <img src="" alt="Simplicity" className='w-[70%]' />
                    </div>

                    <span className='font-semibold text-gray-900 text-[20px]'>
                        Simplicity
                    </span>

                    <p className='text-[15px] text-gray-600 opacity-[.8] py-[1rem] font-medium'>
                        Things being made beautifully simple are at the heart of everything we do.
                    </p>
                </div>

                {/* Add more cards for other values as needed */}
                {/* Example: */}
                <div className='singleGrid rounded-[10px] hover:bg-[#f1f1f9] p-[2rem] bg-white shadow-lg transition duration-300 ease-in-out'>
                    <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[80px] w-[80px] flex items-center justify-center mb-5'>
                        <img src="" alt="Innovation" className='w-[70%]' />
                    </div>

                    <span className='font-semibold text-gray-900 text-[20px]'>
                        Innovation
                    </span>

                    <p className='text-[15px] text-gray-600 opacity-[.8] py-[1rem] font-medium'>
                        We innovate to bring better solutions and experiences.
                    </p>
                </div>
                <div className='singleGrid rounded-[10px] hover:bg-[#f1f1f9] p-[2rem] bg-white shadow-lg transition duration-300 ease-in-out'>
                    <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[80px] w-[80px] flex items-center justify-center mb-5'>
                        <img src="https://via.placeholder.com/80" alt="Innovation" className='w-[70%]' />
                    </div>

                    <span className='font-semibold text-gray-900 text-[20px]'>
                        Experience
                    </span>

                    <p className='text-[15px] text-gray-600 opacity-[.8] py-[1rem] font-medium'>
                        For a Btter Experienced and Network JOBS
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Value;
