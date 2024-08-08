import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { AvatarImage, Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const MenuItem = ({ children, className = "" }) => (
  <li
    className={`bg-white text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded ${className}`}
  >
    {children}
  </li>
);

const Navbar = () => {
  const user = false;

  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl py-4 px-6 md:px-0 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <span className="text-[#F83002]">Doctor</span> Appointment System
        </h1>
        <nav className="flex items-center gap-8">
          <ul className="hidden md:flex font-medium items-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Browse</li>
          </ul>
          {!user ? (
            <div className="flex gap-2 items-center">
              <Link to="/login">
                <Button
                  className="bg-blue-500 hover:bg-blue-700"
                  varient="outline"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-500 hover:bg-blue-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4 w-56 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">Saipal Shahi</h3>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2">
                  <MenuItem>Appointments</MenuItem>
                  <MenuItem>Medical Record</MenuItem>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>Change Password</MenuItem>
                  <MenuItem className="border-none">Log out</MenuItem>
                </ul>
              </PopoverContent>
            </Popover>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
