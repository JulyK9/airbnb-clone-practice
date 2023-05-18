'use client';

import Avatar from '../Avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-5">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            rounded-full
            border-neutral-200
            flex
            items-center
            cursor-pointer
            hover:shadow-md
            transition
            gap-3
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
