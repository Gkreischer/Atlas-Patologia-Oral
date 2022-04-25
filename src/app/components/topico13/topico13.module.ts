import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico13PageRoutingModule } from './topico13-routing.module';

import { Topico13Page } from './topico13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico13PageRoutingModule
  ],
  declarations: [Topico13Page]
})
export class Topico13PageModule {}
