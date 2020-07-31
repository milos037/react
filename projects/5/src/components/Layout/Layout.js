import React from "react";
import Aux from "../../hoc/Auxilaity";
import styles from "./Layout.css";
const layout = (props) => (
  <Aux>
    <div>Toolbar, sidebar, backgroudp</div>
    <main className={styles.Content}>{props.children}</main>
  </Aux>
);

export default layout;
