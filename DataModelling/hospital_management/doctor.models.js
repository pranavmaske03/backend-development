import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: String,
            required: true,
        }, 
        qualification: {
            type: String,
            required: true,
        },
        experienceInYrs: {
            type: Number,
            default: 0,
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
            }
        ]
    },
    {timestamps: true}
);

export const Doctor = mongoose.model(
    'Doctor',
    doctorSchema
);