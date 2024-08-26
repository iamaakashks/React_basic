import { createContext, useState } from "react";

export const UserContext = createContext();


export default function Context(props){
    const [users, setUsers] = useState([
        {id: 0, userName: "John doe", city: "usa"},
        {id: 1, userName: "Krishna", city: "Gokul"},
        {id: 2, userName: "Radhe", city: "Vrindavan"}
    ])

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    )
}