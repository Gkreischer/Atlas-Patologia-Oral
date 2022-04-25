import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico9PageRoutingModule } from './topico9-routing.module';

import { Topico9Page } from './topico9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico9PageRoutingModule
  ],
  declarations: [Topico9Page]
})
export class Topico9PageModule {}
