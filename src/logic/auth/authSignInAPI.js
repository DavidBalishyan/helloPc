import { createAsyncThunk } from "@reduxjs/toolkit"
import {userAPI} from "../../app/config"
import { startLoading, stopLoading } from "../global/globalSlice";

export const login_user = createAsyncThunk(
	"get/loginUser",
	async (obj, {dispatch, rejectWithValue, getState, fulfillWithValue, signal}) => {
		try {
			dispatch(startLoading())
			// const {account} = getState();
			// if (!account.token) return rejectWithValue('token error');
			const response = await userAPI.get(`?email=${obj.email}&password=${obj.password}`);
			return fulfillWithValue({data: response.data[0], fetchedAt: Date.now()})
		} catch (err) {
			return err
		}
		finally {
			dispatch(stopLoading())
		}
	}
)

