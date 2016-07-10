import { Injectable } from '@angular/core';
import { EDUCATIONS } from './mock-educations';

@Injectable()
export class EducationService {

    /**
     * Retrieves the educations data
     */
    getEducations() {
        return EDUCATIONS;
        //return Promise.resolve(EDUCATIONS); disabled due to an issue where rendering finishes before promise
    }
}