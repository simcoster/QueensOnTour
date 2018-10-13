import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenDetailComponent } from './queen-detail.component';

describe('QueenDetailComponent', () => {
  let component: QueenDetailComponent;
  let fixture: ComponentFixture<QueenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
