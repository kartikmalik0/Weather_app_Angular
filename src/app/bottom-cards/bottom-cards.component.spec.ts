import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCardsComponent } from './bottom-cards.component';

describe('BottomCardsComponent', () => {
  let component: BottomCardsComponent;
  let fixture: ComponentFixture<BottomCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomCardsComponent]
    });
    fixture = TestBed.createComponent(BottomCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
