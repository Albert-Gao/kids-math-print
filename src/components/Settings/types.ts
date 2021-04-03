import { UseFormRegister, FieldValues } from "react-hook-form";

export interface BaseSectionType {
  register: UseFormRegister<FieldValues>;
}
