import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const SubscriptionSchema = new Schema({
    followed_id: String,
    following_id: String,
    created_at: Date
});

export const Subscription = model('Subscription', SubscriptionSchema);