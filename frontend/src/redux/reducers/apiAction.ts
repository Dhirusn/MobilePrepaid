import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../store";

export const fetchCountriesAsync = createAsyncThunk(
    'countries/fetchCountries',
    async ({ }: { args: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get<Array<any>>(`${server}/api/reloadly/countries`, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            return data

        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)


export const fetchOperatorAsync = createAsyncThunk(
    'countries/Operators',
    async ({ isoName }: { isoName: string | undefined }, { rejectWithValue }) => {
        // debugger
        try {
            const { data } = await axios.get<Array<any>>(`${server}/api/reloadly/operators/${isoName}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)



export const getStripePaymentIntentAsync = createAsyncThunk(
    'create/PaymentIntent',
    async ({ currency, amount }: { currency: string, amount: number }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${server}/api/reloadly/create-payment-intent`, {
                currency, amount
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Something went wrong")
        }
    }
)
