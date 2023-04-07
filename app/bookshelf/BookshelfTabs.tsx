import { motion } from 'framer-motion';

type Props = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  setPage: (page: number) => void;
};

export default function BookshelfTabs({
  selectedTab,
  setSelectedTab,
  setPage,
}: Props) {
  const tabs = [
    {
      name: 'Reading',
      selected: selectedTab === 'Reading',
    },
    {
      name: 'To read',
      selected: selectedTab === 'To read',
    },
    {
      name: 'Finished',
      selected: selectedTab === 'Finished',
    },
  ];

  const handleClick = (tab: { name: string; selected: boolean }) => {
    setPage(1);
    setSelectedTab(tab.name);
  };

  return (
    <div className="my-12 flex justify-center">
      <div className="z-0 rounded-2xl border border-gray-300 bg-white p-1.5 shadow-md">
        <nav className="flex space-x-2" aria-label="Tabs">
          {tabs.map(tab => (
            <motion.div
              className="relative"
              key={tab.name}
              onClick={() => handleClick(tab)}
            >
              {tab.selected ? (
                <motion.div
                  className="absolute left-0 right-0 -z-10 h-8 rounded-[10px] bg-black"
                  layoutId="tab"
                  transition={{
                    layout: {
                      ease: 'easeOut',
                    },
                  }}
                />
              ) : null}
              <span
                className={`${
                  tab.selected ? 'text-white' : ' hover:text-gray-900'
                } z-0 flex cursor-pointer px-3 py-1`}
              >
                {tab.name}
              </span>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
}
