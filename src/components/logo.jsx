import { Link } from "react-router";
import LogoImg from "@/assets/asset-0.webp";
export default function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="">
        <img
          src={LogoImg}
          alt="Logo"
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>
    </div>
  );
}
