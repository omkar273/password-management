import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    savedPlainPassword: {
        type: Array,
        default: [],
    },
    savedHashedPassword: {
        type: Array,
        default: [],
    }
});

const userModel = mongoose.model('userModel', userSchema);
export default userModel;











