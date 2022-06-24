import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearPageComponent } from './gear-page.component';

describe('GearPageComponent', () => {
  let component: GearPageComponent;
  let fixture: ComponentFixture<GearPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GearPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
