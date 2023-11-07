import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import {Badge} from "react-bootstrap";
import Buyer from "../assets/images/buyer.jpg"

export const BuyerReview = ()=>{
    const reviews=
        {
            buyerImage: Buyer,
            buyerName: "John Doe",
            stars: 5,
            feedback: "Great product! I love it.",
        };
        return (
            <Card>
                <Card.Body>
                    <Image src={reviews.buyerImage} className="rounded-circle"/>
                    <Card.Title>{reviews.buyerName}</Card.Title>
                    <Badge bg="info">Rating: {reviews.stars}/5</Badge>
                    <Card.Text>{reviews.feedback}</Card.Text>
                </Card.Body>
            </Card>
        );
}

export const SellerReview = ()=>{
    return(
        <>
        <h1>Seller Reviews</h1>
        </>
    )
}