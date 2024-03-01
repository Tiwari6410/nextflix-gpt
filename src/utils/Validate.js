
 const checkValidate=(email,password,name)=>{
     const IsNameValidate = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
    const IsEmailValidate =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const IsPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!IsNameValidate) return "FullName is not valid"
    if(!IsEmailValidate) return "Email ID is not Valide"
    if(!IsPasswordValidate) return "Password is not Valid"

    return null
}

export default checkValidate;