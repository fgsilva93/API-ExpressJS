const express = require('express'); 
const chirpsStore = require('../chirpsstore');
let router = express.Router();

 router.get('/:id?', (req, res) => {
     let id = req.params.id;
     if(id) {
        res.json(chirpsStore.GetChirp(id));
     }
     else {
         res.send(chirpsStore.GetChirps());
     }
 });

 router.post('/', (req, res) => {
     chirpsStore.CreateChirp(req.body);
     res.sendStatus(200);
 })

 router.put('/:id', (req, res) => {
     chirpsStore.UpdateChirp(req.params.id, {
         User: req.body.User,
         Text: req.body.Text
     })
     res.sendStatus(200); 
 })

 router.delete('/:id', (req, res) => {
     chirpsStore.DeleteChirp(req.params.id);
     res.sendStatus(200);
 })

 module.exports = router; 