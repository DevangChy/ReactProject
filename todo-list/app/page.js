"use client"
import React from 'react'
import { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [taskList, setTaskList] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setTaskList([...taskList, { title, desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copytask = [...taskList]
    copytask.splice(i, 1)
    setTaskList(copytask)
  }

  let tasks = <h2>No Tasks Available</h2>

  if (taskList.length > 0) {
    tasks = taskList.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-semibold'>{t.desc}</h5>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }} className='bg-red-500 text-white px-4 py-2 rounded-2xl font-bold cursor-pointer'>Delete</button>
        </li>)
    })
  }
  return (
    <>
      <h1 className='bg-black text-white text-center p-5 text-3xl font-bold'>Todo List</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Your Task' value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter description' value={desc} onChange={(e) => {
          setDesc(e.target.value)
        }} />
        <button className='bg-black text-white rounded-2xl font-bold m-5 p-1.5 cursor-pointer'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {tasks}
        </ul>
      </div>
    </>
  )
}

export default page
