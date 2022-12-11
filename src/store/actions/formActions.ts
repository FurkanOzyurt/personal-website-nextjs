import * as formAPICall from "@/api/form/APICall";
import { Dispatch } from "redux";
import { SUBMIT_CONTACT_FORM_DONE, SUBMIT_CONTACT_FORM_START } from "../types";


export const submitContactForm = (data: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: SUBMIT_CONTACT_FORM_START })
    const response: any = await formAPICall.submitContactForm(data);
    if (response.data) {
      dispatch({ type: SUBMIT_CONTACT_FORM_DONE, message: "contactFormSuccess", error: false })
    }
  } catch (error) {
    dispatch({ type: SUBMIT_CONTACT_FORM_DONE, message: "contactFormError", error: true })
  }
};
