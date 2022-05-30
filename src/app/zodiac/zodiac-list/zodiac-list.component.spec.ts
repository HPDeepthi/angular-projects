import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiacListComponent } from './zodiac-list.component';

describe('ZodiacListComponent', () => {
  let component: ZodiacListComponent;
  let fixture: ComponentFixture<ZodiacListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodiacListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodiacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
