import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunxminComponent } from './sunxmin.component';

describe('SunxminComponent', () => {
  let component: SunxminComponent;
  let fixture: ComponentFixture<SunxminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunxminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunxminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
