import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$postId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      postId: params.postId,
    };
  },
});

function RouteComponent() {
  const { postId } = Route.useLoaderData();
  return <div>Hello blog - {postId}</div>;
}
