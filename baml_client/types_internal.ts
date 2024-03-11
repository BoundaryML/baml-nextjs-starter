// This file is auto-generated. Do not edit this file manually.
//
// Disable formatting for this file to avoid linting errors.
// tslint:disable
// @ts-nocheck


import { Education, Category, Resume } from './types';


// Function to check if a value is a member of the Category enum
function isCategory(value: any): value is Category {
  return Object.values(Category).includes(value);
}

// Function to validate if an object is a Education object
function isEducation(obj: any): obj is Education {
  return (
    obj &&
    typeof obj === "object"
    && ("school" in obj && (typeof obj.school === 'string'))
    && ("degree" in obj && (typeof obj.degree === 'string'))
    && ("year" in obj && (typeof obj.year === 'number'))
  );
}


class InternalEducation implements Education {
  private constructor(private data: {
    school: string,
    degree: string,
    year: number,
  }, private raw: Education) {}

  static from(data: Education): InternalEducation {
    return new InternalEducation({
      school: data.school,
      degree: data.degree,
      year: data.year,
    }, data);
  }

  get school(): string {
    return this.data.school;
  }
  get degree(): string {
    return this.data.degree;
  }
  get year(): number {
    return this.data.year;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}

// Function to validate if an object is a Resume object
function isResume(obj: any): obj is Resume {
  return (
    obj &&
    typeof obj === "object"
    && ("name" in obj && (typeof obj.name === 'string'))
    && ("education" in obj && (Array.isArray(obj.education) && obj.education.every((x: any) => isEducation(x))))
    && ("skills" in obj && (Array.isArray(obj.skills) && obj.skills.every((x: any) => typeof x === 'string')))
  );
}


class InternalResume implements Resume {
  private constructor(private data: {
    name: string,
    education: InternalEducation[],
    skills: string[],
  }, private raw: Resume) {}

  static from(data: Resume): InternalResume {
    return new InternalResume({
      name: data.name,
      education: data.education.map(x => new InternalEducation(x)),
      skills: data.skills.map(x => x),
    }, data);
  }

  get name(): string {
    return this.data.name;
  }
  get education(): InternalEducation[] {
    return this.data.education;
  }
  get skills(): string[] {
    return this.data.skills;
  }


  toJSON(): string {
    return JSON.stringify(this.raw, null, 2);
  }
}


export { InternalEducation, InternalResume }