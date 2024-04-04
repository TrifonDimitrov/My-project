import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Climate } from 'src/app/types/climate.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-clima',
  templateUrl: './current-clima.component.html',
  styleUrls: ['./current-clima.component.css'],
})
export class CurrentClimaComponent implements OnInit {
  clima = {} as Climate; // Тук ще се пази климатика, която ще се показва в шаблона
  isOwner: boolean = false;
  currentUser: any;
  showEditForm: boolean = false;

  form = this.fb.group({
    brand: [''],
    model: [''],
    coolingCapacity: [''],
    heatingCapacity: [''],
    energyEfficiencyRating: [''],
    price: [''],
    description: [''],
    imageUrl: [''],
  });

  constructor(
    private api: ApiService,
    private userServise: UserService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => { // Получавам параметъра от URL-а
      const modelId = params['modelId']; 
      this.api.getClima(modelId).subscribe((clima: any) => {
        this.clima = clima; 

        const ownerId = clima.owner?._id; 

        this.userServise.getProfile().subscribe((user) => {
          this.currentUser = user;
          this.isOwner = this.currentUser._id === ownerId;
          console.log(this.isOwner);
          
        });
        this.form.setValue({
          brand: this.clima.brand || '',
          model: this.clima.model || '',
          coolingCapacity: this.clima.coolingCapacity || '',
          heatingCapacity: this.clima.heatingCapacity || '',
          energyEfficiencyRating: this.clima.energyEfficiencyRating || '',
          price: this.clima.price || '',
          description: this.clima.description || '',
          imageUrl: this.clima.imageUrl || '',
        });
      });
    });
  }

  onToggle(): void {
    this.showEditForm = !this.showEditForm;
  }

  onSave(): void {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    // Получаване на актуализираните данни от формата
    const formData: Partial<Climate> = {
      ...this.clima,
      ...this.form.value,
      brand: this.form.value.brand || undefined,
      model: this.form.value.model || undefined,
      coolingCapacity: this.form.value.coolingCapacity || undefined,
      heatingCapacity: this.form.value.heatingCapacity || undefined,
      energyEfficiencyRating: this.form.value.energyEfficiencyRating || undefined,
      price: this.form.value.price || undefined,
      description: this.form.value.description || undefined,
      imageUrl: this.form.value.imageUrl || undefined,
    };

    this.api.updateClima(this.clima._id, formData).subscribe({
      next: () => {
        this.router.navigate(['/models']);
        this.clima = formData as Climate; // Обновявам данните на климатиката 
        this.onToggle(); // Затварям формата за редактиране
      },
      error: (error) => {
        console.error('Failed to update clima', error);
      },
    });
  }

  
  onDelete(): void {
    this.api.deleteClima(this.clima._id).subscribe(() => {
      this.router.navigate(['/models']);
    });
  }
}
