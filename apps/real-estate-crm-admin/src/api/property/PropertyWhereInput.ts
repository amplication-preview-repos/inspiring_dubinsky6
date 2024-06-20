import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
  available?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
