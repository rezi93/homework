import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkompComponent } from './newkomp.component';

describe('NewkompComponent', () => {
  let component: NewkompComponent;
  let fixture: ComponentFixture<NewkompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewkompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewkompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
