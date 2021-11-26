import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FruteriaComponent } from './components/fruteria/fruteria.component';
import { Error404Component } from './components/error404/error404.component';
import { PanaderiaComponent } from './components/panaderia/panaderia.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, HomeComponent, FruteriaComponent, Error404Component, PanaderiaComponent],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
