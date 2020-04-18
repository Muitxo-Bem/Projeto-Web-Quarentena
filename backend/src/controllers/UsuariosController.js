const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const authController = require('./authController');
//show semelhante ao index, porem retorna apenas um que vem da request.params
module.exports = {
    async create(request,response){
        const{tipo_conta = 0, nome, email, senha} = request.body;

        const check = await connection('usuario').select('*').where('email',email);
        if(check.length != 0){
            return response.status(409).send({
                type:'error',
                message: "Email já cadastrado !"
            })
        }else{
            const hash = await bcrypt.hash(senha,10); // criptografa a senha do usuario, pra salvar no banco
            await connection('usuario').insert({
                tipo_conta,
                nome,
                email,
                hash,
            });
            return response.status(201).send({
                type:'success',
                message:'Cadastro Realizado com Sucesso !',
                token: authController.generateToken({id: email})
            });
        }

    },

    async index(request,response){
        const {page = 1} = request.query;

        const [count] = await connection('usuario').count();

        const usuarios = await connection('usuario').limit(10).offset((page-1)*10).select('*');
    
        response.header('X-Total-Count',count['count(*)']);

        return response.json(usuarios);
    }
    
}
