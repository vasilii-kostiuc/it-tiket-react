import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { DarkThemeToggle } from "flowbite-react";

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="z h-full border-b border-gray-200 py-2.5 dark:bg-gray-800"
    >
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          It-Ticket
        </span>
      </NavbarBrand>
      <div className="flex gap-2 md:order-2">
        <div className="relative hidden md:block">
          <TextInput
            type="search"
            placeholder="Search"
            icon={HiSearch}
            className="pr-5"
          />
        </div>
        <DarkThemeToggle />

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
