import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'mes-annonces',
    loadChildren: () => import('./mes-annonces/mes-annonces.module').then( m => m.MesAnnoncesPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'type-annonce',
    loadChildren: () => import('./type-annonce/type-annonce.module').then( m => m.TypeAnnoncePageModule)
  },
  {
    path: 'add-vehicule',
    loadChildren: () => import('./add-vehicule/add-vehicule.module').then( m => m.AddVehiculePageModule)
  },
  // {
  //   path: 'add',
  //   loadChildren: () => import('./add/add.module').then((m) => m.AddPageModule),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
