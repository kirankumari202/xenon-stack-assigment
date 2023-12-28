import Header from "../components/Header";

export const BlogPost: React.FC = () => {
  return (
    <div>
      <Header title="Blog" />

      <div className="p-10">
        <h2 className="text-3xl">Update home page details</h2>

        <form className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              name="title"
              id="title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Image URL</label>
            <input
              type="url"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              name="url"
              id="url"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              cols={30}
              rows={10}
            ></textarea>
          </div>

          <button className="bg-black text-white rounded p-2">Add Post</button>
        </form>
      </div>
    </div>
  );
};
