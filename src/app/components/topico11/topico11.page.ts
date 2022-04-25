import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico11',
  templateUrl: './topico11.page.html',
  styleUrls: ['./topico11.page.scss'],
})
export class Topico11Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
