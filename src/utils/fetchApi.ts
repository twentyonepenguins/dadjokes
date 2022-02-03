import type { Joke } from "@/types/Joke";

export async function fetchApi(): Promise<string> {
  const res = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  const data: Joke = await res.json();
  return data.joke as string;
}
