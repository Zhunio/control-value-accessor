import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ProfileComponent, AddressComponent, ReactiveFormsModule, JsonPipe],
})
export class AppComponent {
  public userForm = new FormGroup({
    profile: new FormControl({
      firstName: 'Richard',
      lastName: 'Zhunio',
    }),
    address: new FormControl({
      street: '20 Oxford Rd',
      city: 'New Windsor',
      state: 'NY',
      zipCode: '12553',
      country: 'United States',
    }),
  });
}
