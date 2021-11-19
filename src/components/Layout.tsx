import React, { ReactChild, ReactChildren } from "react";

interface Props {
    children: ReactChild | ReactChildren
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
            { children }
        </div>
      </div>
    </div>
  );
};

export default Layout;
