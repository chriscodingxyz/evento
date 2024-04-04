import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

export default async function EventsList({ city }: { city: string }) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );
  const dataEvents: EventoEvent[] = await response.json();
  return (
    <section className=" max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {dataEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
