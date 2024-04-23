import { Component, forwardRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';

export interface ProfileForm {
  firstName: string;
  lastName: string;
}

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfileComponent),
      multi: true,
    },
  ],
})
export class ProfileComponent implements ControlValueAccessor {
  public profileForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true }),
    lastName: new FormControl('', { nonNullable: true }),
  });

  public onTouched = () => {};
  public onChange = (value: Partial<ProfileForm>) => {};

  public writeValue(value: ProfileForm): void {
    if (value) {
      this.profileForm.setValue(value);
    }
  }

  public registerOnChange(fn: (value: Partial<ProfileForm>) => void): void {
    this.profileForm.valueChanges.subscribe(fn);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.profileForm.disable() : this.profileForm.enable();
  }
}
