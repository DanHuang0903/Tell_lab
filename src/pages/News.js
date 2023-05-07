import { Header, Footer } from '../App.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { news } from '../JSON/news.js';

export function News(){
    return (
      <>
        <Header />

        <Tabs>
          <TabList>
            <Tab>2023</Tab>
            <Tab>2022</Tab>
            <Tab>2021</Tab>
            <Tab>2020</Tab>
            <Tab>2019</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>


        <Footer />
      </>
    )
  }