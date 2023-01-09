const router = require("express").Router();
const ClientModel = require("../models/Client.model");

// CADASTRAR CLIENTE
router.post("/create-client", async (req, res) => {
  try {
    const newClient = await ClientModel.create(req.body);
    return res.status(201).json({ message: "Success!", newClient });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// VER TODOS OS CLIENTES
router.get("/all-clients", async (req, res) => {
  try {
    const allClients = await ClientModel.find();
    return res.status(201).json({ message: "Success!", allClients });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// VER DETALHES DE UM CLIENTE
router.get("/details/:clientId", async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await ClientModel.findOne({ _id: clientId });
    return res.status(200).json({ message: "Success!", client });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// ATUALIZAR CLIENTE
router.patch("/edit/:clientId", async (req, res) => {
  try {
    const { clientId } = req.params;
    const updatedClient = await ClientModel.findOneAndUpdate(
      { _id: clientId },
      { ...req.body },
      { runValidators: true, new: true }
    );
    return res.status(200).json({ message: "Success!", updatedClient });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

// DELETAR CLIENTE
router.delete("/delete/:clientId", async (req, res) => {
  try {
    const { clientId } = req.params;
    const deletedClient = await ClientModel.deleteOne({ _id: clientId });
    return res.status(200).json({ message: "Success!", deletedClient });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error", error });
  }
});

module.exports = router;
