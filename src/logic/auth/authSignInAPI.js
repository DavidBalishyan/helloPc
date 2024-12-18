/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit"
import {userAPI} from "../../app/config"
import { addError, addSuccess, startLoading, stopLoading } from "../global/globalSlice";

export const login_user = createAsyncThunk(
	"get/loginUser",
	async (obj, {dispatch, rejectWithValue, getState, fulfillWithValue}) => {
		try {
			dispatch(startLoading())
			// const {account} = getState();
			// if (!account.token) return rejectWithValue('token error');
			const response = await userAPI.get(`?email=${obj.email}&password=${obj.password}`);
			console.log(response.data.length);
			
			if (!response.data.length) 
				dispatch(addSuccess("success"))
			else 
				throw new Error("rrrr")
			return fulfillWithValue({data: response.data[0], fetchedAt: Date.now()})
		} catch (err) {
			console.log(err);
			
			dispatch(addError(err.mesage))
			return err
		}
		finally {
			dispatch(stopLoading())
		}
	}
)
