import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoComponentComponent } from './deposito-component.component';

describe('DepositoComponentComponent', () => {
  let component: DepositoComponentComponent;
  let fixture: ComponentFixture<DepositoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepositoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
