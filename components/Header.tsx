import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return <header className="fixed top-0 z-50 w-full">
    <nav className="flex self-end sm:items-center justify-end sm:justify-between p-8 mx-auto">
      <div className="hidden sm:flex">
          <Logo/>
      </div>
          <ThemeToggle />
    </nav>
  </header>;

}

export default Header