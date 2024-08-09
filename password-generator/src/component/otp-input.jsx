import {useState, useRef, useEffect} from "react"

const OtpInput = ({length = 4, onOtpSubmit = ()=>{}})=>{
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const currentRef = useRef([]);

    useEffect(()=>{
        if(currentRef.current[0]){
        currentRef.current[0].focus();}
    },[])

    const handleChange =(index, e)=>{
        const value = e.target.value;
        if(isNaN(value)) return ;

        const newOtp = [...otp];
        newOtp[index]=value.substring(value.length-1);
        setOtp(newOtp);
    }

    const handleClick =()=>{

    } 

    const handleKeyDown =()=>{

    }

    return (
        <>
        {otp.map((value, index)=>(
            <input
            ref={(input)=>(currentRef.current[index] = input)} type="text" key={index} value={value}
            onChange={(event)=>handleChange(index,event)}
            onClick = {()=>handleClick(index) }
            onKeyDown={()=>handleKeyDown(index)} className="otpInput">
            </input>
        ))}
        </>
    )
}
export default OtpInput