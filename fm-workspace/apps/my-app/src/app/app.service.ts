import { Injectable } from '@nestjs/common';
import {User} from "../../../../libs/my-lib/src/lib/types/User";
import {isAdmin} from "../../../../libs/my-lib/src/lib/common/AdminUtils";

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user: User = {id: 1, name: "Ivan"};
    return ({ message: `Welcome to my-app! isOK: ${isAdmin(user).toString()}` });
  }
}
