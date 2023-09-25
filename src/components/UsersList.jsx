import { useContext } from "react";
import { AppContext } from "../context";
import Users from "./Users";

const UsersList = () => {
    const {users}=useContext(AppContext)
    return ( 
        <div>
            <h3>
                {users.map(users=><Users key={users.id} users={users}/>)}
            </h3>
        </div>
     );
}
 
export default UsersList;