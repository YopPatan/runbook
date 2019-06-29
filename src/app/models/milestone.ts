import {Activity} from "./activity";
import {Person} from "./person";

export class Milestone {
    id: number;
    idStatus: number;
    name: string;
    code: string;
    delay: string;
    date: string;
    person: Person;
    activities: Activity[];
}