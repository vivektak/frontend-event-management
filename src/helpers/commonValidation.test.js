import {checkMobileValidation, checkEventTypeValidation, checkEventLocationValidation, checkGenderValidation} from './commonValidation';

describe('Common Validation handlers', () => {

    test('should validate a valid mobile', () => {
        expect(checkMobileValidation('7896545678')).toBeFalsy();
    });

    test('should validate a not valid mobile', () => {
        expect(checkMobileValidation('789654567')).toBeTruthy();
    });

    test('should validate a valid mobile', () => {
        expect(checkEventTypeValidation('Marriage')).toBeFalsy();
    });

    test('should validate a not valid mobile', () => {
        expect(checkEventTypeValidation('')).toBeTruthy();
    });

    test('should validate a valid mobile', () => {
        expect(checkEventLocationValidation('Delhi')).toBeFalsy();
    });

    test('should validate a not valid mobile', () => {
        expect(checkEventLocationValidation('')).toBeTruthy();
    });

    test('should validate a valid mobile', () => {
        expect(checkGenderValidation('Male Only')).toBeFalsy();
    });

    test('should validate a not valid mobile', () => {
        expect(checkGenderValidation('')).toBeTruthy();
    });
});