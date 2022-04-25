import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico1',
  templateUrl: './topico1.page.html',
  styleUrls: ['./topico1.page.scss'],
})
export class Topico1Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent; 

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
