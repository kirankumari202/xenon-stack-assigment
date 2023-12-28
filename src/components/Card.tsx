export default function Card({ data }) {
  return (
    <>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={
                data?.image
                  ? data.image
                  : `https://picsum.photos/900/600?random=${data.id}`
              }
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {data?.title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
              {data.body.slice(0, 100)}...
            </p>
            <div className="tags mb-4">
              {data.tags.map((tag) => {
                return (
                  <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag}
                  </span>
                );
              })}
            </div>
            <a
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
