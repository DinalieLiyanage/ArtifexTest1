export interface IUserDAO {
    id?: string;
    name?: string;
    email?: string;
    username?: string;
    password?: string;

}

export class UserDAO implements IUserDAO {
    constructor(
        public id?: string,
        public name?: string,
        public email?: string,
        public password?: string
    ) {


    }


}