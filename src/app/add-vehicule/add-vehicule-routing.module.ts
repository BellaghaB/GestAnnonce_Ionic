import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVehiculePage } from './add-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: AddVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVehiculePageRoutingModule {}
