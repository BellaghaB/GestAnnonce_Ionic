import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVehiculePageRoutingModule } from './add-vehicule-routing.module';

import { AddVehiculePage } from './add-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVehiculePageRoutingModule
  ],
  declarations: [AddVehiculePage]
})
export class AddVehiculePageModule {}
