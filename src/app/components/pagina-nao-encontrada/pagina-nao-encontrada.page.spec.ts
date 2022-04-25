import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaNaoEncontradaPage } from './pagina-nao-encontrada.page';

describe('PaginaNaoEncontradaPage', () => {
  let component: PaginaNaoEncontradaPage;
  let fixture: ComponentFixture<PaginaNaoEncontradaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNaoEncontradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaNaoEncontradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
