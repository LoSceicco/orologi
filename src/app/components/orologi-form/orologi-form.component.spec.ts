import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrologiFormComponent } from './orologi-form.component';

describe('OrologiFormComponent', () => {
  let component: OrologiFormComponent;
  let fixture: ComponentFixture<OrologiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrologiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrologiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
