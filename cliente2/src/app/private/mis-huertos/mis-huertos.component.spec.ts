import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHuertosComponent } from './mis-huertos.component';

describe('MisHuertosComponent', () => {
  let component: MisHuertosComponent;
  let fixture: ComponentFixture<MisHuertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisHuertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisHuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
