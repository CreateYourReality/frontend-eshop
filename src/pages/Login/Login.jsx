import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoBackHeader from "../../components/goBackHeader/GoBackHeader";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { usersContext } from "../../context/Context";

const Login = () => {
    const [Login, setLogin] = useState(true)
    const {users, setUsers} = useContext(usersContext)

    return ( 
        <>
            <header>
                <GoBackHeader text='Log in'/>
            </header>
            <main>
                {Login?<LoginForm  users={users} setUsers={setUsers} setLogin={setLogin}/>:<RegisterForm setUsers={setUsers} setLogin={setLogin}/>}
            </main>
            <Footer />
        </>
     );
}
 
export default Login;