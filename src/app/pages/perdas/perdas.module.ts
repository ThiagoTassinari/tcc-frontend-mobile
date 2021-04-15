import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerdasPageRoutingModule } from './perdas-routing.module';

import { PerdasPage } from './perdas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerdasPageRoutingModule
  ],
  declarations: [PerdasPage]
})
export class PerdasPageModule {}
