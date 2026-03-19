import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NajimComponent } from './najim.component';

describe('NajimComponent', () => {
  let component: NajimComponent;
  let fixture: ComponentFixture<NajimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NajimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NajimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
