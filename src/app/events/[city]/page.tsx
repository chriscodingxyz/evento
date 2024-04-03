import H1 from "@/components/h1";
import React from "react";

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;
  const cityCamel = city.charAt(0).toUpperCase() + city.slice(1);

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const dataEvents = await response.json();

  return (
    <main
      className="flex flex-col items-center justify-center
    py-24 px-[20px] min-h-[110vh]"
    >
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${cityCamel}`}
      </H1>

      {dataEvents.map((event: any) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
