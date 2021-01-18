import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    user_id: String,
    body: {
        text: String,
        imgUrl: String
    },
    created_at: Date
});

export const Post = model('Post', PostSchema);