const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const{tipo_conta, nome, email} = request.body;

        await connection('usuario').insert({
            tipo_conta,
            nome,
            email,
        });

        return response.status(201).send();
    },

    async index(request,response){
        const {page = 1} = request.query;

        const [count] = await connection('usuario').count();

        const usuarios = await connection('usuario').limit(10).offset((page-1)*10).select('*');
    
        response.header('X-Total-Count',count['count(*)']);

        return response.json(usuarios);
    }
    
}
