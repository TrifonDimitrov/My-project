import { ValidatorFn } from "@angular/forms";


export function matchPasswords(passControl: string, rePassControl: string): ValidatorFn {
    return (control) => {
        const pass = control.get(passControl);
        const rePass = control.get(rePassControl);

        const areEqual = pass?.value == rePass?.value;

        return areEqual ? null : { matchPasswords: true };
    }
}