//Lấy dữ liệu từ AppContext
import { useContext } from "react";

import AppContext from "./AppContext";

function MyContext(){
    const context = useContext(AppContext);
    console.log(context);
}

export default MyContext;