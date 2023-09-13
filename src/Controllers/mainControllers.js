const path = require ("path");

const products = require("../data/data")

const mainController={
    mostrarHome:(req, res)=>{
        res.render("home", );
    },
    mostrarRegistro: (req, res)=>{
    res.render("register");
    },
    mostrarLogin: (req,res)=>{
    res.render("login");
    },
};

module.exports = mainController;
