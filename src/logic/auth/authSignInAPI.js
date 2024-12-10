import { createAsyncThunk } from "@reduxjs/toolkit"
import {userAPI} from "../../app/config"

export const login_user = createAsyncThunk(
	"get/loginUser",
	async (obj) => {
		try {
			const response = await userAPI.get(`?email=${obj.email}&password=${obj.password}`);
			return response.data[0]
		} catch (err) {
			return err
		}
	}
)

