import React from 'react'
import { useRouter } from 'next/router'

const ClientProject = () => {

    const router = useRouter()
    console.log(router.query);
    return (
    <div>The Project page for a Specific Project for a Selected Client.</div>
  )
}

export default ClientProject