export default function verifyRegister(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username Required"
    }

    if(!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "The email you entered is invaild."
    }

    if(!values.password) {
        errors.password = "Password Required"
    } else if (values.password.length < 6) {
        errors.password = "Password must be longer than 6 characters."
    }

    if(!values.confirm_password) {
        errors.confirm_password = "Password Required"
    } else if (values.confirm_password !== values.password) {
        errors.password = "Passwords do not match."
    }

    return errors;
}