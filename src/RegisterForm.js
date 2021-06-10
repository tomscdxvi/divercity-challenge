import React, { useState } from 'react'
import Register from './Register'
import RegisterSuccess from './RegisterSuccess'

const RegisterForm = () => {
    const[isSubmit, setIsSubmit] = useState(false)

    function submitForm() {
        setIsSubmit(true);
    }

    return (
        <div>
            {!isSubmit ? <Register submitForm={submitForm} /> : (<RegisterSuccess /> )}
        </div>
    )
}

export default RegisterForm


