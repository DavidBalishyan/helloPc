/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit"
import {userAPI} from "../../app/config"
import { addError, addSuccess, setAuth, startLoading, stopLoading } from "../global/globalSlice";

export const login_user = createAsyncThunk(
	"get/loginUser",
	async (obj, {dispatch, rejectWithValue, getState, fulfillWithValue}) => {
		try {
			dispatch(startLoading())
			const response = await userAPI.get(`?email=${obj.email}&password=${obj.password}`);	
			if (response.data.length) {
				dispatch(addSuccess(`Successfully logged in as ${response.data[0].fullName}`))
				dispatch(setAuth(true))
			}
			else {
				dispatch(setAuth(false))
				dispatch(addError("Wrong login or password"))
				return rejectWithValue("Wrong login or password");
			}
			return fulfillWithValue({data: response.data[0], fetchedAt: Date.now()})
		} catch (err) {
			dispatch(addError(err.mesage))
			return err
		}
		finally {
			dispatch(stopLoading())
		}
	}
);