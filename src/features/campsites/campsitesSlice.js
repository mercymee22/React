import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));  {/*parseInt converts string value to an integer, so we are comparing an iteger to an integer*/}
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured); {/*returns the object when the featured value of the propery equals true*/}
}