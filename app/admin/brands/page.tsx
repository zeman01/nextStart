import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
      <main>
      <h1>Brands Page</h1>
      <Link href={'/admin/brands/create'}>Add New Brand</Link>
    </main>
  )
}

export default Page