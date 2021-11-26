import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { FruteriaComponent } from "./components/fruteria/fruteria.component";
import { Error404Component } from "./components/error404/error404.component";
import { PanaderiaComponent } from "./components/panaderia/panaderia.component";

const appRoutes: Routes = [
  //RUTA POR DEFECTO
  { path: "", component: HomeComponent },
  //RUTA SIMPLE
  { path: "frutería", component: FruteriaComponent },
    //RUTA PARAMETROS
    { path: "panadería", component: PanaderiaComponent },
    { path: "panadería/:nombre", component: PanaderiaComponent },
  //RUTA ERROR
  { path: "**", component: Error404Component },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
