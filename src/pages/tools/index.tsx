import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Tools = () => {
    const router = useRouter()
    useEffect(() => {router.push('/tools/neumorphism')}, [])
  return (
    <></>
  )
}

export default Tools