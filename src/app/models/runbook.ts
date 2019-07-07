import {Milestone} from "./milestone";

export class Runbook {
    id: number;
    nombre: string;
    periodo: string;
    fechaEstimada: string;
    tiempoRetraso: string;
    hitos: Milestone[];
}