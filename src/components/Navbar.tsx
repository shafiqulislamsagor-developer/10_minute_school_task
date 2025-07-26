import Image from "next/image";
import Button from "./shared/Button";

export default function Navbar() {
  return (
    <div className="flex bg-white border-b z-50  border-b-primary/80 sticky top-0 left-0 right-0 items-center justify-between py-2 px-3.5">
      <Image src="/navLogo.svg" alt="Nav Logo" width={100} height={24} />
      <Button className="">Login</Button>
    </div>
  );
}
