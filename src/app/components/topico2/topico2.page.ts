import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico2',
  templateUrl: './topico2.page.html',
  styleUrls: ['./topico2.page.scss'],
})
export class Topico2Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent; 

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
