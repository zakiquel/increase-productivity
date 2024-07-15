import { FC, lazy } from "react";

import { AddEventFormProps } from "./AddEventForm";

export const AddEventFormAsync = lazy<FC<AddEventFormProps>>(
  () => import("./AddEventForm")
);
