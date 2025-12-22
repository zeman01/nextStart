import Link from 'next/link'

const NotFound = () => {
  return (
      <main className='h-screen w-full flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-blue-600'>Page not found</h1>
          <Link href='/' className='w-[200px] bg-blue-500 text-white font-bold  text-center mt-4 rounded-md py-3'>Home</Link>
    </main>
)
}

export default NotFound