'use client'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { prisma } from '../lib/prisma'

interface Notes{
  notes: {
    id: string
    title: string
    content: string
  }[]
}

interface FormData {
  title: string
  content: string
  id: string
}

export default function Home() {
  const [form, setForm] = useState<FormData>({title: '', content: '', id: ''})
  return (
    <>
    <h2
    className='text-center mt-10'
    >Hello World</h2>
    <main
    className='h-100 w-full flex items-center justify-center'
    >
      <div
      className='bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg'
      >
      <form
      onSubmit={e => {
        e.preventDefault()
      }}
      className='flex'
      >
        <div>
        <input
        placeholder='Title'
        className='border-bottom rounded-3xl w-full py-2 px-3 mr-4 text-grey-darker'
        />
          <textarea
        placeholder='Content'
        className='border-bottom rounded-3xl w-full py-2 px-3 mr-4 text-grey-darker'
        
        />
        </div>
        <button
        type='submit'
        className='p-1 border-2 rounded-3xl'
        >Submit</button>

      </form>
      </div>
    </main>
    </>
  )
}
