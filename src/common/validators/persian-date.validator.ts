import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import * as jalaali from 'jalaali-js';

export function IsPersianDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsPersianDate',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;
          const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
          if (!regex.test(value)) return false;

          const [year, month, day] = value.split('-').map(Number);
          const isValid = jalaali.isValidJalaaliDate(year, month, day);
          return isValid;
        },
        defaultMessage(args: ValidationArguments) {
          return 'Invalid Persian date format. Expected YYYY-MM-DD.';
        },
      },
    });
  };
}

export function convertPersianToGregorian(persianDate: string): string {
  const [year, month, day] = persianDate.split('-').map(Number);
  const { gy, gm, gd } = jalaali.toGregorian(year, month, day);
  return `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`;
}