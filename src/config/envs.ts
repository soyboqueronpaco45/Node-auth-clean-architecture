//const env = Bun.env
import { get } from "env-var";

//const { PORT } = env

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
};

