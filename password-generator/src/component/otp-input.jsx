import {useState} from "react"

const OtpInput = ({length = 4, onOtpSubmit = ()=>{}})=>{
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const handleChange =()=>{

    }

    const handleClick =()=>{

    }

    const handleKeyDown =()=>{

    }

    return (
        <>
        {otp.map((value, index)=>(
            <input type="text" key={index} value={value}
            onChange={(event)=>handleChange(index,event)}
            onClick = {()=>handleClick(index) }
            onKeyDown={()=>handleKeyDown(index)} className="otpInput">
            </input>
        ))}
        </>
    )
}
export default OtpInput