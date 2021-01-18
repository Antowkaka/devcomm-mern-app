import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

import { User } from '../models/User.js';
import { validationErrorHandler } from './errorHandlers.js';
import { emailRegex } from "../helpers/validator.js";

dotenv.config();

const RegisterController = async (req, res, next) => {
    //Hashing password with bcrypt
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    //Create new user in MongoDB
    const newUser = await User.create(req.body)

    //Success response
    res.status(201).json({
        status: 'success',
        data: {user: newUser}
    })
}

const LoginController = async (req, res, next) => {
    const isEmail = emailRegex.test(req.body.email);

    const foundUser = isEmail
        ? await User.find({email: req.body.email}).exec()
        : await User.find({username: req.body.username}).exec();

    //If user does not exist in DB
    if (!foundUser[0]) {
        res.status(401).json({
            status: 'failed',
            data: {error: 'User doesn`t exist'}
        })
    }
    //Comparing password
    const passwordIsCorrect = await bcrypt.compareSync(req.body.password, foundUser[0].password);

    if (passwordIsCorrect) {
        res.status(200).json({
            status: 'success',
            data: {user: foundUser[0]}
        })
    } else {
        res.status(401).json({
            status: 'failed',
            data: {error: 'Wrong password, try again!'}
        })
    }
}

export const RegisterUser = validationErrorHandler(RegisterController);

export const LoginUser = validationErrorHandler(LoginController);