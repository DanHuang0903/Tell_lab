import { products } from '../JSON/products.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Header, Footer } from '../App.js';

export function Publications(){
    const conf = products.find(p => p.cat == 'publications');
    return (
        <>
            <Header />
            <div className='container' id='pub'>
                <Row xs={1} md={1} className='container-fluid mt-5 mb-5'>
                <Col>
                    <h1>
                    Selected Refereed Publications
                    </h1>
                    <hr/>
                    {conf.pro.map((value,index)=>(
                        <p>{value.name}<a href={value.pdf} target='_blank' rel="noreferrer">[PDF]</a></p>
                        
                    ))}
                </Col>
                </Row>
                </div>
            <Footer />
        </>
    )
}