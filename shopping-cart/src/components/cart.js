
const Cart = ({state, dispatch})=>{
    const {cart } = state;
    const {total , setTotal} = useState(0)
    return (
        <>
        <div
        style ={{
            display:"flex",
            margin:10,
            backgroundColor: "#ececec",
            padding: 10,
            width: "20%",
        }}
        >
            <b style={{fontsize: 30,alignSelf:"center"}}>Cart</b>
            <b style={{alignSelf:"center"}}>SubTotal : {total}</b>
            
        </div>
        </>
    )
}

export default Cart