import { envs } from "./config";
import { AppModule } from "./presenttion/app.module";
import { AppRoutes } from "./presenttion/app.routes";

(() => {
  main();
})();

async function main() {
  const { PORT, ACCEPTED_ORIGINS } = envs;

  new AppModule({
    port: PORT,
    baseUrl: Bun.env.BASE_URL,
    routes: AppRoutes.routes,
  }).start();
}
