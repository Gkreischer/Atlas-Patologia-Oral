import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico6PageRoutingModule } from './topico6-routing.module';

import { Topico6Page } from './topico6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico6PageRoutingModule
  ],
  declarations: [Topico6Page]
})
export class Topico6PageModule {}
