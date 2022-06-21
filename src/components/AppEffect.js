import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function AppEffect(){

    const [listUsers, setListsUsers] = useState([]);
    //componentDidMount
    useEffect(()=>{
        axios.get('http://localhost:3004/users').then(function(response){
            setListsUsers(response.data);
        }); 
    }, []);

    //componentDidUpdate
    useEffect(()=>{
        //console.log(listUsers);

        // return (
        //     console.log('kết thúc')
        // );
    
          
    });

    return (
        <>
            <p>Danh sách người dùng</p>
            {
                listUsers.map((item)=>{
                    return (
                        <ul key={item.id}>
                            <li>Tên: {item.name}</li>
                            <li>Email: {item.email}</li>
                        </ul>
                    );
                })
            }
        </>
    );
}