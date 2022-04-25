import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-topico3',
  templateUrl: './topico3.page.html',
  styleUrls: ['./topico3.page.scss'],
})
export class Topico3Page implements OnInit {

  @ViewChild(IonContent) private content: IonContent; 

  constructor() { }

  ngOnInit() {
  }

  sobeParaInicioDaPagina() {
    this.content.scrollToTop(1000);
  }

}
