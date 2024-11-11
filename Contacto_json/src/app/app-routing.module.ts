import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Asegúrate de que estés importando el módulo correcto
import { HomePageModule } from './home/home.module'; // Si es home.module.ts

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) // Aquí cargamos el módulo de HomePage
  },
  // Otras rutas de la aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


