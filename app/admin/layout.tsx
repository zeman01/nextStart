
import AdminHeader from '@/components/admin/layout/header'
import SideBar from '@/components/admin/layout/sidebar'
import withAuth from '@/hoc/with-auth.hoc'
import { USER_ROLE } from '@/types/global.types'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='h-screen w-full overflow-clip'>
            <div className='flex w-full'>
                <SideBar  />
                <div className='flex-1'>

                    {/* nav bar */}
                    <AdminHeader />
                    {/* dynamic content */}
                    <div className='overflow-y-auto h-full w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

const LayoutWithAuth = withAuth(Layout, [USER_ROLE.ADMIN]);

export default LayoutWithAuth