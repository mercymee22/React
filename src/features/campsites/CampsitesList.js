import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);  //Passing the selectAllCampsites function selector into the useSelector hook as a callback function, to give selectAllCampsites selector access to the application state stored by Redux. 
    console.log('campsites:', campsites);

    return(
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={campsite.id}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}     

export default CampsitesList;
