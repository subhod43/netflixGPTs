export const validateFormFields = (email, password, name, confirmPassword, isSignInForm) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-z ]{2,30}$/.test(name);
    const isConfirmPasswordValid = password === confirmPassword;

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isSignInForm) {
        if(!isNameValid) return "Name is not valid";
        if(!isConfirmPasswordValid) return "Passwords do not match";
    }

    return null;
}