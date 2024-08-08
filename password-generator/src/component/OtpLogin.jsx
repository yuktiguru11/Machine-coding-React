import {useState} from "react"
import OtpInput from "./otp-input"

const OtpLogin = ()=>{
    const [email, setEmail] = useState("")
    const [otpLogin, setotpLogin] = useState(false)

    const handleChange = (e)=>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        //handle phone number validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if( !emailRegex.test(email)){
            alert("Invalid mail id");
            return ;
        }
        //handle node api

        //show OTP feild
        setotpLogin(true)
    }

    const handleOTPSubmit = (value)=>{
        console.log(value)
    }

    return (
        <>
        {!otpLogin ? (<form onSubmit={handleSubmit}>
            <input type ="text"
            value={email} onChange={handleChange}></input>
            <button type = "submit">Submit</button>
        </form>) : 
        (<div>
            <p>Enter the OTP send to {email}</p>
            <OtpInput length={4} onOtpSubmit={handleOTPSubmit}/>
            </div>

        )
    }
        </>
    )
}

export default OtpLogin