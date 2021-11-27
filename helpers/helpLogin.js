import React, { useState } from 'react'

export const useLogin = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = (field, data) => {

        switch (field) {
            case 'USERNAME':
                setUsername(data)
                break;

            case 'PASSWORD':
                setPassword(data)
                break;

            case 'EMAIL':
                setEmail(data)
                break; 

            default:
                break;
        }
    }

    return {
        username,
        password,
        email,
        handleChange
    }
}