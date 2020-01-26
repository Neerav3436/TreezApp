import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreezComponent } from './treez.component';

describe('TreezComponent', () => {
  let component: TreezComponent;
  let fixture: ComponentFixture<TreezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
