import { TestBed } from '@angular/core/testing';

import { ColorGameGuard } from './color-game.guard';

describe('ColorGameGuard', () => {
  let guard: ColorGameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ColorGameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
