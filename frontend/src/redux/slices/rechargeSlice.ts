import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface RechargeState {
    rechargeAmt: number | null
    moileNum: string | number | null
    operatorName: string
}

const initialState: RechargeState = {
    rechargeAmt: null,
    moileNum: null,
    operatorName: ''
}
export const rechargeSlice = createSlice({
    name: "recharge",
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<number>) => {
            state.rechargeAmt = action.payload
        },
        setMobileNum: (state, action: PayloadAction<string>) => {
            state.moileNum = action.payload
        },
        setOperatorName: (state, action: PayloadAction<string>) => {
            state.operatorName = action.payload
        }
    }
});


export const { setAmount, setMobileNum, setOperatorName } = rechargeSlice.actions;
export default rechargeSlice.reducer