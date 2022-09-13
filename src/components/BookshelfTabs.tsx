import { motion } from 'framer-motion';

type Props = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function BookshelfTabs({ selectedTab, setSelectedTab }: Props) {
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

  return (
    <div className="flex justify-center my-12">
      <div className="z-0 rounded-full bg-white dark:bg-black p-0.5 shadow-md border border-gray-300 dark:border-gray-800 dark:border-opacity-40">
        <nav className="flex space-x-2" aria-label="Tabs">
          {tabs.map(tab => (
            <motion.div
              className="relative"
              key={tab.name}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.selected ? (
                <motion.div
                  className="absolute left-0 right-0 -z-10 h-8 rounded-full bg-black dark:bg-white"
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
                  tab.selected
                    ? 'text-white dark:text-black'
                    : 'text-gray-700 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-400'
                } z-0 hidden cursor-pointer px-3 py-1 sm:flex`}
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
