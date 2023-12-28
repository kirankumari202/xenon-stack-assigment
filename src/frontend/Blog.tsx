import useFetch from "../Hooks/useFetch.js";
import Card from "../components/Card.js";

const URL = "https://dummyjson.com/posts?limit=10";

export const Blog: React.FC  = () => {
  const { data, loading, error } = useFetch(URL);
  const posts = data?.posts || [];
  console.log(data);
  return (
    <section className="JsonApi-wrapper grow">
      <section className="container mx-auto mt-4">
        <h1 className="font-bold text-3xl text-center border-b border-dark pb-2">Discover our latest posts</h1>

        <section className="mt-6">
        
          {loading && <div className="border shadow p-4 bg-white">Loading Data...</div>}
          {error && <h1>{error}</h1>}

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => {
              console.log(post);
              return <Card key={post.id} data={post} />;
              
            })}
          </section>
        </section>
      </section>
    </section>
  );
}
