/** @format */
import { useEffect, useState } from 'react';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';

import styles from './tab.module.css';
import { useCourseByCategory } from '@/queries/hooks/categories';
import CourseTabs from '../Course';
import Skeleton from 'react-loading-skeleton';
import { useAtom } from 'jotai';
import { userAtom } from '@/store/login';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const CourseTab = ({ categories, categoryLoading }) => {
  const [tab, setTab] = useState('');
  const [categoryID, setCategoryID] = useState(0);

  const [userInfo] = useAtom(userAtom);

  const {
    data,
    isLoading,
    refetch: refetchCourse,
  } = useCourseByCategory(tab, userInfo._id);

  useEffect(() => {
    if (categories) setTab(categories.data[0].categoryID);
  }, [categories]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderCategoriesTab = () => {
    if (categories) {
      return categories.data.map((category, index) => {
        return (
          <Tab
            key={index}
            onClick={() => {
              setTab(category.categoryID);
              setCategoryID(index);
            }}
            label={category.categoryName}
            {...a11yProps(index)}
          />
        );
      });
    }
  };

  return (
    <div className={styles.container}>
      <AppBar className={styles.bar} position='static'>
        <Tabs
          className={styles.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'>
          {categoryLoading ? (
            <div className={styles.skeleton}>
              <Skeleton width={88} height={24} />
            </div>
          ) : (
            renderCategoriesTab()
          )}
        </Tabs>
      </AppBar>
      <TabPanel className={styles.panel} value={value} index={categoryID}>
        <CourseTabs
          refetchCourse={refetchCourse}
          isLoading={isLoading}
          courses={data}
        />
      </TabPanel>
    </div>
  );
};

export default CourseTab;
