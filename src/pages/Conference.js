import { products } from '../JSON/products.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Header, Footer } from '../App.js';

export function Conference(){
    const conf = products.find(p => p.cat == 'conference');
    return (
        <>
            <Header />
            <div className='container' id='conf'>
                <Row xs={1} md={1} className='container-fluid mt-5 mb-5'>
                <Col>
                    <h1 className='mb-5'>
                    Selected Conference Presentations
                    </h1>
                    <hr/>
                    {conf.pro.map((value,index)=>(
                        <p key={'c' + index}>{value}</p>
                        
                    ))}
                </Col>
                </Row>
                </div>
            <Footer />
        </>
    )
}