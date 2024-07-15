import { AddEventDrawer } from "@/features/AddEvent";
import { pathNames } from "@/shared/const/router";
import { PageSidebar } from "@/widgets/PagesSidebar";
import { useState } from "react";

const PageItems = pathNames.filter(
  (data) => data.value === "Мероприятия" || data.value === "Заявки"
);

export const EventPageSidebar = () => {
  const [addEvent, setAddEvent] = useState(false);
  return (
    <>
      <PageSidebar
        items={PageItems}
        textButton="Создать мероприятие"
        onClick={() => {
          setAddEvent(true);
        }}
      />
      <AddEventDrawer isOpen={addEvent} onClose={() => setAddEvent(false)} />
    </>
  );
};
