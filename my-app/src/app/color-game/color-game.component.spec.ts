import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGameComponent } from './color-game.component';

describe('ColorGameComponent', () => {
  let component: ColorGameComponent;
  let fixture: ComponentFixture<ColorGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
