export default function Logout(e){
    e.preventDefault();
    sessionStorage.removeItem('data_login');
}