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
               
                <div id='members-div' className='container-fluid'>
                <Row id='all-members-header' className='shadow'>
                    <Col className='mt-5'>
                    <h1><img src={require('../img/logo.png')} alt='logo' className=''/> Team Members</h1>
                    </Col>
                </Row>
               <div id='member-main' className='shadow pb-4'>
                <Row className='container member-header mt-3'>
                    <Col className='ms-2'>
                    <h4 className='mt-3'>Director</h4>
                    <hr/>
                    </Col>
                </Row>
                <Row xs={2} md={4} className="g-4 project-title ms-2">
                
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
                <Row className='container member-header'>
                <Col className='ms-2'>
                    <h4 className='mt-5'>Current Members</h4>
                    <hr/>
                    </Col>
                </Row>
                <Row xs={2} md={4} className="g-4 project-title ms-2">
                
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
                <Row className='container member-header'>
                <Col className='ms-2'>
                    <h4 className='mt-5'>Alumni</h4>
                    <hr/>
                    </Col>
                </Row>
                <Row xs={2} md={4} className="g-4 project-title ms-2">
                
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

