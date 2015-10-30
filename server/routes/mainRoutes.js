/**
 * Created by Rodrigo Bastos on 29/10/15.
 */

var express     = require('express');


module.exports = new express.Router()
  .get('/', getHome);

function getHome (req, res) {
  res.render('index', {title:'Learning NodeJS'});
}