import { useContext } from "react";
import { AppContext } from "../context";

const Users = ({users}) => {
    const {dispatchUsersEvent}=useContext(AppContext);
    const handleRemoveUser =()=> {
        dispatchUsersEvent('REMOVE-USER', {userId:users.id} )
    }
    
    return ( 
        <div style={{border:'1px solid gray',display:'inline-block',padding:'10px'}}>
            <h3>{users.name}</h3>
            
            <h4>{users.age}</h4>
            <div>
                <small>{users.bio}</small>
            </div>
            <button onClick={handleRemoveUser}>Delete user</button>
        </div>

     );
}
 
export default Users;