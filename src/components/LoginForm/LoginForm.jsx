import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/Context";


const LoginForm = ({users, setUsers, setLogin}) => {
    const [input, setInput] = useState({username: "", password: ""})
    const { user, setUser } =useContext(userContext)
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();

        const loggeduser =  JSON.parse(localStorage.getItem("user"))
        //setUsers(prev => console.log(prev))
        loggeduser?
        setUsers(prev => {
            const loggedusers = [...prev];
            const hasUserIndex = loggedusers.findIndex(item => item.username === loggeduser.username||item.email === loggeduser.email);

            hasUserIndex!==-1?null:loggedusers.push(loggeduser)
            return loggedusers
        }):null

        const checkUsername = users.some(item => input.username === item.email||input.username === item.username)
        const checkPassword =  users.some(item => input.password === item.password)
        
        const weFilter = users.filter((item) => item.username === input.username||item.email === input.username)

        checkUsername&&checkPassword?setUser(weFilter):alert("wrong Email/password")
        navigate("/home")
    }

    return ( 
        <>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username/E-Mail:</label>
                    <input autoComplete="on" type="text" name="username" value={input.username} id="username" onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} placeholder="Username/E-Mail"/>
                </div>
                <div>
                <label htmlFor="password">password</label>
                    <input autoComplete="on" type="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="password" id="password" placeholder="password"/>
                </div>
                <div>
                <button>Log in</button>
                <button onClick={() => setLogin(false)}>Register</button>
                </div>
            </form>
        </>
     );
}
 
export default LoginForm
