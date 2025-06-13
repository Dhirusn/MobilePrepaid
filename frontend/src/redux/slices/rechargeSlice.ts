import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface RechargeState {
    rechargeAmt: string
}

const initialState: RechargeState = {
    rechargeAmt: ""
}
export const rechargeSlice = createSlice({
    name: "recharge",
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<string>) => {
            state.rechargeAmt = action.payload
        }
    }
});


export const { setAmount } = rechargeSlice.actions;
export default rechargeSlice.reducer