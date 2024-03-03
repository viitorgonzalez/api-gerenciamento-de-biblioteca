import { Request, Response } from 'express';
import UserServices from '../services/UserServices'
import { connectDB } from '../config/database';

const userService = new UserServices();

class UserController {


    getAllUsers = async (_req: Request, res: Response) => {
        try {
            const users = await userService.getAllUsersFromDb();
            res.send(users);
        } catch (err) {
            console.error("Erro ao obter todos os usuários:", err);
            res.status(500).json({ message: "Erro ao obter todos os usuários" });
        }
    };

    getUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const user = await userService.getUserByIdFromDb(userId);
            res.send(user);
        } catch (err) {
            console.error("Erro ao obter todos os usuários:", err);
            res.status(500).json({ message: "Erro ao obter  o usuários" });
        }
    };

    postNewUser = async (req: Request, res: Response) => {
        try {
            const {username, email, password} = req.body;
            await userService.postNewUserToDb(username, email, password);
            res.status(201).json({ message: "Usuário criado com sucesso" });
        } catch (err) {
            console.log("Erro ao postar usuário:", err);
            res.status(500).json({ message: "Erro ao postar usuário" });
        }
    }

    updateUserById = async (req: Request, res: Response) => {
        try {
            const {username, email, password} = req.body;
            const userId = req.params.id;
            await userService.updateUserByIdInDb(username, email, password, userId);
            
            res.status(200).json({ message: "Usuário atualizado" });
        } catch (err) {

        }
    };

    deleteAllUsers = async (_req: Request, res: Response):Promise<void> => {
        try {
            await userService.deleteAllUsersDb();
            res.status(200).json({ message: "Todos os usuários foram deletados" });
        } catch (err) {
            console.log("Erro ao deletar usuários");
            throw err;
        }
    };

    deleteUserById = async (req: Request, res: Response):Promise<void> => {
        try {
            const userId = req.params.id;
            await userService.deleteUserByIdInDb(userId);

            res.status(200).json({ message: "Usuário deletado" });
        } catch (err) {
            console.log("Erro ao deletar usuário");
            throw err;
        }
    };

}

export default UserController;
