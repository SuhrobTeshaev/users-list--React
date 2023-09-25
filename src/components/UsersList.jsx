import { useContext } from "react";
import { AppContext } from "../context";
import Users from "./Users";

const UsersList = () => {
    const {users}=useContext(AppContext)
    return ( 
        <div>
            <h3>
                {users.map(user=><Users key={user.id} user={user}/>)}
            </h3>
        </div>
     );
}
 
export default UsersList;