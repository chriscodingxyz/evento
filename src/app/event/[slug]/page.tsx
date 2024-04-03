import React from "react";

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const resposne = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const data = await resposne.json();

  return <main>eventslug page</main>;
}
