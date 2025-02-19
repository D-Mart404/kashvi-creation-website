import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <header className="bg-white sticky top-0 z-20 w-full border-b border-black-500 pl-6 pr-6 pt-0 pb-0 flex items-center justify-between">
      <div className="flex items-center gap-4 ml-4">

        <Logo />
        {/* <h1 className="text-xl font-bold text-black">Kashvi-Creation</h1> */}
      </div>
      
      <div>
        <Nav />
      </div>
    </header>
  );
}
