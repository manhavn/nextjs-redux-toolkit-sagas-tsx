// src/root/commonSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    data_list: {},
    success: -1,
    choose_data: {},
    pathname: "",
    toast_status: -1,
    toast_message: "",
    toast_time_out: 4000,
  },
  reducers: {
    change_data_list: (state, action) => {
      state.data_list = action.payload;
      state.success = 1;
    },
    change_choose_data: (state, action) => {
      state.choose_data = action.payload;
    },
    delete_success: (state) => {
      state.success = -1;
    },
    set_pathname: (state, action) => {
      state.pathname = action.payload;
    },
    set_toast_status: (state, action) => {
      state.toast_status = action.payload;
    },
    delete_toast_status: (state) => {
      state.toast_status = -1;
    },
    set_toast_message: (state, action) => {
      state.toast_message = action.payload;
    },
    delete_toast_message: (state) => {
      state.toast_message = "";
    },
    set_toast_time_out: (state, action) => {
      state.toast_time_out = action.payload;
    },
    delete_toast_time_out: (state) => {
      state.toast_time_out = 4000;
    },
  },
});

export const {
  change_data_list,
  delete_success,
  set_pathname,
  change_choose_data,
  set_toast_status,
  delete_toast_status,
  set_toast_message,
  delete_toast_message,
  set_toast_time_out,
  delete_toast_time_out,
} = commonSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const data_list = (state: any) => state.common.data_list;
export const choose_data = (state: any) => state.common.choose_data;
export const success = (state: any) => state.common.success;
export const choose_data_pathname = (state: any) => state.common.pathname;
export const choose_toast_message = (state: any) => state.common.toast_message;
export const choose_toast_status = (state: any) => state.common.toast_status;
export const choose_toast_time_out = (state: any) => state.common.toast_time_out;
