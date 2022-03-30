import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '1. Alterações do Desenvolvimento das Estruturas Orais e Maxilofaciais', url: '/folder/Inbox'},
    { title: '2. Doenças da polpa e periápice', url: '/folder/Outbox' },
    { title: '3. Doenças do periodonto', url: '/folder/Favorites' },
    { title: '4. Infecções fúngicas', url: '/folder/Archived' },
    { title: '5. Infecções bacterianas', url: '/folder/Trash' },
    { title: '6. Infecções virais', url: '/folder/Spam' },
    { title: '7. Lesões reativas', url: '/folder/Spam' },
    { title: '8. Lesões pigmentadas', url: '/folder/Spam' },
    { title: '9. Neoplasias benignas', url: '/folder/Spam' },
    { title: '10. Desordens orais potencialmente malignas', url: '/folder/Spam' },
    { title: '11. Doenças dermatológicas e imunoimediatas', url: '/folder/Spam' },
    { title: '12. Patologia das glândulas salivares', url: '/folder/Spam' },
    { title: '13. Cistos Odontogênicos', url: '/folder/Spam'},
    { title: '14. Cistos não Odontogenicos', url: '/folder/Spam' },
    { title: '15. Tumores Odontogênicos', url: '/folder/Spam' },
    { title: '16. Patologia Óssea ', url: '/folder/Spam' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
