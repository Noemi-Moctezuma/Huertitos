import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEtapaComponent } from './dialog-add-etapa.component';

describe('DialogAddCultivoComponent', () => {
  let component: DialogAddEtapaComponent;
  let fixture: ComponentFixture<DialogAddEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEtapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
