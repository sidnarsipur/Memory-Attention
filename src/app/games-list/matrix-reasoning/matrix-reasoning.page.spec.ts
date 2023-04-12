import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatrixReasoningPage } from './matrix-reasoning.page';

describe('MatrixReasoningPage', () => {
  let component: MatrixReasoningPage;
  let fixture: ComponentFixture<MatrixReasoningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixReasoningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatrixReasoningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
