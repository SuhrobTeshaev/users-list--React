import { useContext } from "react";
import { AppContext } from "../context";

const Users = ({user}) => {
    const {dispatchUsersEvent}=useContext(AppContext);
    const handleRemoveUser =()=> {
        dispatchUsersEvent('REMOVE-USER', {userId:user.id} )
    }
    
    return ( 
        <div style={{border:'1px solid gray',display:'inline-block',padding:'10px'}}>
            <h3>{user.name}</h3>
            
            <h4>{user.age}</h4>
            <div>
                <small>{user.bio}</small>
            </div>
            <button onClick={handleRemoveUser}>Delete user</button>
        </div>

     );
}
 
export default Users;