import { useState } from "react";

export default function MoreContent(props){

    const [status, setStatus] = useState(true);

    const handleStatus = (e) => {
        e.preventDefault();
        if (status){
            setStatus(false);
        }else{
            setStatus(true);
        }
       
    }

    const btnText = status==true ? 'Ẩn':'Hiện';

    return (
        <>
           {
            status==true ? <p>
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p> : false
           } 
            
            <p>
                <a href="#" onClick={handleStatus}>{btnText}</a>
            </p>
        </>
    );
    
}