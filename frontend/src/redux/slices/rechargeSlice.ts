import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

export interface RechargeState {
    rechargeAmt: number | null
    moileNum: string | null
    operatorName: string
    rechargeCurr: string
    operatorId: number | null
}

const initialState: RechargeState = {
    rechargeAmt: null,
    moileNum: null,
    operatorName: '',
    rechargeCurr: '',
    operatorId: null
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
        },
        setRechargeCurrency: (state, action: PayloadAction<string>) => {
            state.rechargeCurr = action.payload
        },
        setOperatorId: (state, action: PayloadAction<number>) => {
            state.operatorId = action.payload
        }
    }
});


export const { setAmount, setMobileNum, setOperatorName, setRechargeCurrency, setOperatorId } = rechargeSlice.actions;
export default rechargeSlice.reducer