import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl } from '@angular/forms';

import { email } from './index';

const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};

@Directive({
  selector: '[email][formControlName],[email][formControl],[email][ngModel]',
  // Prevent validator injection if there is a built-in email validator.
  providers: Validators['email'] ? null : [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return email(c);
  }
}
