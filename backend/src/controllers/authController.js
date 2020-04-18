const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = {
    generateToken(params={}){
        return jwt.sign(params,authConfig.secret,{
            expiresIn: 86400,
        });
    },
    async authenticate(req,res){
        const {email, senha} = req.body;

        const usuario = await connection('usuario').select('*').where('email',email);
        if(usuario.length == 0){
            return res.status(400).send({error: 'Usuário não encontrado !'});
        }
        
        if(!await bcrypt.compare(senha,usuario[0].hash)){
            res.status(400).send({
                type:'error',
                message:'Senha Incorreta !'
            });
        }else{
            usuario[0].hash = undefined;//remove a senha para não retornar
            
            res.status(200).send({
                type:'success',
                message:'Senha Correta !',
                usuario,
                token: this.generateToken({id: email}),
            })
        }
    }
}