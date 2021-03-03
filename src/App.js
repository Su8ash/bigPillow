import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Carousel, Jumbotron, } from 'react-bootstrap';

import BookComponent from './components/BookComponent';
import StayComponent from './components/StayComponent';
import { useState } from 'react';
import Footer from './components/Footer';
import { Modal } from 'react-bootstrap';
import EatComponent from './components/EatComponent';

function App() {

  // premiumFamilyRoomImages
  const premiumFamilyRoomImages = [{ "image": "./PremiumFamilyRoom/room1.jpg" },
  { "image": "./PremiumFamilyRoom/room2.jpg" },
  { "image": "./PremiumFamilyRoom/room3.jpg" },
  { "image": "./PremiumFamilyRoom/room4.jpg" }]


  // premiumQueenRoomImages
  const premiumQueenRoomImages = [{ "image": "./PremiumQueenRoom/room1.jpg" },
  { "image": "./PremiumQueenRoom/room2.jpg" },
  { "image": "./PremiumQueenRoom/room3.jpg" },
  { "image": "./PremiumQueenRoom/room4.jpg" }]


  // premiumTwinRoomImages
  const premiumTwinRoomImages = [{ "image": "./PremiumTwinRoom/room1.jpg" },
  { "image": "./PremiumTwinRoom/room2.jpg" },
  { "image": "./PremiumTwinRoom/room3.jpg" },
  { "image": "./PremiumTwinRoom/room4.jpg" }]

  // economyTwinRoomImages
  const economyTwinRoomImages = [{ "image": "./EconomyTwinRoom/room1.jpg" },
  { "image": "./EconomyTwinRoom/room2.jpg" },
  { "image": "./EconomyTwinRoom/room3.jpg" },
  { "image": "./EconomyTwinRoom/room4.jpg" }]


  // Rooms Example
  const rooms = [
    {
      "roomType": "Economy Twin Room", "price": "2,500", "images": [...economyTwinRoomImages],
      "amenities": "Non smoking, cable TV, high speed wifi, cubicle shower, air-conditioner, safety box, vanity mirror, reading light, intercom, hair dryer, towels, laundry bag, personal care products, drinking water."
    },
    {
      "roomType": "Premium Twin Room", "price": "2,800", "images": [...premiumTwinRoomImages],
      "amenities": "Two single beds (36”X78”), choice of pillows, Private balcony, reading/vanity desk, wardrobe, safety box, cubicle shower, air conditioner, intercom, hair dryer, towels, laundry bag, tea coffee station, personal care products, premium drinking water, elevator access.*smoking strictly in balcony only"
    },
    {
      "roomType": "Premium Queen Room", "price": "2,800", "images": [...premiumQueenRoomImages],
      "amenities": "01 Queen size bed (60”X78”), choice of pillows, private balcony with ash tray, reading/vanity desk, wardrobe, safety box, cubicle shower, air conditioner, intercom, hair dryer, towels, laundry bag, tea coffee station, personal care products, premium drinking water, elevator access.*smoking strictly in balcony only"
    },
    {
      "roomType": "Premium Family Room", "price": "3,300", "images": [...premiumFamilyRoomImages],
      "amenities": "01 king size bed (72”X78”) & 01 single bed (36”X78”), choice of pillows, private balcony with furtniture & ash tray, reading/vanity desk, wardrobe, safety box, cubicle shower, air conditioner, intercom, hair dryer, towels, laundry bag, tea coffee station, personal care products, premium drinking water, elevator access.* smoking strictly in balcony only"
    },
  ]

  // terms example
  const terms = [
    { "term": "All rates are inclusive of applicable service charge (10%) & VAT (13%)." },
    { "term": "All rooms sleeps maximum 02 persons. Premium Family Room sleeps 03 persons." },
    { "term": "The rates are for room only." },
    { "term": "Complimentry parking is available for all checked in guests." },
    { "term": "Check in starts at 1400 hrs and check out is at 12 noon." },
    { "term": "Early check in & late check out is subject to availablity & additional surcharge." },
    { "term": "All check in guests must present a valid photo ID." },
  ]

  // menus with image example
  // const menus = [{ "image": "../menu1.jpg" }, { "image": "../menu2.jpg" }, { "image": "../menu3.jpg" }, { "image": "../menu4.jpg" }, { "image": "../menu5.jpg" }, { "image": "../menu6.jpg" },]



  const [showTerms, setShowTerms] = useState(false);
  const handleTermModalClose = () => setShowTerms(false);
  const handleTermModalShow = () => setShowTerms(true);



  const [bluring, setBluring] = useState(false);


  // Displays modal when showTerms changes into true
  if (showTerms) {

    return (
      <Modal show={showTerms} onHide={handleTermModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>

        {terms.map((item, index) => <Modal.Body key={index}>{index + 1}. {item.term}</Modal.Body>)}

        <Modal.Footer>
          <Button variant="danger" onClick={handleTermModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }




  return (
    <div className="custom-body">
      <Navbar collapseOnSelect expand="lg" >



        <Navbar className=" Primary-text-color small-width " collapseOnSelect expand="lg">
          <Navbar.Brand href="#Home" bg="light" variant="light">

            <img
              // src={"https://images.unsplash.com/photo-1513694203232-719a280e022f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"}
              src="./logo.png"
              height={"45"}
              width={"45"}
              alt={"BigPillowLogo"}
            />
          </Navbar.Brand>
        </Navbar>



        <Nav className="ml-auto">
          <Navbar.Brand href="#Home" style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#454545" }} >
            BIG PILLOW INN
            </Navbar.Brand>
        </Nav>
      </Navbar>



      {/*Big pillow inn jumbotron*/}

      <Jumbotron className="hotel">
        <div style={{ color: "white" }} className="big-width col-md-10 offset-md-1 col-lg-8 offset-lg-2">

          <h1 style={{ fontSize: "1.6 em", fontWeight: "bold" }}>Big Pillow Inn</h1>
          <p style={{ fontSize: "1.2 em", textAlign: "center" }}>is <br></br>

          Located in the heart of Pokhara in the Lakeside area with all major shopping &amp; food outlets and leisure activities within walking distance.
           We offer clean and well appointed rooms in the economy and premium category.
        </p>
          {/*

            Above
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            content of big pillow
        </Navbar.Collapse>
          <p>
            <strong className="text-uppercase" >&#42; Big pillow inn </strong>is a trademark owned and operated by <strong class="text-uppercase" >
              b.g.s hospitality &amp;
            leasing group</strong> headquartered in pokhara, nepal. the group also wons and operated f&amp;b brand
            belle lyipa - nepal's first croissanterie &amp; fine casual dinning outlet.
          </p>
          */}
        </div>
      </Jumbotron>


      <Container fluid className="mb-5 mx-2 custom-main" >

        <Row xs={1} md={1} lg={3} className="my-1 mx-auto" >

          {/*Stay Card View*/}
          <Col sm={8} md={10} className="mx-auto">
            <div className="mx-2 my-2 mb-4">
              <div className="card-container py-2">
                <h2 className="header-title">STAY</h2>

                <Carousel slide={true} interval={10500}
                  prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: 'gray' }} />}
                  nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: 'gray' }} />}
                  onSlide={() => {
                    setBluring(true);
                    setInterval(() => {
                      setBluring(false);
                    }, 1500)
                  }}>



                  {rooms.map((item, index) => {
                    return (
                      <Carousel.Item style={bluring ? { filter: "blur(12px)", animationDelay: "50s" } : null} key={index}>
                        <StayComponent roomType={item.roomType} price={item.price} amenities={item.amenities} images={[...item.images]}
                          onClick={handleTermModalShow} image />
                      </Carousel.Item>
                    );
                  }
                  )
                  }

                </Carousel>


              </div>
            </div>
          </Col>

          {/*Eat Card View*/}
          <EatComponent onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://sabfood.app/menus/00664?fbclid=IwAR3twpbkLfOo-NFdXKfkoF2Pq0AbxLxbVKbWae6EV9wOxEXsXq1jg3rr5tU',
              '_blank'
            );

          }
          } />

          {/*Book Card View*/}
          <BookComponent />

        </Row>
      </Container>

      <Footer />

    </div >
  );
}

export default App;
