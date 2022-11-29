
import dbConnect from "../../src/utils/dbConnect"
import UsersModel from "../../src/models/users"

const users = async (req, res) => {
    const {method } = req

    switch(method){
        case 'GET':
            await dbConnect()
            res.status(200).json({ sucess: true})
            break
        
        case 'POST':
            // Pegar os dados que vem no req
            // Conectar no banco
            // Criptografar a senha (não obrigatório mais importante em um projeto)
            // Salvar os dados
            // Responder sucesso
            const {
              name,
              email,
              password,
            } = req.body
        await dbConnect()

        const user = new UsersModel ({
            name,
            email,
            password,        
        })
        user.save()
        
        res.status(201).json({ sucess : true})
    }    
} 

export default users

