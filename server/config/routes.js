const mixes = require('../controllers/mixes');
const path = require('path');
const Mix = require('../models/mix');
const Track = require('../models/mix');

module.exports = function(app){
    app.post('mixes/create', (req, res) => {
        console.log("Made it to routes CREATE mix", req.body)
        mixes.create(req, res);
    })
    app.post('mixes/:id/addtrack', (req, res) => {
        console.log("Made it to routes ADD TRACK", req.body)
        mixes.addTrack(req, res);
    })
    app.patch('mixes/:id/addReview', (req, res) => {
        mixes.addReview(req, res);
    })
    app.patch('mixes/:id/finalize', (req, res) => {
        mixes.finalize(req, res);
    })
    app.get('mixes/:id/view', (req, res) => {
        mixes.view(req, res);
    })
    app.get('mixes/:id/userview', (req, res) => {
        mixes.userview(req, res);
    })
    app.get('mixes/show', (req, res) => {
        mixes.show(req, res);
    })
    app.delete('mixes/:id/delete', (req, res) => {
        mixes.delete(req, res)
    })
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./mixraterAngular/dist/index.html"))
    })
}
