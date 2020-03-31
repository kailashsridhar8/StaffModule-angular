import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityresultsComponent } from './universityresults.component';

describe('UniversityresultsComponent', () => {
  let component: UniversityresultsComponent;
  let fixture: ComponentFixture<UniversityresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
