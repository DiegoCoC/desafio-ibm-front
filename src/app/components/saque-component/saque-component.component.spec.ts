import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaqueComponentComponent } from './saque-component.component';

describe('SaqueComponentComponent', () => {
  let component: SaqueComponentComponent;
  let fixture: ComponentFixture<SaqueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaqueComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaqueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
