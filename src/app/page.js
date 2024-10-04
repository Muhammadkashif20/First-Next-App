import Link from 'next/link'

const page = () => {
  
  const blogs=[
    {
      id:'1',
      title:'hello World 1',
      description:'hello world 1 This is Description',
      slug:'hello-World-1',
    },
    {
      id:'2',
      title:'hello World 2',
      description:'hello world 2 This is Description',
      slug:'hello-World-2',
    },
    {
      id:'3',
      title:'hello World 3',
      description:'hello world 3 This is Description',
      slug:'hello-World-3',
    }
  ]
  return (
    <div >
      <h1 className='text-3xl font-bold my-4 text-center'>HELLO NEXT!</h1>
      <center className='flex flex-col'>
      {/* <Link href={'/dashboard'}>
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
      </Link> */}
 <div className='flex justify-center flex-col items-center'>
        <h1 className='text-3xl font-bold underline text-center mt-4'>All Blogs</h1>
        {blogs.map((data)=>
        <Link  href={`/blog/${data.slug}`}>
          <h1 className='border border-purple-300 rounded-md p-2 mt-2  w-[50rem] text-center' >{data.title}</h1>
        </Link>
        )}
</div>
      </center>
    </div>
  )
}

export default page
