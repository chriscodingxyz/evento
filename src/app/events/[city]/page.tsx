import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalizeFirst } from "@/lib/utils";

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalizeFirst(city)}`,
  } as Metadata;
}

export default async function EventsPage({
  params,
}: {
  params: { city: string };
}) {
  const city = params.city;
  // const cityCamel = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main
      className="flex flex-col items-center justify-center
    py-24 px-[20px] min-h-[110vh]"
    >
      <H1 className="mb-10">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeFirst(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
