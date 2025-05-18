import React, { useState } from "react";
import { validateRegistration } from "../lib/validateRegistration";

export interface IRegistrationFormData {
    username: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
}

type Errors = Partial<Record<keyof IRegistrationFormData, string>>;

export function useRegistrationForm() {
    const [formData, setFormData] = useState<IRegistrationFormData>({
        username: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<Errors>({});
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMessage('');

        const validateErrors = validateRegistration(formData);
        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors);
            return;
        }
        setErrors({});
        
    }

    return { formData, errors, message, handleChange, handleSubmit }
}
