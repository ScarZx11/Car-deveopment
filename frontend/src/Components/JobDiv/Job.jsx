import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa"; // Icon for job position
import { AiOutlineShop } from "react-icons/ai"; // Replace AiOutlineBuilding with AiOutlineShop
import { MdLocationOn } from "react-icons/md"; // Icon for location

const Data = [
    {
        id: 1,
        title: 'Web Developer',
        time: '10 hrs ago',
        location: 'Canada',
        desc: 'Requires an experienced web developer proficient in modern technologies.',
        company: 'Line Co.'
    },
    {
        id: 2,
        title: 'Rust Developer',
        time: 'Now',
        location: 'Remote',
        desc: 'Seeking Rust developer with 5+ years of experience to build secure systems.',
        company: 'Astrix'
    },
    {
        id: 3,
        title: 'UX Designer',
        time: '1 day ago',
        location: 'Hong Kong',
        desc: 'UX designer needed for fast-paced environment with creative projects.',
        company: 'Ph 1.'
    },
    {
        id: 4,
        title: 'Data Scientist',
        time: '3 days ago',
        location: 'USA',
        desc: 'Data scientist required to analyze large datasets and generate insights.',
        company: 'TechSoft'
    }
];

const Jobs = () => {
    return (
        <div className="py-12 px-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="jobContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
                    {Data.map(({ id, title, time, location, desc, company }) => (
                        <div key={id} className="group singleJob w-full p-[25px] bg-white rounded-[15px] hover:bg-blue-600 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[18px] font-semibold text-gray-800 group-hover:text-white flex items-center">
                                    <FaBriefcase className="mr-2 text-blue-600 group-hover:text-white" />
                                    {title}
                                </h1>
                                <span className="flex items-center text-gray-500 gap-1">
                                    <BiTimeFive /> {time}
                                </span>
                            </div>
                            <h6 className="text-gray-500 mt-2 flex items-center">
                                <MdLocationOn className="mr-1 text-gray-500" />
                                {location}
                            </h6>
                            <p className="text-[14px] text-gray-600 mt-4 border-t-[1px] pt-[10px] group-hover:text-white">
                                {desc}
                            </p>
                            <div className="company flex items-center gap-3 mt-4">
                                <AiOutlineShop className="w-[12%] h-[12%] text-gray-500" />
                                <span className="text-[14px] text-gray-700 group-hover:text-white">{company}</span>
                            </div>
                            <button className="mt-6 bg-blue-600 text-white w-full py-[10px] rounded-[10px] font-semibold group-hover:bg-white group-hover:text-blue-600 transition-colors">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Jobs;
