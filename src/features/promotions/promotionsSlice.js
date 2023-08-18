import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);  {/*finds first object where featured property equals true*/}
};

{/*Go to file for logic dealing with promotions data*/}