import {Milestone} from "./milestone";

export class Runbook {
    id: number;
    name: string;
    period: string;
    estimateDate: string;
    currentDelay: string;
    milestones: Milestone[];
}