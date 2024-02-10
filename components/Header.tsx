import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return <header className="sticky top-0 z-50">
    <nav className="flex flex-row items-center p-6 mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
    </nav>
  </header>;

}

export default Header