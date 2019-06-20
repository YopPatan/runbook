import {Milestone} from "./milestone";

export class Runbook {
    id: number;
    period: string;
    estimateDate: string;
    currentDelay: string;
    milestones: Milestone[];
}