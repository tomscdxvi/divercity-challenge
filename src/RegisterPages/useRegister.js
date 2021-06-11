import React from 'react'
import { useState, useEffect } from 'react'
import verifyRegister from './verifyRegister'

const useRegister = (verifyRegister) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirm_password: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(verifyRegister(values));
        setIsSubmit(true)
    }

    return { handleChange, values, handleSubmit, errors }
}

export default useRegister
