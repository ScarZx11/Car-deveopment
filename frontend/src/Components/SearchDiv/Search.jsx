import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [mostRecentFilter, setMostRecentFilter] = useState(false);
    const [highestSalaryFilter, setHighestSalaryFilter] = useState(false);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        // Reset filters when changing selection
        setMostRecentFilter(false);
        setHighestSalaryFilter(false);

        // Show filter based on selection
        if (e.target.value === "recent") {
            setMostRecentFilter(true);
        } else if (e.target.value === "salary") {
            setHighestSalaryFilter(true);
        }
    };

    return (
        <div className='searchDiv grid gap-8 bg-white shadow-md rounded-lg p-8'>
            {/* Form Section */}
            <form action="">
                <div className="firstDiv flex justify-between items-center rounded-lg gap-6 bg-[#f9f9fb] p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    
                    {/* Job Search */}
                    <div className='flex gap-3 items-center'>
                        <AiOutlineSearch className='text-[22px] text-gray-500' />
                        <input 
                            type="text" 
                            className='bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none w-full' 
                            placeholder='Search Job Title, Keywords...' 
                        />
                        <AiOutlineCloseCircle className='text-[24px] text-gray-400 hover:text-red-500 transition-colors' />
                    </div>

                    {/* Company Search */}
                    <div className='flex gap-3 items-center'>
                        <BsHouseDoor className='text-[22px] text-gray-500' />
                        <input 
                            type="text" 
                            className='bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none w-full' 
                            placeholder='Search by Company' 
                        />
                        <AiOutlineCloseCircle className='text-[24px] text-gray-400 hover:text-red-500 transition-colors' />
                    </div>

                    {/* Location Search */}
                    <div className='flex gap-3 items-center'>
                        <CiLocationOn className='text-[22px] text-gray-500' />
                        <input 
                            type="text" 
                            className='bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none w-full' 
                            placeholder='Search by Location' 
                        />
                        <AiOutlineCloseCircle className='text-[24px] text-gray-400 hover:text-red-500 transition-colors' />
                    </div>

                    {/* Search Button */}
                    <button className='bg-blue-600 h-full py-3 px-8 rounded-lg text-white font-semibold hover:bg-blue-500 transition-colors duration-200'>
                        Search
                    </button>
                </div>
            </form>

            {/* Sort and Filters */}
            <div className='secDiv flex items-center gap-6 justify-center'>
                <div className='singleSearch flex items-center gap-3'>
                    <label htmlFor="relevance" className='text-gray-600 font-medium'>Sort by:</label>
                    <select 
                        name="relevance" 
                        id="relevance" 
                        className='bg-white border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-200 transition-all'
                        onChange={handleSelectChange}
                    >
                        <option value="">Relevance</option>
                        <option value="recent">Most Recent</option>
                        <option value="salary">Highest Salary</option>
                        <option value="location">Location</option>
                    </select>
                </div>
            </div>

            {/* Conditional Rendering for Filters */}
            {selectedOption === 'location' && (
                <div className='flex flex-col mt-4'>
                    <span className='text-gray-600 font-medium mb-2'>Select City:</span>
                    <label className='flex items-center'>
                        <input type="radio" name="city" value="mumbai" className='mr-2' />
                        Mumbai
                    </label>
                    <label className='flex items-center'>
                        <input type="radio" name="city" value="delhi" className='mr-2' />
                        Delhi
                    </label>
                    <label className='flex items-center'>
                        <input type="radio" name="city" value="bangalore" className='mr-2' />
                        Bangalore
                    </label>
                    <label className='flex items-center'>
                        <input type="radio" name="city" value="pune" className='mr-2' />
                        Pune
                    </label>
                </div>
            )}

            {mostRecentFilter && (
                <div className='flex flex-col mt-4'>
                    <span className='text-gray-600 font-medium mb-2'>Most Recent Filter:</span>
                    <label className='flex items-center'>
                        <input type="checkbox" className='mr-2' />
                        Show only jobs posted in the last week
                    </label>
                    <label className='flex items-center'>
                        <input type="checkbox" className='mr-2' />
                        Show only jobs posted in the last month
                    </label>
                </div>
            )}

            {highestSalaryFilter && (
                <div className='flex flex-col mt-4'>
                    <span className='text-gray-600 font-medium mb-2'>Highest Salary Filter:</span>
                    <label className='flex items-center'>
                        <input type="checkbox" className='mr-2' />
                        Show jobs with salary greater than ₹50,000
                    </label>
                    <label className='flex items-center'>
                        <input type="checkbox" className='mr-2' />
                        Show jobs with salary greater than ₹1,00,000
                    </label>
                </div>
            )}
        </div>
    );
}

export default Search;
