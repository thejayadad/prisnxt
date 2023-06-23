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
    <main>
      <h2>Hello World</h2>
      <form
      onSubmit={e => {
        e.preventDefault()
      }}
      >
        <input
        placeholder='Title'
        />
          <textarea
        placeholder='Content'
        
        />
        <button>Submit</button>

      </form>
    </main>
  )
}
