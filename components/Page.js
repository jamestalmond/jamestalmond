import Header from "./Header";
import Meta from "./Meta";
import React from "react";

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Meta />
        <Header />
        <main role="main">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Page;
