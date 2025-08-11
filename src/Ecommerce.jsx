import logoIcon from "./assets/images/logo.svg";
import chartIcon from "./assets/images/icon-cart.svg";
import profileImage from "./assets/images/image-avatar.png";

export default function Ecommerce() {
  return (
    <div className="container mx-auto my-4">
      <NavBar />
    </div>
  );
}

// NavBar Section //////////////////////////////////////
function NavBar() {
  return (
    <div className="w-full h-full flex flex-row justify-between items-center gap-4 border-b-1 pb-6 border-gray-200">
      <section className="w-fit flex flex-row gap-8 items-center">
        <Logo />
        <NavLinkText />
      </section>
      <section className="w-fit flex flex-row gap-8 items-center">
        <Chart />
        <Profile />
      </section>
    </div>
  );
}

// Logo Section
function Logo() {
  return <img src={logoIcon} alt="logo" className="w-full h-fit" />;
}

// NavBar link Section
function NavLinkText() {
  return (
    <nav>
      <ul className="w-full flex flex-row gap-3 justify-start">
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// Chart Section
function Chart() {
  return (
    <div className="w-fit h-fit cursor-pointer">
      <img src={chartIcon} alt="chart" />
    </div>
  );
}

// Profile Section
function Profile() {
  return (
    <div className="w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer">
      <img src={profileImage} alt="Profile Photo" />
    </div>
  );
}
// End of NavBar Section //////////////////////////////
