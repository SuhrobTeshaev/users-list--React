import { useContext, useState } from "react";
import { AppContext } from "../context";

const AddUser = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [bio,setBio]=useState('')

    const {dispatchUsersEvent}=useContext(AppContext);
    const handleAddUser =()=>{
        const users ={id:Math.random(),name,age,bio}
        dispatchUsersEvent('ADD-USER',{newUser:users})
    }
    return ( 
        <div>
            <h3>Add new user</h3>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="name" />
            <br />
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="age" />
            <br />
            <textarea value={bio} onChange={(e)=>setBio(e.target.value)} placeholder="bio"></textarea>
            <br />
            <button onClick={handleAddUser }>Add user</button>
        </div>
     );
}
 
export default AddUser;