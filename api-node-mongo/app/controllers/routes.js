const express = require('express');
const mongoose = require('mongoose');
const Item = require('../models/item'); // Asegúrate de que este archivo esté correctamente configurado
const router = express.Router();

// Endpoint PUT para actualizar un item por ID
router.put('/items/:id', async (req, res) => {
    try {
        // Verificar si el ID tiene el formato correcto de ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('ID inválido');
        }

        // Buscar y actualizar el item
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,   // ID del item
            req.body,        // Datos que se van a actualizar
            { new: true }    // Devuelve el objeto actualizado
        );

        if (!updatedItem) {
            return res.status(404).send('Item no encontrado');
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(500).send('Error al actualizar el item: ' + error);
    }
});

// Endpoint DELETE para eliminar un item por ID
router.delete('/items/:id', async (req, res) => {
    try {
        // Verificar si el ID tiene el formato correcto de ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).send('ID inválido');
        }

        // Buscar y eliminar el item
        const deletedItem = await Item.findByIdAndDelete(req.params.id);

        if (!deletedItem) {
            return res.status(404).send('Item no encontrado');
        }

        res.json({ message: 'Item eliminado con éxito' });
    } catch (error) {
        res.status(500).send('Error al eliminar el item: ' + error);
    }
});

module.exports = router;
