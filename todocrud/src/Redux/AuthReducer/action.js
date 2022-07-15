
import axios from "axios";
import * as types from "./actionTypes";

const register = (payload)=>(dispatch)=>{
    dispatch({type : types.REGISTER_REQUEST})

    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
          .then(({data})=>{
            dispatch({type : types.REGISTER_SUCCESS , payload : data})
         
        return types.REGISTER_SUCCESS
        })
          .catch((e)=>{
            dispatch({type : types.REGISTER_FAILURE , payload : e})
         return types.REGISTER_FAILURE
        })
}

const login = (params)=>(dispatch)=>{

 dispatch({type: types.LOGIN_REQUEST})


 return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params)
          .then(({data})=>{
            dispatch({type : types.LOGIN_SUCCESS , payload : data.token})
          return types.LOGIN_SUCCESS
        })
          .catch((e)=>{
            dispatch({type : types.LOGIN_FAILURE , payload : e})
         return types.LOGIN_FAILURE
        
        })


}



export {register ,login}