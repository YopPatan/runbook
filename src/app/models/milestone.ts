import {Activity} from "./activity";
import {Person} from "./person";
import {Review} from "./review";

export class Milestone {
    id: number;
    idEstado: number;
    nombre: string;
    codigo: string;
    fecha: string;
    responsable: Person;
    avance: Review;
    actividades: Activity[];
}