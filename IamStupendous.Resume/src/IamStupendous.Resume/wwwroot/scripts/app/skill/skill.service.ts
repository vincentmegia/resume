import { Injectable } from '@angular/core';
import { SKILLS } from './mock-skills';

@Injectable()
export class SkillService {

    /**
     * Retrieves the educations data
     */
    getSkills() {
        return SKILLS;
        //return Promise.resolve(SKILLS); disable due to an issue where rendering is finished before promise
    }
}