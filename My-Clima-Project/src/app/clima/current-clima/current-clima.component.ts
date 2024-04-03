import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  
  })

  constructor(
    private api: ApiService,
    private userServise: UserService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const modelId = params['modelId'];
      this.api.getClima(modelId).subscribe((clima: any) => {
        this.clima = clima as Climate; // Тук се пази климатика, която ще се показва в шаблона

        const ownerId = (this.clima.owner as any)?._id; // Тук се пази id на собственика на климатиката

        this.userServise.getProfile().subscribe((user) => {
          this.currentUser = user;
          return (this.isOwner = this.currentUser._id === ownerId); // Тук се проверява дали текущият потребител е собственик на климатиката
        });
      });
    });
    const { brand, model, coolingCapacity, heatingCapacity, energyEfficiencyRating, price, description, imageUrl} = this.clima;
    this.form.setValue({
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl
    })
  }

  onToggle(): void {
    this.showEditForm = !this.showEditForm;
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }
    this.clima = this.form.value as Climate;
    const { brand, model, coolingCapacity, heatingCapacity, energyEfficiencyRating, price, description, imageUrl } = this.clima;
    this.api.updateClima(
      brand,
      model,
      coolingCapacity,
      heatingCapacity,
      energyEfficiencyRating,
      price,
      description,
      imageUrl,
      this.clima._id
      // Add the missing imageUrl argument here
    ).subscribe(() => {
      this.onToggle();
    });
  }

  onCancel(ev: Event): void {
    ev.preventDefault();
    this.onToggle();
  }

  deleteClima(): void {}
}
