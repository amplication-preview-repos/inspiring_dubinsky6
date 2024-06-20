import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  available: boolean | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
