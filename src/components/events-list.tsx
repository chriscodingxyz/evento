import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

export default function EventsList({ events }: { events: EventoEvent[] }) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
