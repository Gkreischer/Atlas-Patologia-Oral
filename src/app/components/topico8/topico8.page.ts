import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico8',
  templateUrl: './topico8.page.html',
  styleUrls: ['./topico8.page.scss'],
})
export class Topico8Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
