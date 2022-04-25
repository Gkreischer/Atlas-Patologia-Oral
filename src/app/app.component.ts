import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home'},
    { title: '1. Alterações do Desenvolvimento das Estruturas Orais e Maxilofaciais', url: '/topico1'},
    { title: '2. Doenças da polpa e periápice', url: '/topico2' },
    { title: '3. Doenças do periodonto', url: '/topico3' },
    { title: '4. Infecções fúngicas', url: '/topico4' },
    { title: '5. Infecções bacterianas', url: '/topico5' },
    { title: '6. Infecções virais', url: '/topico6' },
    { title: '7. Lesões reativas', url: '/topico7' },
    { title: '8. Lesões pigmentadas', url: '/topico8' },
    { title: '9. Neoplasias benignas', url: '/topico9' },
    { title: '10. Desordens orais potencialmente malignas', url: '/topico10' },
    { title: '11. Doenças dermatológicas e imunoimediatas', url: '/topico11' },
    { title: '12. Patologia das glândulas salivares', url: '/topico12' },
    { title: '13. Cistos Odontogênicos', url: '/topico13'},
    { title: '14. Cistos não Odontogenicos', url: '/topico14' },
    { title: '15. Tumores Odontogênicos', url: '/topico15' },
    { title: '16. Patologia Óssea ', url: '/topico16' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
