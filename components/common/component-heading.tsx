import Link from 'next/link'
import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

type IProps = {
    title: string;
    sub_title?: string
    link?: string
}

const ComponentHeading: React.FC<IProps> = ({ title, link, sub_title }) => {
    return (
        <header className='flex justify-between tracking-wider'>
            {/* left section */}
            <div>
                {/* title */}
                <h1 className='text-gray-800 font-bold text-xl'>{title}</h1>
                {/* sub title */}
                {sub_title && <p className='text-[14px] text-gray-600' >{sub_title}</p>}
            </div>

            {/* right section */}
            {link && <Link href={link} className='flex items-center gap-1 text-[14px] text-gray-600' >
                <span>Explore all</span>
                {/* icon */}
                <IoChevronDownOutline />
            </Link>}

        </header>
    )
}

export default ComponentHeading