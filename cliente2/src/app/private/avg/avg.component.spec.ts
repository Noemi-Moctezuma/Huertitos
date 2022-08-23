import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgComponent } from './avg.component';

describe('AvgComponent', () => {
  let component: AvgComponent;
  let fixture: ComponentFixture<AvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
