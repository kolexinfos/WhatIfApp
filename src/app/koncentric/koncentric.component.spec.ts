import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoncentricComponent } from './koncentric.component';

describe('KoncentricComponent', () => {
  let component: KoncentricComponent;
  let fixture: ComponentFixture<KoncentricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoncentricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoncentricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
