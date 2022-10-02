import "../styles/globals.css";
import { Provider, atom, useAtom } from "jotai";
import { event } from "../store/event";
// const eventValues = atom({
//   eventName: "",
//   hostName: "",
//   startDate: "",
//   endDate: "",
//   location: "",
//   photo: "",
// });

function MyApp({ Component, pageProps }) {
  const { initialState } = pageProps;

  return (
    <Provider initialValues={initialState && [[event, initialState]]}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
