import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico9',
  templateUrl: './topico9.page.html',
  styleUrls: ['./topico9.page.scss'],
})
export class Topico9Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent;

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }


}
