import { Request, Response } from 'express';

class UserController {

    getAllUsers = (req: Request, res: Response) => {
        res.send("getAllUsers");
    }

    getUserById = (req: Request, res: Response) => {
        res.send("getUserById");
    }

    postNewUser = (req: Request, res: Response) => {
        res.send("userPosted");
    }

    updateUserById = (req: Request, res: Response) => {
        res.send("userUpdated");
    }

    deleteAllUsers = (req: Request, res: Response) => {
        res.send("allUsersDeleted");
    }

    deleteUserById = (req: Request, res: Response) => {
        res.send("userDeleted");
    }

}

export default UserController;
