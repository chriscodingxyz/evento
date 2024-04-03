import { EventoEvent } from "@/lib/types";
import React from "react";

export default function EventCard({ event }: { event: EventoEvent }) {
  return <section>{event.name}</section>;
}
