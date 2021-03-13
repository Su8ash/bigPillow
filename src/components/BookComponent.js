import { Col } from 'react-bootstrap';

export default function BookComponent() {

    return (
        <Col sm={8} md={9} className="mx-auto">
            <div className="mx-2 my-2 mb-4">
                <div className="card-container px-2 py-2">
                    <h2 className="header-title text-uppercase">Book &amp; pay</h2>

                    <div className="my-5">
                        <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Email</h4>
                        <h3 style={{ fontSize: "1.5rem" }}>info@bigpillowinn.com</h3>
                    </div>

                    <div className="my-5">
                        <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Phone</h4>
                        <h3 style={{ fontSize: "1.5rem" }}>+977-457398, 457574</h3>
                    </div>

                    <hr className="mx-5"></hr>

                    <h4 className="my-3 my-xl-4" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>PAY</h4>

                    <p className="text-decoration-underline my-2  mb-5 mx-2" style={{ fontSize: "1.2rem" }}>We accept payments via. FonePay, Card &amp; Cash</p>

                    <p className="text-decoration-underline pb-lg-0 pb-xl-4 mt-5">To reduce covid 19 infection risk we strongly encourage all
                customer to pay digitally for touch less transaction.</p>

                </div>

            </div>
        </Col>
    );
}