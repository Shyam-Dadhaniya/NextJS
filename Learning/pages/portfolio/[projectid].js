import React from 'react'
import { useRouter } from 'next/router'
const ProjectId = () => {

    const router = useRouter()

    console.log(router.pathname);
    console.log(router.query);

  return (
    <div>Dynamic path segment data</div>
  )
}

export default ProjectId