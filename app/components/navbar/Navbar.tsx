'use client';

type Props = {};
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = (props: Props) => {
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
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
