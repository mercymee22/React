import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    promotionsArray: PROMOTIONS
};

const promotionSlice = createSlice({
    name: 'promotions',
    initialState
});

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);  {/*finds first object where featured property equals true*/}
};