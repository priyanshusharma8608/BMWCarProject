const ValidName = (name)=>{
    const validName = /^[a-zA-Z ]+$/;
    return validName.test(name)
}


const Validemail = (email)=>{
     const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return validEmail.test(email)
}


const Validpassword = (Password)=>{
     const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return validPassword.test(Password)
}

const ValidMobile = (Password)=>{
     const validPassword = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
    return validPassword.test(Password)
}


module.exports = { ValidName, Validemail, Validpassword, ValidMobile}