const db = require("../models");

module.exports = {
    getSaved: (req, res) => {
        db.Book
         .find()
         .sort({ dateSaved: -1})
         .then(data => {
            res.json(data)
            })
         .catch(err => res.json(err));
    },

    saveBook: (req, res) => {
      console.log(req.body) 
      db.Book
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
   },

   removeSaved: (req, res) => {
       db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
   }
};
