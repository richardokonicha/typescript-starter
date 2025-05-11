import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserDto } from "../../../libs/dto";

@Injectable()
export class OptionalGuard extends AuthGuard("two-factor") {
  handleRequest<TUser = UserDto>(error: Error, user: TUser): TUser {
    return user;
  }
}
