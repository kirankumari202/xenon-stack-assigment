import { NavLink, Outlet } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen w-screen">
      <aside className="border-r px-4 py-6 bg-slate-800 text-white w-[200px]">
        <div>
          <h2 className="text-center mt-1 mb-4">
            <span className="text-blue-700">S</span>killo.
          </h2>
          <nav className="mt-10">
            <ul className=" flex flex-col gap-5">
              <li>
                <NavLink to="/dashboard/update-details">Update Details</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/blog">Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};
