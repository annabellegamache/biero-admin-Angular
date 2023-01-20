import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBiereComponent } from './ajouter-biere.component';

describe('AjouterBiereComponent', () => {
  let component: AjouterBiereComponent;
  let fixture: ComponentFixture<AjouterBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterBiereComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AjouterBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
