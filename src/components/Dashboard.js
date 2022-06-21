import Logout from "./Logout";
export default function Dashboard(props){

    let dataLogin = sessionStorage.getItem('data_login');
    dataLogin = JSON.parse(dataLogin);

    const handleLogout = (e) => {
        Logout(e);
        props.render('logout');
    }

    return (
        <div>
            <h2>Chào mừng: {dataLogin.name} - <a href="#" onClick={handleLogout}>Đăng xuất</a></h2>
        </div>
    );
}