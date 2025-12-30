import Image from 'next/image'
import SidebarLinks from './sidebar-links'

const SideBar = () => {
    return (
        <aside className='w-70 h-screen border border-gray-300  '>
            {/* logo */}
            <div className='border-b border-gray-300 h-16 '>
                <Image
                    src={"/logo.svg"}
                    alt="logo"
                    height={500}
                    width={500}
                    className="h-16 w-24"
                />
            </div>


            {/* links */}
            <SidebarLinks/>
        </aside>
    )
}

export default SideBar