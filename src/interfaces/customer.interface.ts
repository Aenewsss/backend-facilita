import { ILocation } from "./location.interface";

export interface ICustomer {
    name: string;
    email: string;
    phone: string;
    location: ILocation
}