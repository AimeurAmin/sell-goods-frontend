import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachierComponent } from './cachier.component';

describe('CachierComponent', () => {
  let component: CachierComponent;
  let fixture: ComponentFixture<CachierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CachierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
