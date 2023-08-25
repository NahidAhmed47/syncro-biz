import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        unique: true, // no two users can have the same email
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },
    ein: {
        type: String,
        required: true,
    },
    employee: {
        type: String,
        required: true,
    },
    profit: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    pin: {
        type: String,
        required: true,
    },

}, { timestamps: true });

const User = models.User || mongoose.model('User', userSchema);
export default User;