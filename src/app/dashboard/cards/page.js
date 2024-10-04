import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-4'>Cards</h1>
      
      <div className='flex justify-center items-center gap-4'>
      <Link href={'/dashboard/cards/bikecards'}>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Bikes Cards</button>
      </Link>
      <button className='bg-purple-400 rounded text-white p-2 mt-4'>Cars Cards</button>
      </div>
    </div>
  )
}

export default Cards
