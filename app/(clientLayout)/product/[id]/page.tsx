import React from 'react'

type Props = {
    params: Promise<{id:string}>
}

const Page = (props: Props) => {
  return (
      <main className='w-full h-[85vh]'>
          <h1>Product view Page</h1>
    </main>
  )
}

export default Page