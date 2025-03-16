import { Injectable } from '@nestjs/common';
import * as jalaali from 'jalaali-js';

@Injectable()
export class DateConversionService {
    convertJalaliToGregorian(jalaliDate: string): string {
        const [jy, jm, jd] = jalaliDate.split('/').map(Number);
        const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);

        return `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`;
    }
}