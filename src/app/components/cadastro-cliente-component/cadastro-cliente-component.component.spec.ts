import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClienteComponentComponent } from './cadastro-cliente-component.component';

describe('CadastroClienteComponentComponent', () => {
  let component: CadastroClienteComponentComponent;
  let fixture: ComponentFixture<CadastroClienteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroClienteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroClienteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
