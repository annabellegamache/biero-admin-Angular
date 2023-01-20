import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierBiereComponent } from './modifier-biere.component';

describe('ModifierBiereComponent', () => {
  let component: ModifierBiereComponent;
  let fixture: ComponentFixture<ModifierBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierBiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
