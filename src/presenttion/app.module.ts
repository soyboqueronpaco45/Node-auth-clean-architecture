import express, { Router } from "express";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
interface Options {
  port: number;
  baseUrl?: string;
  routes: Router;
}
export class AppModule {
  public readonly app = express();
  private readonly port: number;
  private readonly baseUrl: string;
  private readonly routes: Router;
  constructor(opgions: Options) {
    const { port, baseUrl = "http://localhost", routes } = opgions;
    this.port = port;
    this.baseUrl = baseUrl;
    this.routes = routes;
  }
  async start() {
    // TODO: todos middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    //  TODO: Usar todas las rutas definida
    this.app.use(this.routes);
    this.app.listen(this.port, () => {
      console.log(`aplicacion corriendo ${this.baseUrl}:${this.port}`);
      console.log(`aplicacion corriendo ${this.baseUrl}:${this.port}/api/v1`);
    });
  }
}
