import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico1PageRoutingModule } from './topico1-routing.module';

import { Topico1Page } from './topico1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico1PageRoutingModule
  ],
  declarations: [Topico1Page]
})
export class Topico1PageModule {}
