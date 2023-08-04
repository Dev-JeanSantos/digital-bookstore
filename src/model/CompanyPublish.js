import mongoose from "mongoose";

const companyPublishSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const companyPublishes = mongoose.model('companyPublish', companyPublishSchema);

export default companyPublishes;

