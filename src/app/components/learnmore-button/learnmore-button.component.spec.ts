import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LearnmoreButtonComponent } from './learnmore-button.component';

describe('LearnmoreButtonComponent', () => {
  let component: LearnmoreButtonComponent;
  let fixture: ComponentFixture<LearnmoreButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnmoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnmoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
