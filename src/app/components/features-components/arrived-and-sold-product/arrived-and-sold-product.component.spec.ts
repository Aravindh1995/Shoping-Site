import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivedAndSoldProductComponent } from './arrived-and-sold-product.component';

describe('ArrivedAndSoldProductComponent', () => {
  let component: ArrivedAndSoldProductComponent;
  let fixture: ComponentFixture<ArrivedAndSoldProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivedAndSoldProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrivedAndSoldProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
