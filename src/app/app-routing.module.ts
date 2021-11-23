import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), HomeRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
