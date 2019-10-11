import { Injectable } from '@nestjs/common';
import {User} from "../../../../libs/my-lib/src/lib/types/User";
import {isAdmin} from "../../../../libs/my-lib/src/lib/common/AdminUtils";
import {Post} from "../../../../libs/my-node-lib/src/lib/dto/Post";

@Injectable()
export class AppService {
  getData(): { message: string } {
    const user: User = {id: 1, name: "Ivan"};
    const post: Post = {id: 1, title: "Ivan!!", rating: 1, text: "nest app!!"};
    return ({ message: `Welcome to my-app! isOK: ${isAdmin(user).toString()} Post: ${JSON.stringify(post)}` });
  }
}
