import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenEditComponent } from './queen-edit.component';

describe('QueenEditComponent', () => {
  let component: QueenEditComponent;
  let fixture: ComponentFixture<QueenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
