import { server } from "@providers/server.provider";
import { envs } from "@helpers/index.helpers";

server.listen(envs.SERVER_PORT, () => {
  console.log(`Server is running on port ${envs.SERVER_PORT}`);
});
