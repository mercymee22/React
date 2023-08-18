import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner, selectedFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()]; {/*new array called items, 1-returns whatever campsite object is returned from invoking the selectFeaturedCampsite function. 2-Whatever promotion object is returned from invoking selectFeaturedPromotion.*/}

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