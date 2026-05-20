// import "../styles/dashboard.css";

// function Navbar({ handleLogout, user }) {
//   return (
//     <div className="nav-wrapper">
//       <div className="nav-inner">

//         {/* Left — brand */}
//         <div className="nav-brand">
//           <div className="nav-logomark">
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2 12L6 7L9 10L13 4" stroke="#08090d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//           <div className="nav-wordmark">
//             <span className="nav-title">Finance Tracker</span>
//             <p className="nav-sub">
//               Welcome back, <span>{user?.name || "User"}</span>
//             </p>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="nav-right">
//           <button onClick={handleLogout} className="btn-logout">
//             Sign out
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Navbar;

import "../styles/dashboard.css";

type NavbarProps = {
  handleLogout: () => void;

  user: {
    name?: string;
  } | null;
};

function Navbar({
  handleLogout,
  user,
}: NavbarProps) {

  return (
    <div className="nav-wrapper">
      <div className="nav-inner">

        {/* Left — brand */}
        <div className="nav-brand">

          <div className="nav-logomark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12L6 7L9 10L13 4"
                stroke="#08090d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="nav-wordmark">

            <span className="nav-title">
              Finance Tracker
            </span>

            <p className="nav-sub">
              Welcome back,
              <span>
                {user?.name || "User"}
              </span>
            </p>

          </div>
        </div>

        {/* Right */}
        <div className="nav-right">

          <button
            onClick={handleLogout}
            className="btn-logout"
          >
            Sign out
          </button>

        </div>

      </div>
    </div>
  );
}

export default Navbar;