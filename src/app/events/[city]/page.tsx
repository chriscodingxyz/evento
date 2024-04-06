import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalizeFirst } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalizeFirst(city)}`,
  } as Metadata;
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  // const cityCamel = city.charAt(0).toUpperCase() + city.slice(1);
  // const page = searchParams.page || 1;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  // const page = parsedPage.data || 1;

  return (
    <main
      className="flex flex-col items-center justify-center
    py-24 px-[20px] min-h-[110vh]"
    >
      <H1 className="mb-10">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeFirst(city)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
