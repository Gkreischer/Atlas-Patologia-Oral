import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico5',
  templateUrl: './topico5.page.html',
  styleUrls: ['./topico5.page.scss'],
})
export class Topico5Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
