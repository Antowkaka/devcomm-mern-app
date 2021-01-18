import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const LikeSchema = new Schema({
    user_id: String,
    post_id: String,
    created_at: Date
});

export const Like = model('Like', LikeSchema);