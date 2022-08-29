import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddCultivoComponent } from './dialog-add-cultivo.component';

describe('DialogAddCultivoComponent', () => {
  let component: DialogAddCultivoComponent;
  let fixture: ComponentFixture<DialogAddCultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddCultivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddCultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
