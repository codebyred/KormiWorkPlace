export function validate_email(email){

    if(email.trim() === "")

        return "Please provide email";

    return "";

}

export function validate_password(password){
    
    if(password.trim() === "")

        return "Please provide password";
    
    if(password.length < 4)

        return "Password should be 4 characters long"

    return "";


}

