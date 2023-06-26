import { useEffect, useState } from "react";
const RegisterForm = ({setLogin}) => {
    
    const [input, setInput] = useState({username: "", email: "", currentpassword: "", firstname:"", lastname: "", password: "", fav: [], cart: []})
    
    const [test, setTest] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input))

   
        setLogin(true)
    }
    return ( 
        <>
            <form onSubmit={() => {}}>
                <div>
                    <label htmlFor="email"></label>
                    <input autoComplete="on"  type="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="email" id="email" placeholder="E-Mail" required/>
                </div>
                <div>
                    <label htmlFor="username"></label>
                    <input autoComplete="on" type="text" value={input.username} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="username" id="username" placeholder="Username" required/>
                </div>
                <div>
                    <label htmlFor="firstname"></label>
                    <input autoComplete="on" type="text" value={input.firstname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="firstname" id="firstname" placeholder="Firstname"/>
                </div>
                <div>
                    <label htmlFor="lastname"></label>
                    <input autoComplete="on" type="text"value={input.lastname} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="lastname" id="lastname" placeholder="Lastname"/>
                </div>
                <div>
                <label htmlFor="password"></label>
                    <input autoComplete="on" type="password"value={input.password} onChange={(e) => setInput({...input,[e.target.name]:e.target.value})} name="password" id="password" placeholder="Password" required/>
                </div>
                <div>
                <button type="submit" className="example" onClick={handleSubmit}>Register</button>
                </div>
                <div className="buttonBox">
                    <p>Schon ein Account?</p>
                    <button className="example" type="button" onClick={() => setLogin(true)}>Log in</button>
                </div>
            </form>
        </>
     );
}
 
export default RegisterForm;