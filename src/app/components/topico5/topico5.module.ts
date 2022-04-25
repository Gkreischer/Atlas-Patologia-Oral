import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico5PageRoutingModule } from './topico5-routing.module';

import { Topico5Page } from './topico5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico5PageRoutingModule
  ],
  declarations: [Topico5Page]
})
export class Topico5PageModule {}
