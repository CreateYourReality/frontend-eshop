import { useState } from "react";
const RegisterForm = ({setUsers, setLogin}) => {
    
    const [input, setInput] = useState({username: "", email: "", currentpassword: "", firstname:"", lastname: "", password: ""})
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input))
        setLogin(true)
    }
    

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-Mail:</label>
                    <input autoComplete="on"  type="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="email" id="email" placeholder="E-Mail" required/>
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input autoComplete="on" type="text" value={input.username} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="username" id="username" placeholder="Username" required/>
                </div>
                <div>
                    <label htmlFor="firstname">Firstname:</label>
                    <input autoComplete="on" type="text" value={input.firstname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="firstname" id="firstname" placeholder="Firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname">Lastname:</label>
                    <input autoComplete="on" type="text"value={input.lastname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="lastname" id="lastname" placeholder="Lastname"/>
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                    <input autoComplete="on" type="password"value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="password" id="password" placeholder="password" required/>
                </div>
                <div>
                <button onClick={() => setLogin(true)}>Log in</button>
                <button>Register</button>
                </div>
            </form>
        </>
     );
}
 
export default RegisterForm;