import React from 'react'
import { useRouter } from 'next/router'
const BlogByDate = () => {
  const router = useRouter()
  console.log(router.query);
  return (
    <div>BlogByDate</div>
  )
}

export default BlogByDate