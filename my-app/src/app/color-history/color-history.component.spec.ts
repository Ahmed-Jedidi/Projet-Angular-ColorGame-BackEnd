import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHistoryComponent } from './color-history.component';

describe('ColorHistoryComponent', () => {
  let component: ColorHistoryComponent;
  let fixture: ComponentFixture<ColorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
