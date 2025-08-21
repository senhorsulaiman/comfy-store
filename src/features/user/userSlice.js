import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

 const themes={
    light:'light',
     dark:'dark'
 }

 const getUserFromLocalStorage=()=>{
    
    return JSON.parse(localStorage.getItem('user')) || null
}
const getThemeFromLocalStorage=(state)=>{
    const theme= localStorage.getItem('theme') || themes.light
    document.documentElement.setAttribute('data-theme',theme)
    return theme
}


const initialState={

    user:getUserFromLocalStorage(),
    theme:getThemeFromLocalStorage() ,

};

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

        loginUser:(state,action)=>{

            // console.log(action.payload)
            const user={...action.payload.user,token:action.payload.jwt}
            state.user=user;
            localStorage.setItem('user',JSON.stringify(user))

        },
        logoutUser:(state,action)=>{

            // console.log('logout')
            state.user=null;
            localStorage.removeItem('user');
            toast.success('logged out sucessfully')
        },
        toggleTheme:(state)=>{
         
 
        const {light,dark}=themes;
        state.theme=state.theme===light?dark:light;
        document.documentElement.setAttribute('data-theme',state.theme)
        localStorage.getItem('theme',state.theme)



        }
    }

})

export const {loginUser,logoutUser,toggleTheme}=userSlice.actions
export default userSlice.reducer
