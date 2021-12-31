import { FormControl } from "@angular/forms";

export function ValidateDate(c: FormControl) {
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
  
    return regex.test(c.value) ? null : {
      validateDate: {
        valid: false
      }
    };
}