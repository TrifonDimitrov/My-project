import { ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  const domainsString = domains.join('|'); // Тук се създава стринг, който съдържа всички домейни, които са валидни за имейлите

  const regExp = new RegExp(
    `[A-Za-z0-9]+@(gmail|abv|yahoo)\.(${domainsString})`
  ); // Тук се създава регулярен израз, който ще се използва за валидация на имейлите

  return (control) => {
    const isEmailInvalid = control.value === '' || regExp.test(control.value);

    return isEmailInvalid ? null : { emailValidator: true };
  };
}
