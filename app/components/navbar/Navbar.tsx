'use client';

import Container from '../Container';
import Categories from './Categories';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import { SafeUser } from '@/app/types';

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  // console.log({ currentUser });
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div
            className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-0
            "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
