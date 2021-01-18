export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

export const fieldsValidator = body => {
    const errors = {};

    for (const [key, value] of Object.entries(body)) {
        if (value === '') errors[key] = `Field ${key} is required`;

        if (key === 'email' && !emailRegex.test(value)) {
            errors[key] = `Incorrect ${key}`
        }
        if (key === 'password' && !passRegex.test(value)) {
            errors[key] = `Incorrect ${key}`
        }
    }

    return errors;
}