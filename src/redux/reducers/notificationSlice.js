import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  notification: {
    id: null, // the component or name of whatever that called a function.
    label: null, // detail about request like=> get list of users.
    name: null, // name of returned data.
    title: null, // title of notif
    message: null, // body message of notif
    statusTextOfRequest: null, // status text of request like=> OK
    statusCodeOfRequest: null, // status code of request like=> 200
    isPending: false, // pending status of response
    isError: false, // error status of response
    isSuccess: false, // success status of response
    needCTA: false, // if response need some action in notif card
    typeOfCTA: null, //type of needed action like: reload page
  },
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initial_state,
  reducers: {
    pendingNotification(state, action) {
      state.notification = action.payload;
    },
    errorNotification(state, action) {
      state.notification = action.payload;
    },
    successNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

/* for internal pending notification that dont have any async request */
export const sendInternalPendingNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.pendingNotification(notif));
  };
};

/* for internal error notification that dont have any async request */
export const sendInternalErrorNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.errorNotification(notif));
  };
};

/* for internal success notification that dont have any async request */
export const sendInternalSuccessNotif = (notif) => {
  return (dispatch) => {
    dispatch(notificationActions.successNotification(notif));
  };
};

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
