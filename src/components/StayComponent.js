import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Carousel, Col } from 'react-bootstrap';

export default function StayComponent({ roomType, price, amenities, onClick, images }) {



    return (
        <Col>
            <Card className="text-center removebg" style={{ maxHeight: "70%", border: "none" }}>

                <Card.Body className="removebg">

                    <Carousel controls={false}>

                        {images.map((item, index) => {
                            return (<Carousel.Item interval={3000} key={index}>
                                <img
                                    className="d-block w-100 custom-rounded"
                                    src={item.image}
                                    alt={"Room" + index}

                                />
                            </Carousel.Item>);
                        })
                        }
                    </Carousel>

                    <p className="card-header-title">
                        {roomType}
                    </p>

                    <h4 className="my-1" >Amenitites</h4>

                    {(amenities.length > 200) ? <p className="text-center smallerFont">{amenities}</p> : <p className="text-center" style={{ fontSize: "1rem" }}>{amenities}</p>}

                    <div className="btn btn-primary custom-button d-block mx-auto text-uppercase">NPR {price}
                    </div>

                    <Button variant="link" className="btn btn-link">
                        <p
                            onClick={onClick}
                            className='text-color smallerFont'
                        >Terms &amp; conditions</p>
                    </Button>
                </Card.Body>

            </Card>

        </Col >
    );
}