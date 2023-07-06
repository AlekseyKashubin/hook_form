import React, { useState }from "react";


const MyForm = () => {
    


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    


    // if (name == 'firstName' && value.length < 2){
    //     setFirstErr("First Name too short!")
    // } else if (name == 'firstName'){
    //     setFirstErr("")
    // }

    // if (name == 'lastName' && value.length < 2){
    //     setLastErr("Last Name too short!")
    // } else if (name == 'lastName'){
    //     setLastErr("")
    // }
    
    // if (name == 'email' && value.length < 5){
    //     setEmailErr("Email too short!")
    // } else if (name == 'email'){
    //     setEmailErr("")
    // }


    const formStyle ={
        width:400
    }

    // const errStyle = {
    //     margin: 0,
    //     padding: 0,
    //     color: "red",
    //     fontWeight: "bold"
    // }

    const submitForm = (e) => {
        e.preventDefult()


        const formData = {
            first : firstName,
            last : lastName,
            email : email,
            password : password,
            password2 : password2
        }

        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPassword2("")

        console.log(formData)
    }
    
    return(
        <form style={formStyle} onSubmit={submitForm}>

            <fieldset>
                <legend> Sign Up!</legend>
                
                {/* <p style={errStyle}>{firstErr} </p> */}
                <label>First Name :</label>
                <input onChange={ (e)=>{setFirstName(e.target.value)}} value={firstName} type="text"></input>
                <br/>

                {/* <p style={errStyle}>{lastErr} </p> */}
                <label>Last Name :</label>
                <input onChange={ (e)=>{setLastName(e.target.value)}} value={lastName} type="text"></input>
                <br/>

                <label>Email :</label>
                <input onChange={ (e)=>{setEmail(e.target.value)}} value={email} type="text"></input>
                <br/>

                <label>Password :</label>
                <input onChange={ (e)=>{setPassword(e.target.value)}} value={password} type="password"></input>
                <br/>

                <label>Confirm Password :</label>
                <input onChange={ (e)=>{setPassword2(e.target.value)}} value={password2} type="password"></input>
                <br/>

                <button>Register</button>

            <p>First Name : { firstName}</p>
            <p>Last Name : { lastName}</p>
            <p>Email : { email}</p>
            <p>Passwood : {password}</p>
            <p>Confirm Passwood :{ password2 }</p>

            </fieldset>
        </form>



    )
}
export default MyForm