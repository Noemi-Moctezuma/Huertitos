import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditarComponent } from './dialog-editar.component';

describe('DialogEditarComponent', () => {
  let component: DialogEditarComponent;
  let fixture: ComponentFixture<DialogEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
