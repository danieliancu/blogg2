import { useState } from 'react'
import Layout from "../components/Layout"
import Link from 'next/link'
import Posts from './Posts'

import {AiFillDelete} from 'react-icons/ai'


const Index = () => {

    const [input, setInput] = useState({
        name:"",
        tags:"",
        size:"1",
        status:"new",
        text:""
    })

    const [post, setPost] = useState([])

    const handleChange = (e) =>{
        const { value, name } = e.target
        setInput(prev=>({...prev, [name]:value}))

        console.log(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.name.trim()){
            setPost(value=>[...value, input])
            setInput({name:"", tags:"", size:"1", status:"new",text:""})
        }
    }

    const handleDelete = (id) => {
        const newPost = post.filter(item=>item!==id)
        setPost(newPost)
    }

  return (
    <Layout>
        <div className="m-auto max-w-screen-md my-12">
            <div className="flex justify-between">
                <h1 className="text-3xl pb-5 font-bold px-5 lg:px-0">Admin Area</h1>
                <Link className="text-3xl pb-5 font-bold px-5 lg:px-0" href="/admin/Posts">Posts List</Link>
            </div>
            <form
                className="text-black px-5 lg:px-0"
                onSubmit={handleSubmit}
            >
                <input
                    className="w-full rounded border p-4 outline-none mb-5"
                    name="name"
                    placeholder="Name here..."
                    type="text"
                    onChange={handleChange}
                    value={input.name}
                />
                <input 
                    className="w-full rounded border p-4 outline-none mb-5"
                    name="tags"
                    placeholder="Tags here..."
                    onChange={handleChange}
                    value={input.tags}
                />
                <div className="flex-none sm:flex gap-4 ">
                    <select
                        className="w-full rounded border p-4 outline-none mb-5 cursor-pointer"
                        name="size"
                        onChange={handleChange}
                        value={input.size}
                    >
                        <option>1</option>
                    </select>
                    <select
                        className="w-full rounded border p-4 outline-none mb-5 cursor-pointer"
                        name="status"          
                        onChange={handleChange}
                        value={input.status}      
                    >
                        <option>New</option>
                        <option>Chased</option>                    
                    </select>
                </div>
                <textarea
                    className="w-full rounded border p-4 outline-none mb-5 h-56"
                    name="text"
                    placeholder="Text here..."
                    onChange={handleChange}
                    value={input.text}
                ></textarea>
                <button
                    className="text-center w-full p-4 rounded bg-cyan-600 hover:bg-cyan-800 text-white"
                >
                    ADD NEW
                </button>
            </form>
        </div>

        <div className="p-5 md:p-20 bg-gray-200 text-black">
            <h2 className="text-3xl pb-5 font-bold">Posts List</h2>
            {post.map((item,index)=>
            <div key={index} className="flex justify-between bg-white p-4 rounded mb-2">
                <div>{item.name}</div>
                <div className="flex items-center">
                    <span style={{backgroundColor:"grey", padding:"4px", fontSize:"12px", fontWeight:"bold", color:"white", textTransform:"uppercase"}}>{item.status}</span>
                    <AiFillDelete
                        onClick={()=>handleDelete(item)}                    
                        style={{color:"red", marginLeft:"5px", fontSize:"25px"}}
                    />
                </div>
            </div>
            )}
            
        </div>
    </Layout>
  )
}

export default Index