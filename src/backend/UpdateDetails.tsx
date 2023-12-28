import Header from "../components/Header";

export const UpdateDetails: React.FC = () => {
  return (
    <div>
      <Header title="Update Details" />

      <div className="p-10">
        <h2 className="text-3xl">Update Home Details</h2>

        <form className="mt-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Main Title</label>
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              name="title"
              id="title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="content">Supporting Text</label>
            <input
              type="text"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              name="text"
              id="text"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Image URL</label>
            <input
              type="url"
              className="border p-2 rounded"
              placeholder="Enter your post title"
              name="title"
              id="title"
            />
          </div>

          <button className="bg-black text-white rounded p-2">Add Post</button>
        </form>
      </div>
    </div>
  );
};
