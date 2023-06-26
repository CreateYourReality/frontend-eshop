import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/Context";


const LoginForm = ({users, setUsers, setLogin}) => {
    const [input, setInput] = useState({username: "", password: ""})
    const { user, setUser } =useContext(userContext)
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();

        const loggedusers =  JSON.parse(localStorage.getItem("users") || "[]")
        loggedusers?
        setUsers(prev => {
            
            const loggedusersArray = [...prev];
            const hasUserIndex = loggedusersArray.findIndex(item => item.username === loggedusers.username||item.email === loggedusers.email);

            hasUserIndex!==-1?null:loggedusersArray.push(loggedusers)
            return loggedusersArray
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
                    <label htmlFor="username"></label>
                    <input autoComplete="on" type="text" name="username" value={input.username} id="username" onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} placeholder="Username/E-Mail"/>
                </div>
                <div>
                <label htmlFor="password"></label>
                    <input autoComplete="on" type="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="password" id="password" placeholder="password"/>
                </div>
                <div>
                    <button className="example"type="submit">Log in</button>
                </div>
                <div className="buttonBox">
                    <p> Noch kein Account?</p>
                    <button className="example"type="button" onClick={() => setLogin(false)}>Register</button>
                </div>
                
            </form>
        </>
     );
}
 
export default LoginForm
