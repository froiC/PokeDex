import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedashComponent } from './pokedash.component';

describe('PokedashComponent', () => {
  let component: PokedashComponent;
  let fixture: ComponentFixture<PokedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
