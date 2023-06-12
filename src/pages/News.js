import { Header, Footer } from '../App.js';
import '../App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { news } from '../JSON/news.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

export function News(){

  const news2023 = [];
  const news2022 = [];
  const news2021 = [];
  const news2020 = [];
  const news2019 = [];
  const newsAll = [
    {
      year:'2023', 
      news: news2023
    },{
      year:'2022', 
      news: news2022
    },{
      year:'2021', 
      news: news2021
    },{
      year:'2020', 
      news: news2020
    },{
      year:'2019', 
      news: news2019
    }];
  news.map((n)=>{
    switch(n.year){
      case '2023':
        news2023.push(n);
        break;
      case '2022':
          news2022.push(n);
          break;
      case '2021':
          news2021.push(n);
          break;
      case '2020':
        news2020.push(n);
        break;
      case '2019':
        news2019.push(n);
        break;
      default:
        return false;
    }
  })
    return (
      <>
        <Header />
        <div className='container-fluid' id='news-main'>
        <Row id='news-header' className='shadow'>
          <Col className='mt-5'>
          <h1><img src={require('../img/logo.png')} alt='logo' /> NEWS</h1>
          </Col>
        </Row>
        <Tabs className='mt-5'>
          <TabList className='p-2 news-tab'>
            {newsAll.map((n,i)=>(
              <Tab key={i}>{n.year}</Tab>
            ))}
            
          </TabList>

           {newsAll.map((n,i)=>(
            <TabPanel className='news-content' key={i}>
              {n.news.map((n,i) => (
                <div key={i}>
                <h3 className='mt-5'>{n.name}</h3>
                <p className='news-date'>{'By ' + n.author + ' - ' + n.date}</p>
         
            
            
                <Row xs={1} md={n.imgs != '' ? 2 : 1} className='container-fluid mt-5 mb-5'>
                  
                  <Col>
                    <Carousel>
                    {n.imgs.map((value, index)=>(
                      <Carousel.Item key={index}>
                      <img
                        className="d-block news-img shadow-lg"
                        src={value}
                        alt={index}
                        
                      />
                    </Carousel.Item>
                   ))}
                  </Carousel>
                  </Col>
                <Col className='mt-3'>
                  <p>{n.txt}</p>
                  <br/>
                  <p><a href={n.link.url} target='_blank' rel="noreferrer">{n.link.name}</a></p>
                  
                </Col>
            </Row>
            <hr/>
            </div>
              ))}
            
            
        </TabPanel>
           ))}
            
    
        </Tabs>

        </div>
        <Footer />
      </>
    )
  }