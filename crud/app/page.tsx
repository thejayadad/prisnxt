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
      <h2 className='text-5xl'>To Do App</h2>
    
    <div>
    <form className="w-full max-w-md mx-auto px-4 py-2">
        <div className="flex  items-center py-2 gap-3 align">
        <div className='flex flex-col gap-3 w-full max-w-md'>
        <input
                className="appearance-none bg-transparent border-b-2 border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Title" />
            <input
                className="bg-transparent border-b-2 border-teal-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Content" />
        </div>
            <button
                className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-6 px-2 rounded"
                type="button">
                Add
            </button>
        </div>
    </form>

    <ul className="rounded-lg shadow max-w-md mx-auto flex flex-col">
    <li className="px-6 py-4">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">List Item 1</span>
            <span className="text-gray-500 text-xs">1 day ago</span>
        </div>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
    </li>
    <li className="px-6 py-4 rounded-lg bg-gray-100">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">List Item 1</span>
            <span className="text-gray-500 text-xs">1 day ago</span>
        </div>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        <div className="flex justify-around mt-2">
        <span className="text-gray-500 text-xs">Edit</span>
            <span className="text-gray-500 text-xs">Delete</span>
        </div>
    </li>
    </ul>
    </div>
    </main>
  ) 
}
