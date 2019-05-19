import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordIdentificationComponent } from './word-identification.component';

describe('WordIdentificationComponent', () => {
  let component: WordIdentificationComponent;
  let fixture: ComponentFixture<WordIdentificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordIdentificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
