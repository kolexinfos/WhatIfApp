import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillmiComponent } from './skillmi.component';

describe('SkillmiComponent', () => {
  let component: SkillmiComponent;
  let fixture: ComponentFixture<SkillmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
