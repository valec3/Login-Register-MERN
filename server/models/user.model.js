import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    username:{
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    },
    {
        timestamps: true,
    }
)
//  Exportar el modelo de usuario
export default mongoose.model("User", userSchema);