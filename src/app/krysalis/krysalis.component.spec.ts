import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrysalisComponent } from './krysalis.component';

describe('KrysalisComponent', () => {
  let component: KrysalisComponent;
  let fixture: ComponentFixture<KrysalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrysalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrysalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
