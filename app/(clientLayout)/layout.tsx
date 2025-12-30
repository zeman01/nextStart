import Footer from '@/components/footer/.'
import NavBar from '@/components/nav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='max-w-380! mx-auto mt-1'>

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