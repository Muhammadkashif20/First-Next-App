import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div >
      <h1 className='text-3xl font-bold mt-10 text-center'>HELLO WORLD!</h1>
      <h1 className='text-3xl font-bold my-4 text-center'>HELLO NEXT!</h1>
      <center className='flex flex-col'>
      <Link href={'/dashboard'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Dashboard</button>
        </Link>
        <Link href={'/blog'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>See All Blogs</button>
        </Link>
      <Link href={'/contact'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Contact US</button>
      </Link>
      <Link href={'/about'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>About US</button>
      </Link>
      </center>
    </div>
  )
}

export default page
