const { response } = require('express')

const usuariosGet = (req, res = response )  => {

    const query = req.query;

    res.json({
        msg: "get API - controller ",
        query
    });
}

const usuariosPost = (req, res) => {

    const body = req.body;

    res.json({
        msg: "put API - controller ",
        body
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: "post API - controller ",
        id
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: "delete API - controller "
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}