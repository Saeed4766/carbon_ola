import React, { createContext, useContext, useReducer } from 'react';


export const INITS_STATE={
    surname:'',
    othernames:'',
    email:'',
    phone:'',
    password:'',
    repeat_password:'',
    gender:'',
    dob:'',
    loading:'false',
    error:'false'
}

export function Form (state,action){
    switch (action.type){
        case "START_FETCH":
            return{
                ...state,
            Loading: true}
            break;

        case "DATA_FETCHED":
            return{
                ...state,
           [action.field]: action.payload,
          Loading: false,
           Error: false
            }
            break;

            case 'RESET':
            return{
                ...state
            }
        
            case "ERROR":
                return{
                    ...state,
                    Error:true
                }
        
            default:
                return state
    }
}

export const FormContext = createContext()

export const FormProvider =({children})=>{
    const [state,dispatch] =useReducer (Form, INITS_STATE)
    return(
        <FormContext.Provider value={{state,dispatch}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm =()=>{
    return useContext(FormContext)
}