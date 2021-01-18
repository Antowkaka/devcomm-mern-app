import { fieldsValidator } from "../helpers/validator.js";

export const errorHandlers = asyncController => {
    return (req, res, next) => {
        try {
            asyncController(req, res, next);
        } catch (e) {
            console.log(e);
        }
    }
};

export const validationErrorHandler = asyncController => (req, res, next) => {
    const errors = fieldsValidator(req.body);
    console.log('Validator pass: ', req.body.password);
    if (Object.keys(errors).length !== 0) {
        res.status(401).json({
            status: 'failed',
            errors: errors
        });
    } else {
        asyncController(req, res, next);
    }
}