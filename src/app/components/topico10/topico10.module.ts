import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico10PageRoutingModule } from './topico10-routing.module';

import { Topico10Page } from './topico10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico10PageRoutingModule
  ],
  declarations: [Topico10Page]
})
export class Topico10PageModule {}
