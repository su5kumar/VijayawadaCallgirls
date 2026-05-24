import { client } from "@/lib/sanity";

export const metadata = {
  robots: { index: false, follow: false },
};

async function getPosts() {
  return client.fetch(`
    *[_type == "post"]{
      title,
      slug
    }
  `);
}

export default async function TestPage() {
  const posts = await getPosts();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sanity CMS Test</h1>
      {posts.length === 0 ? (
        <p>No posts found. Create a post in Sanity Studio first.</p>
      ) : (
        posts.map((post) => (
          <div key={post.slug?.current}>
            {post.title}
          </div>
        ))
      )}
    </div>
  );
}
