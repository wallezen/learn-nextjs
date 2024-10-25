import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    return redirect("/comments");
  }

  const comment = comments.find((comment) => comment.id === parseInt(params.id));
  return Response.json(comment);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(params.id));

  comments[commentIndex].text = text;

  return Response.json(comments[commentIndex]);
}
