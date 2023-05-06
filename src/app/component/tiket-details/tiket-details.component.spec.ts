import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketDetailsComponent } from './tiket-details.component';

describe('TiketDetailsComponent', () => {
  let component: TiketDetailsComponent;
  let fixture: ComponentFixture<TiketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiketDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
