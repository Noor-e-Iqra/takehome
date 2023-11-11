import { action, makeObservable, observable, runInAction } from "mobx";
import { Errored, confirm } from "../utils/functions";
import { BASE_URL } from "../utils/config";
import { header } from "../utils/header";

class Auth {
  // Observable state for the authentication token
  token = "";

  // Constructor to initialize MobX observables and actions
  constructor() {
    makeObservable(this, {
      token: observable,
      login: action,
      register: action,
      logout: action,
    });
  }

  //  method for user login
  login = async (body: any, navigation: any, setLoading: any) => {
    try {
      // Making a POST request to the login endpoint
      const response = await fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: header,
        body: body,
      });

      // Parsing the JSON response
      const json = await response.json();

      // If the response is not okay, throw an error
      if (!response.ok) throw await json;

      console.log(json);

      // Updating the token state using MobX's runInAction
      runInAction(() => (this.token = json.data.token));
      setLoading(false);
      navigation.replace("App");
    
    } catch (error) {
      // Handling errors during login
      setLoading(false);
      Errored(error);
    }
  };

  //  method for user registration
  register = async (body: any, setLoading: any, setShowMsg: any) => {
    try {
      // Making a POST request to the register endpoint
      const response = await fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        headers: header,
        body: body,
      });

      // Parsing the JSON response
      const json = await response.json();

      // If the response is not okay, throw an error
      if (!response.ok) throw await json;

      console.log(json);

      // Showing a Registered Successfully message
      setShowMsg(true);
      setLoading(false);
    
    } catch (error) {
      // Handling errors during registration
      setLoading(false);
      Errored(error);
    }
  };

  //  method for user logout
  logout = async (navigation: any) => {
    // Confirming user's intention to logout
    let isConfirm = await confirm("Are you sure that you want to logout?");

    // If user confirms, proceed with logout
    if (isConfirm) {
      try {
        // Making a POST request to the logout endpoint
        const response = await fetch(`${BASE_URL}auth/logout`, {
          method: "POST",
          headers: { ...header, Authorization: `Bearer ${this.token}` },
        });

        // Parsing the JSON response
        const json = await response.json();

        // If the response is not okay, throw an error
        if (!response.ok) throw await json;

        console.log(json);

        // Updating the token state to an empty string using MobX's runInAction
        runInAction(() => (this.token = ""));

        // Navigating back to the top of the navigation stack
        navigation.popToTop();
      } catch (error) {
        // Handling errors during logout
        Errored(error);
      }
    }
  };
}

export const AuthStore = new Auth();
