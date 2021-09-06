const nameReducer = (state='', action) =>{
    if(action.type==='CHANGE_NAME'){
        return action.payload
    }
    return state;
}

export default nameReducer;


// const iState = {
//     name: "Ajay Kumar Rai",
//     wishes: ['eat', 'noida']
// }
// const nameReducer = (state=iState, action) =>{
//     if(action.type==='CHANGE_NAME'){
//         return{
//             ...state,
//             name:action.payload
//         }
//     }
//     return state;
// }

// export default nameReducer;