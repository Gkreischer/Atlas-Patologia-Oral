import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Topico3PageRoutingModule } from './topico3-routing.module';

import { Topico3Page } from './topico3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Topico3PageRoutingModule
  ],
  declarations: [Topico3Page]
})
export class Topico3PageModule {}
