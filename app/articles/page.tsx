import { redirect } from "next/navigation";

/** /articles has no page of its own; the list lives on the Resources page. */
export default function ArticlesIndex() {
  redirect("/resources#articles");
}
