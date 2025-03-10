import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});

function Blog() {
  const posts = ["post1", "post2", "post3"];

  return (
    <div>
      <div className="flex flex-col gap-2">
        {posts.map((post) => (
          <Link to="/blog/$postId" params={{ postId: post }} key={post}>
            {post}
          </Link>
        ))}
      </div>
    </div>
  );
}
