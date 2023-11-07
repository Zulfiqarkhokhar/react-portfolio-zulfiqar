import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import {Badge, Container} from "react-bootstrap";
import Buyer from "../assets/images/buyer.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const BuyerReview = ()=>{
    const reviews=
        [
        {
            buyerImage: Buyer,
            buyerName: "John Doe",
            stars: 5,
            feedback: "Great product! I love it.",
        },
            {
                buyerImage: Buyer,
                buyerName: "Yasir Ali",
                stars: 3,
                feedback: "Great product! I love it.",
            },
            {
                buyerImage: Buyer,
                buyerName: "Talabdar",
                stars: 4.5,
                feedback: "Great product! I love it.",
            },
        ];
        return (


            <>
                <h1 className="d-flex justify-content-center align-items-center">Buyer Reviews</h1>
    <Container className='py-5'>
        <Row xs={1} md={2} className="g-4">
            {reviews.map((reviews) =>{
                return (
                <Col className="col-lg-4 col-md-6 col-sm-12">
                    <Card>
                        <Card.Body>
                            <Image src={reviews.buyerImage}/>
                            <Card.Title>{reviews.buyerName}</Card.Title>
                            <Badge bg="info">Rating: {reviews.stars}/5</Badge>
                            <Card.Text>{reviews.feedback}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })}
        </Row>
    </Container>
            </>
        );
}

export const SellerReview = ()=>{
    return(
        <></>

    )
}