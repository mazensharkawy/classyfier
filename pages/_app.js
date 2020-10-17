import _ from "lodash";
import { PageTransition } from "next-page-transitions";
import App from "next/app";
import Router from "next/router";
import React from "react";
import { Provider } from "react-redux";
// import Loader from "../src/components/Loader/Loader";
import * as gtag from "../lib/gt";
import withReduxStore from "../lib/with-redux-store";
// import ErrorPage from "../src/containers/ErrorPage";
//import Router from 'next/router'
//Router.events.on('routeChangeStart', ()=>console.log("start"));
//Router.events.on('routeChangeComplete', ()=>console.log("done"));
Router.events.on("routeChangeComplete", url => gtag.pageview(url));

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    //dispatch init action
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const error = _.get(reduxStore.getState(), "data.error");
    return (
          <Provider store={reduxStore}>
            <PageTransition
              timeout={200}
              classNames="page-transition"
              // loadingComponent={<Loader />}
              loadingDelay={200}
              loadingTimeout={{
                enter: 200,
                exit: 0
              }}
              loadingClassNames="loading-indicator"
            >
              <Component {...pageProps} />
              {/* {error ? <ErrorPage /> : <Component {...pageProps} />} */}
            </PageTransition>
          </Provider>

        // <style jsx global>{`
        //   .page-transition-enter {
        //     opacity: 0;
        //     transform: translate3d(0, 20px, 0);
        //   }
        //   .page-transition-enter-active {
        //     opacity: 1;
        //     transform: translate3d(0, 0, 0);
        //     transition: opacity 300ms, transform 1300ms;
        //   }
        //   .page-transition-exit {
        //     opacity: 1;
        //   }
        //   .page-transition-exit-active {
        //     opacity: 0;
        //     transition: opacity 300ms;
        //   }
        //   .loading-indicator-appear,
        //   .loading-indicator-enter {
        //     opacity: 0;
        //   }
        //   .loading-indicator-appear-active,
        //   .loading-indicator-enter-active {
        //     opacity: 1;
        //     transition: opacity 400ms;
        //   }
        // `}</style>
    );
  }
}

export default withReduxStore(MyApp);
