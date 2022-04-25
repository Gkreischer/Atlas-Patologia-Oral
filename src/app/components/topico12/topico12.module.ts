import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico12PageRoutingModule } from './topico12-routing.module';

import { Topico12Page } from './topico12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico12PageRoutingModule
  ],
  declarations: [Topico12Page]
})
export class Topico12PageModule {}
