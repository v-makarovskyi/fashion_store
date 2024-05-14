import "../styles/index.scss";
import ReactModal from "react-modal";
import { Provider } from "react-redux";
import store from "@/redux/store";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

if (typeof window !== "undefined") {
  ReactModal.setAppElement("body");
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
