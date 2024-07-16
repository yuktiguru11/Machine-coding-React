export const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_PRODUCT" :{
            return {...state , product: action.payload}
        }

    default:
    break;
    }
    
}