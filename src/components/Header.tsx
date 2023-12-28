import star from "../assets/icons/star.svg";
import window_Icon from "../assets/icons/window.svg";
import sun from "../assets/icons/sun.svg";
import clock from "../assets/icons/clock.svg";
import bell from "../assets/icons/bell.svg";

export default function Header({ title }) {
  return (
    <div className="flex justify-between border-b p-4 items-center w-full">
      <div className="nav1 flex gap-3">
        <span>
          <img src={window_Icon} width="20px" />
        </span>
        <span className="mr-1">
          <img src={star} width="20px" />
        </span>
        <p className="opacity-50">Dashboard &nbsp; /</p>
        <p>{title}</p>
      </div>

      <div className="nav2 flex gap-3 items-center">
        <input
          type="text"
          style={{ width: "150px" }}
          placeholder="Search"
          className="p-1 px-2 mr-4 shadow-sm rounded border"
        />

        <span className="mr-1">
          <img src={sun} width="20px" />
        </span>

        <span className="mr-1">
          <img src={clock} width="20px" />
        </span>

        <span className="mr-1">
          <img src={bell} width="20px" />
        </span>

        <span className="mr-1">
          <img src={window_Icon} width="20px" />
        </span>
      </div>
    </div>
  );
}

// <div className="d-flex gap-5">
//   <ul class="breadcrumb mb-0 align-items-center">
//     <li class="breadcrumb-item">
//       <HouseFill size={25} />
//     </li>
//     <li class="breadcrumb-item active">Center</li>
//   </ul>
//   <div className="d-flex align-items-center flex-fill">
//     <input className="form-control me-2" type="text" placeholder="Search" />
//     <button className="btn btn-primary" type="button">
//       Search
//     </button>
//   </div>
// </div>
