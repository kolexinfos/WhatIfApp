import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JunglenomicsComponent } from './junglenomics.component';

describe('JunglenomicsComponent', () => {
  let component: JunglenomicsComponent;
  let fixture: ComponentFixture<JunglenomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JunglenomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JunglenomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
