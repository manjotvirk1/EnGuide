export const returnErrors = (msg, status, id=null)=>{
    return {
        type:"GET_ERRORS",
        payload:{msg,status,id}
    }
}

export const cleanErrors = () => {
    return {
        type:"CLEAN_ERRORS",
    }
}