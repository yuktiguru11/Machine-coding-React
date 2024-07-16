export const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_PRODUCT" :{
            return {...state , products: action.payload}
        }
        case "ADD_TO_CART":{
            return {...state, cart:[{...action.payload}, ...state.cart]}
        }
        case "REMOVE_FROM_CART":{
            return {...state, cart:state.cart.filter((c)=>{return c.id !== action.payload.id})}
        }

    default:
    break;
    }
    
}