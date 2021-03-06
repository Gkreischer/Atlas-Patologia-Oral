import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico13',
  templateUrl: './topico13.page.html',
  styleUrls: ['./topico13.page.scss'],
})
export class Topico13Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
