import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopLayoutComponent } from './top-layout.component';

describe('TopLayoutComponent', () => {
  let component: TopLayoutComponent;
  let fixture: ComponentFixture<TopLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
