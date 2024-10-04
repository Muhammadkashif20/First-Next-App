import React from 'react'
import Link from 'next/link'
const Dashbard = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-4'>Dashbard!</h1>
        <div className='flex justify-center items-center gap-4'>
      <Link href={'/dashboard/cards'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Cards</button>
        </Link>
        <Link href={'/dashboard/settings'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Settings</button>
        </Link>
        <Link href={'/dashboard/profiles'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Profiles</button>
        </Link>
        </div>
    </div>
  )
}

export default Dashbard
