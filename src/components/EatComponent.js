import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

export default function EatComponent({ onClick }) {

    return (
        <Col sm={8} md={9} className="mx-auto">
            <div className="mx-2 my-2 mb-4 mb-xl-2">
                <div className="card-container px-2 py-2">
                    <h2 className="header-title">EAT</h2>
                    <img
                        className="d-block w-100 custom-rounded custom-height col-md-8 offset-md-2"
                        src={"./restLogo.png"}
                        alt={"logo"}

                    />
                    <p className="text-center mx-2" style={{ fontSize: "0.95rem" }}>
                        Located on the ground floor of the hotel. The bakery shop offers
                        a wide range of French croissanterie and breads on dine in or
                        takeout basis. The all day fine casual dining bistro opens for daily
                        breakfast, lunch and dinner offering wide variety of dishes from around
                        the world.
                </p>

                    <Button variant="link" className="btn btn-link" >
                        <img
                            className="d-block w-50 custom-rounded  col-sm-8 offset-sm-3 mx-auto"
                            src={"./menu.png"}
                            alt={"logo"}
                            onClick={onClick}
                            height={'90%'}
                        /></Button>




                    <h5 style={{ fontSize: "1rem" }}>In dinning room</h5>
                    <p className="mx-2 pb-lg-3 pb-xl-1">Now, safe and fresh in room dining experience is
                available for our in house guests from 9 am -9 pm</p>
                </div>

            </div>
        </Col>
    );
}