type Props = {};
import Container from '../Container';

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
            Logo
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
