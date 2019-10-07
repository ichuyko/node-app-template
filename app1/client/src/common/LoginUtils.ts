import {User} from "shared/src/types/User";

export function isAdmin(user: User): boolean {
    return user.id === 1;
}