import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state), 
        selectFeaturedPartner(state)
    ]);
    console.log('display items:', items);

    return (
        <Row>                           {/*displays whats in items array in DisplayCard*/}
            {items.map((item, idx) => {
                return (
                    item && (  
                        <Col md className='m-1' key={idx}>    {/*item && () prevents blank page from rendering if array items change and one is missing or different. Checks for value of item, if one of our selector functions doesn't find one that featured, it will render a falsy value (undefined) and prevent anything to the right of the && from rendering. */}
                            <AnimatedDisplayCard item={item} />  {/*DisplayCard component returns a card component that is repeated for each of the objects in our list-items and we'll pass the current item object to it each time via props. So the DisplayList component is sending the item object over to the display card component */}
                        </Col>
                    )
                );
            } ) }
        </Row>
    );
};

export default DisplayList;