import { useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";

export default function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [loginStatus, setLoginStatus] = useState(false);

    const hanleLogin = (e) => {
        e.preventDefault();
        
        if (email!=='' && password!==''){

            axios.post('https://unicode.vn/api/users/login.php', new URLSearchParams({
                email: email, //gave the values directly for testing
                password: password,
              })).then(function(response){
                if (response.data.status=='success'){
                    
                    sessionStorage.setItem('data_login', JSON.stringify(response.data.data));
                    
                    setLoginStatus(true);

                }else{
                    setMsg('Email hoặc mật khẩu không chính xác');
                }
              })

        }else{
            setMsg('Vui lòng nhập email và mật khẩu');
        }
    }

    const changeValue = (e) => {
        
        if (e.target.name=='email'){
            setEmail(e.target.value);
        
        }

        if (e.target.name=='password'){
            setPassword(e.target.value);
        }
    }

    const LoginForm = () => {
        return (
            <>
            {
                msg!=='' ? 
                <div className="alert alert-danger">
                    {
                        msg
                    }
                </div>:
                ''
            }
            <form onSubmit={hanleLogin}>
                <div className="mb-3">
                    <label>Tên đăng nhập</label>
                    <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="Email..."
                    onChange={changeValue}
                    defaultValue={email}
                    />
                </div>

                <div className="mb-3">
                    <label>Mật khẩu</label>
                    <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    placeholder="Password..." 
                    onChange={changeValue}
                    defaultValue={password}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Đăng nhập
                </button>
            </form>
            </>
        );
    }

    return (
        <>
            {
                loginStatus==true || sessionStorage.getItem('data_login') ? <Dashboard render={
                    (data) => {
                        if (data=='logout'){
                            setLoginStatus(false);
                        }
                    }
                }/>: <LoginForm />
            }
        </>
    );
}