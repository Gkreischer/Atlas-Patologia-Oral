import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico11PageRoutingModule } from './topico11-routing.module';

import { Topico11Page } from './topico11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico11PageRoutingModule
  ],
  declarations: [Topico11Page]
})
export class Topico11PageModule {}
