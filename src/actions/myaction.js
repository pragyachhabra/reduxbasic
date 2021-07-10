// export const anothername=(name)=>{
//     return{   
//     type:'CHANGE_NAME',
//     payload:name
// }

// }
export const anothername=(name)=>{
    return async(dispatch)=>{   
const data= await fetch('https://jsonplaceholder.typicode.com/users')
const res2= await data.json()
dispatch({type:'CHANGE_NAME' ,payload:res2[0].name})
}

}
export const addwish=()=>{
    return{   
            type:'ADD_WISH',
            payload:'code'
        }

}