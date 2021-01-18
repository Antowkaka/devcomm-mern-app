import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    profileimg: String,
    dob: Date,
    bio: String,
    password: String,
    created_at: {type: Date, default: Date.now}
});

export const User = model('User', UserSchema);