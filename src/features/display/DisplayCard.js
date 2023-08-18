import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description } = item;
    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard; 
{/*DisplayCard is used to present some data, doesn't do anything with the data other than render it to the screen*/}