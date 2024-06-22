import ModeToggle from "./ModeToggle";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="m-4 text-2xl font-bold text-center">
          Transaction Dashboard
        </h1>
        <ModeToggle />
      </header>
    </>
  );
};

export default Header;
