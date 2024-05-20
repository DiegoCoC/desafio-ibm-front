import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoComponentComponent } from './extrato-component.component';

describe('ExtratoComponentComponent', () => {
  let component: ExtratoComponentComponent;
  let fixture: ComponentFixture<ExtratoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtratoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
