import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

export interface AddressForm {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

@Component({
  standalone: true,
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
  imports: [ReactiveFormsModule],
})
export class AddressComponent implements ControlValueAccessor {
  public addressForm = new FormGroup({
    street: new FormControl('', { nonNullable: true }),
    city: new FormControl('', { nonNullable: true }),
    state: new FormControl('', { nonNullable: true }),
    zipCode: new FormControl('', { nonNullable: true }),
    country: new FormControl('', { nonNullable: true }),
  });

  public onTouched = () => {};
  public onChange = (value: Partial<AddressForm>) => {};

  public writeValue(value: AddressForm): void {
    if (value) {
      this.addressForm.setValue(value);
    }
  }

  public registerOnChange(fn: (value: Partial<AddressForm>) => void): void {
    this.addressForm.valueChanges.subscribe(fn);
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
