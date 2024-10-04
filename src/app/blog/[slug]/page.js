export async function generateMetadata({ params,  }, parent) {
  const slug = params.slug
  const blog=blogs.find((data)=>params.slug==data.slug)
  return {
    title: slug.title,
  }
}
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
const page = ({params}) => {
      const blog=blogs.find((data)=>params.slug==data.slug)
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className='text-3xl font-bold rounded-md p-2 mt-2  w-[50rem] text-center' >{blog.title}</h1>
      <p className=" font-medium rounded-md p-2 mt-2  w-[50rem] text-center">{blog.description}</p>
    </div>
  )
}

export default page
