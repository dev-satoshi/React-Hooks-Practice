import React from "react";
import classes from "./Button.module.scss";

type Props = {
  buttonText: string;
  onClick: () => void;
};

const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
  console.log(`Button:${buttonText}`);

  return (
    <div className={classes.root}>
      <button onClick={onClick} type="button" className={classes.button}>
        {buttonText}
      </button>
    </div>
  );
});

export default Button;
