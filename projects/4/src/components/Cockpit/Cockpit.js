import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.css";
import AuthContext from "../../context/auth-context";
const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  //uvek kada se svaki update
  useEffect(() => {
    console.log("[Cockpit.js] useEfect...");
    //http request
    // const timer = setTimeout(() => {

    //   alert("Saved data to cloud!");
    // }, 1000);

    toggleBtnRef.current.click();
    return () => {
      //kao componetWilUnmount
      // clearTimeout(timer);

      console.log("[Cockpit.js] cleanup useeffect");
    };
  }, []); //[] isto kao componentDidMount()

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEfect...");
    return () => {
      //kao componetWilUnmount
      console.log("[Cockpit.js]  2nd cleanup useeffect");
    };
  });
  const classes = [];
  let btnClass = "";
  if (props.showPersons) btnClass = styles.Red;
  if (props.personsLength.length <= 2) {
    classes.push(styles.red); // classes = ['red']
  }
  if (props.personsLength.length <= 1) {
    classes.push(styles.bold); // classes = ['red bold']
  }
  return (
    <div className={styles.Cockpit}>
      <h1>
        {props.title}
        <span role="img" aria-label="jsx-a11y/accessible-emoji">
          😁
        </span>
      </h1>
      <p className={classes.join(" ")}>Array styling here</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.click}>
        {props.showPersons ? "Hide all people" : "Show all people"}
      </button>

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
