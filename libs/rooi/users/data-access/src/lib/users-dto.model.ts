import {DeepReadonly} from "@core/utils";

export type UsersDTO = DeepReadonly<{
  id: number;
  login: string;
  password: string;
  email: string;
  name: string;
}>;
