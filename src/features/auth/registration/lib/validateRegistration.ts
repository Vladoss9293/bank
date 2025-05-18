import type { IRegistrationFormData } from "../model/useRegistrationForm";

export function validateRegistration(formData: IRegistrationFormData) {
    const errors: Partial<Record<keyof IRegistrationFormData, string>> = {};
    const {
        username,
        firstName,
        lastName,
        phoneNumber,
        email,
        password
      } = formData;

      if (!username.trim()) {
        errors.username = 'Введите логин';
      } else if (username.length < 4 && username.length > 15) {
        errors.username = 'Логин должен содержать минимум 3 символа, максим 14 символов.';
      } 

      if (!firstName.trim()) {
        errors.firstName = 'Введите имя';
      }

      if (!lastName.trim()) {
        errors.firstName = 'Введите фамилию';
      }

      if (!phoneNumber.trim()) {
        errors.phoneNumber = 'Введите номер телефона';
      } else if (!/^\d{10, 15}$/.test(phoneNumber)) {
        errors.phoneNumber = 'Некорректный формат номера';
      }

      if (!email.trim()) {
        errors.email = 'Введите email';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Некорректный email';
      }

      if (!password) {
        errors.password = 'Введите пароль';
      } else if (password.length < 9 && password.length > 29) {
        errors.password = 'Пароль должен быть не менее 8 символов и не более 28'
      } 

      return errors;
}