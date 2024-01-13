
 const checkValidate=(email,password,name)=>{
    const IsEmailValidate =  /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)
    const IsPasswordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const IsNameValidate = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    
    if(!IsEmailValidate) return "Email ID is not Valide"
    if(!IsPasswordValidate) return "Password is not Valid"
    if(!IsNameValidate) return "FullName is not valid"

    return null
}

export default checkValidate;