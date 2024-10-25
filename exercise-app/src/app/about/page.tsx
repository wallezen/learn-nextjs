
import { cookies } from "next/headers";

export default function AboutPage() {
  console.log("About Page");

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  return <h1>About Page</h1>;
}
