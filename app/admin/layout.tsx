import Footer from '@/components/footer/index'
import NavBar from '@/components/nav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='h-screen'>

            {/* nav bar */}
            <NavBar />

            {/* dynamic content */}
            <div>
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout