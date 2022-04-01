import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrologiListComponent } from './orologi-list.component';

describe('OrologiListComponent', () => {
  let component: OrologiListComponent;
  let fixture: ComponentFixture<OrologiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrologiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrologiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
