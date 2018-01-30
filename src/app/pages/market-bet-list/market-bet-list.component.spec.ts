import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBetListComponent } from './market-bet-list.component';

describe('MarketBetListComponent', () => {
  let component: MarketBetListComponent;
  let fixture: ComponentFixture<MarketBetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketBetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
