const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");

const authenticate = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.body.id }).lean();
        let result = false;
        
        result = user ? true : false;
        
        return res.status(200).json(result);
    } catch(error) {
        return res.status(404).json(false)
    }
}

module.exports = {
    authenticate
};
