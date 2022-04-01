import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrologioComponent } from './orologio.component';

describe('OrologioComponent', () => {
  let component: OrologioComponent;
  let fixture: ComponentFixture<OrologioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrologioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrologioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
