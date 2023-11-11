import { Alert } from "react-native";

export const Errored = (err: any) => {
  if (err.request?.status) {
    console.log(err.request);
    let error = resolveStatusCode(err.request.status);
    if (error) Alert.alert("Error", error);
    else Alert.alert("Error", err.request._response);
  } else if (err.response?.status) {
    console.log(err.response);
    let error = resolveStatusCode(err.response.status);
    if (error) Alert.alert("Error", error);
    else Alert.alert("Error", err.response._response);
  } else {
    console.log(err);
    Alert.alert("Error", err.message);
  }
};

function resolveStatusCode(statusCode: number) {
  switch (statusCode) {
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 408:
      return "Request Timeout";
    case 413:
      return "Too Large Size (upload upto 10MB)";
    case 415:
      return "Unsupported Media Type";
    case 429:
      return "Too Many Requests";
    case 502:
      return "Bad Gateway";
    case 503:
      return "Service Unavailable";
    case 504:
      return "Gateway Timeout";
    case 511:
      return "Network Authentication Required";
    default:
      return null;
  }
}

export const confirm = async (text: string) => {
  return new Promise((resolve, reject) => {
    Alert.alert("Confirm", text, [
      { text: "Yes", style: "destructive", onPress: () => resolve(true) },
      { text: "No", style: "cancel", onPress: () => resolve(false) },
    ]);
  });
};
