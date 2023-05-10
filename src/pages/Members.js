import { memberInfo } from '../JSON/memberInfo.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Header, Footer } from '../App.js';
import './members.css';
import '../App.css';
export function Members(){
    const director = [];
    const current = [];
    const alumni = [];
    const other = [];
    memberInfo.map((m,i)=>{
        switch(m.cate){
            case 'Director':
                director.push(m);
                break;
            case 'Current':
                current.push(m);
                break;
            case 'Alumni':
                alumni.push(m);
                break;
            default:
                 other.push(m);
        }
    })

        return (
            <>
                <Header />
                <div id='member-main' className='container-fluid shadow pb-4'>
                <img className='bg-img' src={require('../img/small-decor-m2.png')} alt='decor'/>
                <div id='members-header'><h2  className='pt-4 pb-4'><img src={require('../img/logo.png')} alt='logo' width={70}/> TEAM MEMBERS</h2></div>
                <div id='members-container' className='container-fluid'>
                
                <Row className='mt-2 container-fluid'>
                    <h4>Director</h4>
                    <hr/>
                </Row>
                <Row xs={2} md={4} className="g-5">
                
                    {director.map((value,index)=>(
                        <Col key={index}>
                        <Card className='member-card'>
                            <a key={index} href={'/'+value['url']}>
                            <Card.Img className='member-img' variant='top' src={value['avatar']} alt='avatar'/>
                            </a>
                            <Card.Body className='card-content'>
                                 <Card.Text className='card-name'>
                                {value['name']}
                                </Card.Text>
                                <hr/>
                                <Card.Text className='card-title'>
                                {value['position']}
                                </Card.Text>
                                <Card.Text className='card-title subtitle'>
                                {value['title']}
                                </Card.Text>
                            </Card.Body>
                        </Card>     
                        </Col>
                    ))}
                </Row>
                <Row className='mt-5 container-fluid'>
                    <br/>
                    <h4>Current Members</h4>
                    <hr/>
                </Row>
                <Row xs={2} md={4} className="g-5">
                
                    {current.map((value,index)=>(
                        <Col key={index}>
                        <Card className='member-card'>
                            <a key={index} href={'/'+value['url']}>
                            <Card.Img className='member-img' variant='top' src={value['avatar']} alt='avatar'/>
                            </a>
                            <Card.Body className='card-content'>
                                 <Card.Text className='card-name'>
                                {value['name']}
                                </Card.Text>
                                <hr/>
                                <Card.Text className='card-title'>
                                {value['position']}
                                </Card.Text>
                                <Card.Text className='card-title subtitle'>
                                {value['title']}
                                </Card.Text>
                            </Card.Body>
                        </Card>     
                        </Col>
                    ))}
                </Row>
                <Row className='mt-5 container-fluid'>
                    <h4>Alumnis</h4>
                    <hr/>
                </Row>
                <Row xs={2} md={4} className="g-5">
                
                    {alumni.map((value,index)=>(
                        <Col key={index}>
                        <Card className='member-card'>
                            <a key={index} href={'/'+value['url']}>
                            <Card.Img className='member-img' variant='top' src={value['avatar']} alt='avatar'/>
                            </a>
                            <Card.Body className='card-content'>
                                 <Card.Text className='card-name'>
                                {value['name']}
                                </Card.Text>
                                <hr/>
                                <Card.Text className='card-title'>
                                {value['position']}
                                </Card.Text>
                                <Card.Text className='card-title subtitle'>
                                {value['title']}
                                </Card.Text>
                            </Card.Body>
                        </Card>     
                        </Col>
                    ))}
                </Row>
                  
                </div>
                </div>
            <Footer />
            </>                   
        )
                   

}

