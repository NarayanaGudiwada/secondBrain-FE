import { memo, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useRecoilState } from 'recoil';
import { SideBarAtom } from '../../store/SideBarAtom';
import SideBarHeader from './SideBarHeader';
import SideBarItem from './SideBarItem';
import SideBarItemProps from './SideBarItemType';
import YoutubeIcon from '../Icons/YoutubeIcon';
import TwitterIcon from '../Icons/TwitterIcon';

const items: SideBarItemProps[] = [
  {
    Icon: <YoutubeIcon/>,
    text: 'Youtube'
  },
  {
    Icon: <TwitterIcon />,
    text: 'Tweets'
  }

];

const SideBar = memo(() => {

  const [isSidebarExpanded, setIsSidebarExpanded] = useRecoilState(SideBarAtom);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsSidebarExpanded(isDesktop);
  }, [isDesktop]);

  return (
    <div
      className={`bg-white ${isSidebarExpanded ? "w-52" : "w-16"
        } h-screen p-4 transition-all duration-300 fixed md:static max-md:z-10 left-0 top-0 border-x-2 border-grey-300`}
    >
      <SideBarHeader />
      <div className='mt-4'>
        {
          items.map((item, index) => (
            <SideBarItem key={index} Icon={item.Icon} text={item.text} />
          ))
        }
      </div>

    </div>
  );
});

export default SideBar;