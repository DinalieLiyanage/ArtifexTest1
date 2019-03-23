export interface IUserDAO {
    id?: string;
    displayName?: string;
    username?: string;
    password?: string;

}

export class UserDAO implements IUserDAO {
    constructor(
        public id?: string,
        public displayName?: string,
        public username?: string,
        public password?: string
    ) {


    }


}