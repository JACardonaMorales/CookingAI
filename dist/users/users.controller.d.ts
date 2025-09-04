interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}
export declare class UsersController {
    private users;
    getUsers(): User[];
}
export {};
