import React from 'react'
import { MdOutlineCloudOff } from 'react-icons/md'

type IProps = {
    message?:string
}

const DataNotFound:React.FC<IProps> = ({message='Data Not Found..'}) => {
    return (
        <div className='h-50 flex justify-center items-center tracking-wider'>
            <div className='flex flex-col items-center'>
                <MdOutlineCloudOff size={28} className='text-gray-500' />
                <p className='text-lg font-bold text-gray-700'>{message}</p>
            </div>
        </div>
    )
}

export default DataNotFound