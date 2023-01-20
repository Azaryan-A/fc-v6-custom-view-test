import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { createPlugin } from "@fullcalendar/core";

const CustomView = () => {
  return <p>aadasdasdasd</p>;
};

const customViewsPlugin = createPlugin({
  views: {
    custom: {
      content: CustomView,
      // content: 'CustomView', // displaying only when content is string
    },
  },
});

function App() {
  return (
    <FullCalendar
      plugins={[
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        customViewsPlugin,
      ]}
      headerToolbar={{
        start: "title",
        center: "",
        end: "listWeek, dayGridMonth, timeGridWeek, custom",
      }}
    />
  );
}

export default App;
