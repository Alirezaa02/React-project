import Nav from "./Nav";
// the header
export default function Header() {
    return (
      <header>
        {/* icon */}
        <div className="icon">
          <img src="img/icon.png" alt="Icon" />
        </div>
  
        <Nav />
      </header>
    );
  }
  