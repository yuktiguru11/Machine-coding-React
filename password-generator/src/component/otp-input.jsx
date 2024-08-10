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
        newOtp[index]=value.substring(value.length-1); //allow only last input
        setOtp(newOtp);
        console.log(otp);

        //trigger Submit
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length) onOtpSubmit(combinedOtp);

        //when filling OTP it should directly move to the next input
        if (value && index<length-1 && currentRef.current[index+1]){
            currentRef.current[index+1].focus();
        }
    }

    const handleClick =(index)=>{
        currentRef.current[index].setSelectionRange(1,1)
    } 

    const handleKeyDown =(index, e)=>{
        const value = e.target.value
        if (e.key === 'Backspace' && index>0 && !otp[index] && currentRef.current[index-1]){
            currentRef.current[index-1].focus();
        }
    }

    return (
        <>
        {otp.map((value, index)=>(
            <input
            ref={(input)=>(currentRef.current[index] = input)} type="text" key={index} value={value}
            onChange={(event)=>handleChange(index,event)}
            onClick = {()=>handleClick(index) }
            onKeyDown={(event)=>handleKeyDown(index,event)} className="otpInput">
            </input>
        ))}
        </>
    )
}
export default OtpInput