import { useContext } from "react";
import { AppContext } from "../context";
import Users from "./Users";
import Loading from "./Loading";

const UsersList = () => {

    
    const {users}=useContext(AppContext)
    return ( 
        <div>
            
            {<h3>
                {users.map(user=><Users key={user.id} user={user}/>)}
            </h3>?<h3>
                {users.map(user=><Users key={user.id} user={user}/>)}
            </h3>:<Loading/>}
        </div>
     );
}
 
export default UsersList;