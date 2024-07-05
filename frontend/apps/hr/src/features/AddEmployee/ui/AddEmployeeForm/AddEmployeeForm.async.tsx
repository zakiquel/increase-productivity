import { FC, lazy } from "react";

import { AddEmployeeFormProps } from "./AddEmployeeForm";

export const AddEmployeeFormAsync = lazy<FC<AddEmployeeFormProps>>(
  () => import("./AddEmployeeForm")
);
