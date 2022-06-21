import { useState } from "react";
import axios from "axios";

export default function ShowUsers(props){

    const [listUsers, setUsers] = useState([]);

    axios.get('http://localhost:3004/users')
    .then(function (response) {
        setUsers(response.data);
    })

    return (
        <>
         <h2>Danh sách người dùng</h2>
            {
                listUsers.map((item)=>{
                    return (
                        <ul key={item.id}>
                            <li>Tên: {item.name}</li>
                            <li>Tên: {item.email}</li>
                        </ul>
                    );
                })
            }
           
        </>
    );
}