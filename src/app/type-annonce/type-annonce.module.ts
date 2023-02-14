import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeAnnoncePageRoutingModule } from './type-annonce-routing.module';

import { TypeAnnoncePage } from './type-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeAnnoncePageRoutingModule
  ],
  declarations: [TypeAnnoncePage]
})
export class TypeAnnoncePageModule {}
