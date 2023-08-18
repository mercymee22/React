import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams(); {/*destructures the campsite id property from the object returned by the use params hook. variable contains a campsite id number*/}
    const campsite = selectCampsiteById(campsiteId); {/*returns the campsite objects from teh campsites array that matches that id*/}

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />; {/*current equals current campsite name, detail will cause the breadcrumb detail to be rendered if it is true.*/}
            <Row>
                <CampsiteDetail campsite={campsite} />;   {/*passing the campsite object to the campsite detail component as a prop. CampsiteDetail now has the info it needs to render the component.*/}
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;