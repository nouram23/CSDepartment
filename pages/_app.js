import "../styles/globals.css";
import "antd/dist/antd.css";
import { BackTop } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Roboto">
      <Component {...pageProps} />
      <BackTop />
    </div>
  );
}

export default MyApp;
