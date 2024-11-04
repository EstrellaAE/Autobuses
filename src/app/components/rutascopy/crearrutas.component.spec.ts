import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearRutasComponentcopy } from './crearrutas.component';
import { ApiService } from '../../api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { FormsModule } from '@angular/forms'; 

describe('CrearRutasComponentcopy', () => {
  let component: CrearRutasComponentcopy;
  let fixture: ComponentFixture<CrearRutasComponentcopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        FormsModule, 
      ],
      declarations: [CrearRutasComponentcopy],
      providers: [ApiService] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRutasComponentcopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
