import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNativoCameraPage } from './component-nativo-camera.page';

describe('ComponentNativoCameraPage', () => {
  let component: ComponentNativoCameraPage;
  let fixture: ComponentFixture<ComponentNativoCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentNativoCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNativoCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
