import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

const postUser = mongoose.model('user', userSchema);

export default postUser;
