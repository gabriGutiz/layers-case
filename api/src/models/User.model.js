import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        select: false
    },
    user: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: false,
        select: false
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    },
    ativo: {
        type: Boolean,
        default: true
    },
    __v: {
        type: Number,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);

export { User };