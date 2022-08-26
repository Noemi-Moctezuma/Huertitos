import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempxminComponent } from './tempxmin.component';

describe('TempxminComponent', () => {
  let component: TempxminComponent;
  let fixture: ComponentFixture<TempxminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempxminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempxminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
