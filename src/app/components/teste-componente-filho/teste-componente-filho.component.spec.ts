import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponenteFilhoComponent } from './teste-componente-filho.component';

describe('TesteComponenteFilhoComponent', () => {
  let component: TesteComponenteFilhoComponent;
  let fixture: ComponentFixture<TesteComponenteFilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteComponenteFilhoComponent]
    });
    fixture = TestBed.createComponent(TesteComponenteFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
