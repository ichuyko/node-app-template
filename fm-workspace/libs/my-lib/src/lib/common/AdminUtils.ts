import {User} from "../types/User";
import {Post} from "../../../../my-node-lib/src/lib/dto/Post";

export enum AdminType {
  A1 = "a1",
  B1 = "b1"
}

export function isAdmin(user: User) {
  return user.id === 1;
}

export function isPost(post: Post) {
  return post.id === 1;
}
