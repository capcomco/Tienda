const express = require("express");
const ventasSchema = require("../models/ventas");

const router = express.Router();

//create venta

router.post("/ventas", (req, res)=> {
    const venta = ventasSchema(req.body);
    venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

//get all ventas    

router.get("/ventas", (req, res)=> {
    ventasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

//update a venta

router.put("/ventas/:id", (req, res) => {
    const { id } = req.params;
    const {id_Venta, descripcion, id_Cliente, cliente, fecha, estado } = req.body;
    ventasSchema
      .updateOne({ _id: id }, { $set: {id_Venta, descripcion, id_Cliente, cliente, fecha, estado }})
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({message:error}));

}); 

//delete a venta

router.delete("/ventas/:id", (req, res) => {
    const { id } = req.params;
    ventasSchema
      .remove({ _id: id })
      .then((data) => res.json(data).send({message:`La venta ha sido eliminada`}))
      .catch((error) => res.json({message:error}));

}); 

module.exports =router;