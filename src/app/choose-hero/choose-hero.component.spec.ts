import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHeroComponent } from './choose-hero.component';

describe('ChooseHeroComponent', () => {
  let component: ChooseHeroComponent;
  let fixture: ComponentFixture<ChooseHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
