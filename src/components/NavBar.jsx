
import { Button, Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-black font-mono">Franco Nicolás Galdame</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="me-3">CV</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Proyects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
