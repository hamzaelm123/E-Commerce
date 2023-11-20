import { useState } from "react";
export default function Comments(props){
    const [comment,setComment]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.Submit(comment,props.id)
    }
    return<form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' id='test' className="form-control" onChange={(e)=>setComment(e.target.value)}></input>
        <br></br>
        <button className="btn btn-primary" type="submit">Submit</button>
    </form>
} 