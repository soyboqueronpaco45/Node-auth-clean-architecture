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
    //  TODO: Usar todas las rutas definida
    await this.app.use(this.routes);
    await this.app.listen(this.port, () => {
      console.log(`aplicacion corriendo ${this.baseUrl}:${this.port}`);
      console.log(`aplicacion corriendo ${this.baseUrl}:${this.port}/api/v1`);
    });
  }
}
