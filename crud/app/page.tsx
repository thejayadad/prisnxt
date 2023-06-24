'use client'
import { GetServerSideProps } from 'next'
import { useState, SyntheticEvent } from "react";
import { prisma } from '../lib/prisma'
import axios from "axios";
import { useRouter } from "next/navigation";



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

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();



  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/create", {
      title: title,
      content: content
    });
    setTitle("");
    setContent("");
    router.refresh();
  };



  

  return (
    <main>
      <h2 className='text-5xl text-center mt-10 text-white'>To Do App</h2>
    
    <div>
    <form 
    onSubmit={handleSubmit}
 
    className="w-full max-w-md mx-auto px-4 py-2">
        <div className="flex  items-center py-2 gap-3 align">
        <div className='flex flex-col gap-3 w-full max-w-md'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border-b-2 border-orange-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none cursur-pointer"
                name="title"
                type="text" placeholder="Title" />
            <input
            value={content}
            name="conent"
            onChange={(e) => setContent(e.target.value)}
            className="bg-transparent border-b-2 border-orange-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none cursor-pointer"
                type="text" placeholder="Content" />
        </div>
            <button
                className="bg-orange-500 hover:bg-orange-700 hover:border-orange-900 text-sm border-1 text-white py-8 px-2 rounded"
                type="submit">
                Add
            </button>
        </div>
    </form>

    <ul className="rounded-lg shadow max-w-md mx-auto flex flex-col cursor-pointer">
    <li className="px-6 py-4 rounded-lg bg-gray-100 mt-4 mb-8 hover:bg-gray-500">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">List Item 1</span>
            <span className="text-gray-500 text-xs">1 day ago</span>
        </div>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        <div className="flex justify-around mt-2">
        <span className="text-xs"><button
        className='border-2 bg-green-500 border-green-500 text-white hover:bg-green-700 p-4 ml-2 rounded'
        >Edit</button></span>
            <span className="text-xs">
              <button
              className='border-2 bg-red-500 border-red-500 text-white hover:bg-red-700 p-4 ml-2 rounded'
              >Delete</button>
            </span>
        </div>
    </li>
    </ul>
    </div>
    </main>
  ) 
}


export default Home