import { createSlice } from "@reduxjs/toolkit";
import { fetchCountriesAsync, fetchOperatorAsync, getStripePaymentIntentAsync } from "../reducers/apiAction";
import type { IOperatorType } from "../interfaces/operatorType";

export interface Country {
    isoName: string;
    name: string;
    continent: string;
    currencyCode: string;
    currencyName: string;
    currencySymbol: string;
    flag: string;
    callingCodes: string[];
}

interface CountryState {
    countries: Country[];
    loading: boolean;
    error: string | null;
    operators: IOperatorType[];
    intentId: string | null
}

const initialState: CountryState = {
    countries: [],
    operators: [],
    loading: false,
    error: null,
    intentId: null
};
const reloadlySlice = createSlice({
    name: "reloadly",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountriesAsync.pending, (state) => {
            state.loading = true;
            state.error = null;

        }).addCase(fetchCountriesAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string || "Failed to fetch countries";

        }).addCase(fetchCountriesAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload as Country[];
        })
        builder.addCase(fetchOperatorAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchOperatorAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string || "Failed to fetch operators"
        }).addCase(fetchOperatorAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.operators = action.payload as any
        })
        builder.addCase(getStripePaymentIntentAsync.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(getStripePaymentIntentAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string || "unable to procedd payment"
        }).addCase(getStripePaymentIntentAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.intentId = action.payload
        })

    }
});


// export const { } = reloadlySlice.actions;
export default reloadlySlice.reducer