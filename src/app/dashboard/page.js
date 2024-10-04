import Link from 'next/link'
const Dashbard = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-4'>Dashbard!</h1>
        <div className='flex justify-start flex-col border-r-4 border-t-4 w-1/5 border-b-4 border-r-purple-500 border-t-purple-500 border-b-purple-500 h-[28.7rem]'>
        <Link href={'/dashboard/settings'}>
      <button className=' rounded text-black p-2  hover:bg-purple-200 block w-[15.7rem] '>Settings</button>
        </Link>
        <Link href={'/dashboard/profiles'}>
      <button className=' rounded text-black p-2  hover:bg-purple-200 block w-[15.7rem] '>Profiles</button>
        </Link>
        </div>
    </div>
  )
}

export default Dashbard
