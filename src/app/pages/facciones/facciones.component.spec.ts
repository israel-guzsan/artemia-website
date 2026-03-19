import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaccionesComponent } from './facciones.component';

describe('FaccionesComponent', () => {
  let component: FaccionesComponent;
  let fixture: ComponentFixture<FaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaccionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
