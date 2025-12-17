
import React from 'react'
import QueryProvider from './react-query.provider'

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <QueryProvider>
            {children}
        </QueryProvider>
    )
}

export default Providers