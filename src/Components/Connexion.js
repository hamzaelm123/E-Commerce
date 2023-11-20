import { useState } from "react"
export default function Connexion(props){
    const [name,setName]=useState('')
    const [pass,setpass]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        props.Connexion(name,pass)
    }
    return<div className="container">
        <h1 className="align-center text-primary">Connexion</h1>
        <form onSubmit={(e)=>onSubmit(e)}>
            <label className="form-label">FullName</label> <input className="form-control" type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
            <label className="form-label">password</label> <input className="form-control" type="password" onChange={(e)=>setpass(e.target.value)}></input><br></br>
            <button type="submit" className="btn btn-primary">Connexion</button>
        </form>
        <p style={{color:'red'}}>{props.Msg}</p>
    </div>
}