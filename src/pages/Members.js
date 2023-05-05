import { memberInfo } from '../JSON/memberInfo.js';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Header } from '../App.js';
import './members.css';
import '../App.css';
export function Members(){

        return (
            <>
                <Header />
                <div id='member-main' className='container-fluid shadow pb-4'>
                <div id='members-header'><h2  className='pt-4 pb-4'><img src={require('../img/logo.png')} alt='logo' width={70}/> TEAM MEMBERS</h2></div>
                <div id='members-container' className='container-fluid'>
                <Row xs={2} md={4} className="g-5">
                {memberInfo.map((value,index)=>(
                    <Col key={index}>
                    <Card className='member-card m-5'>
                        <a key={index} href={'/members/'+value['url']}>
                        <Card.Img className='member-img' variant='top' src={value['avatar']} alt='avatar'/>
                        </a>
                        <Card.Body className='card-content'>
                            <Card.Text className='card-text'>
                            {value['position']}
                            </Card.Text>
                            <Card.Text>
                            {value['title']}
                            </Card.Text>
                        </Card.Body>
                    </Card>     
                    </Col>
                    
                ))}  
                </Row>   
                </div>
                </div>
            </>                   
        )
                   

}

