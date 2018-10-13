import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenCreateComponent } from './queen-create.component';

describe('QueenCreateComponent', () => {
  let component: QueenCreateComponent;
  let fixture: ComponentFixture<QueenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
