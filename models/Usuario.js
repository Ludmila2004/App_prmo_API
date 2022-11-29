const mongoose = require("mongoose")
const Schema = mongoose.Schema

// name, id, email, enrolmentCode, isAdmin, isMonitor, password
const Usuario = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    enrolmentCode: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    isMonitor: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
})

mongoose.model("usuarios", Usuario)
