declare module 'ical.js' {
  export class Component {
    constructor(jCal: any);
    getAllSubcomponents(name: string): Component[];
  }
  
  export class Event {
    constructor(component: Component);
    summary: string;
    startDate: Time;
    endDate: Time;
  }
  
  export class Time {
    toString(): string;
  }
  
  export function parse(input: string): any;
} 