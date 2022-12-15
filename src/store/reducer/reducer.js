  
export const fname=(state ="amare",action)=>{
    
    switch(action.type){
        case "FNAME":
            state=action.payload
            return action.payload
         
            default:
             return state    
    }
};

export const lname=(state = "gatie",action)=>{
    switch(action.type){
        case "LNAME":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const profession=(state = "student",action)=>{
    switch(action.type){
        case "PROF":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const gender=(state = "Male",action)=>{
    switch(action.type){
        case "GENDER":
            state=action.payload
            return action.payload
        default:
            return state
    }
};
export const age=(state = "25",action)=>{
    switch(action.type){
        case "AGE":
            state=action.payload
            return action.payload
        default:
            return state
    }
}
;
//name:"John"

//to display the value ===> useSelector
//t make an action    =====> useDispatch*/