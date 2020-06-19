import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomcompComponent } from './bottomcomp.component';

describe('BottomcompComponent', () => {
  let component: BottomcompComponent;
  let fixture: ComponentFixture<BottomcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
