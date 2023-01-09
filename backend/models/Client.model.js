const { Schema, model, Types } = require("mongoose");

const clientSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  telephone: { type: Number, required: true, trim: true },
  address: { type: String, required: true },
  cpf: { type: Number, required: true, trim: true },
});

const ClientModel = model("Client", clientSchema);

module.exports = ClientModel;
