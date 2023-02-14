import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeAnnoncePage } from './type-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: TypeAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeAnnoncePageRoutingModule {}
