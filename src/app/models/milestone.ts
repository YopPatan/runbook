import {Activity} from "./activity";
import {Person} from "./person";
import {Review} from "./review";

export class Milestone {
    id: number;
    idStatus: number;
    name: string;
    code: string;
    date: string;
    owner: Person;
    review: Review;
    activities: Activity[];
}