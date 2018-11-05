import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerNoteComponent } from './lister-note.component';

describe('ListerNoteComponent', () => {
  let component: ListerNoteComponent;
  let fixture: ComponentFixture<ListerNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
