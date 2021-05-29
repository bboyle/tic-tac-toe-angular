import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaughtComponent } from './naught.component';

describe('NaughtComponent', () => {
  let component: NaughtComponent;
  let fixture: ComponentFixture<NaughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
