import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChambreComponent } from './chambre.component';

describe('ChambreComponent', () => {
  let component: ChambreComponent;
  let fixture: ComponentFixture<ChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChambreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 