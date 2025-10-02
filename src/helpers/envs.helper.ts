import dotenv from "dotenv";
dotenv.config();

const envs = {
  SERVER_PORT: process.env.SERVER_PORT,
};

export { envs };
