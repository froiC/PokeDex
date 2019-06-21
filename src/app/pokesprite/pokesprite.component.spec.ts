import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokespriteComponent } from './pokesprite.component';

describe('PokespriteComponent', () => {
  let component: PokespriteComponent;
  let fixture: ComponentFixture<PokespriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokespriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokespriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
