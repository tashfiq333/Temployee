import { makeStyles } from "@material-ui/core/styles";

const JobcardStyle = makeStyles({
  root: {
    marginTop: 100,
    marginBottom: 100,
    width: 900,
    color: "black",
    padding: 50,
  },
});

const textField = makeStyles({
  root: {
    width: "80vh",
    minHeight: 60,
  },
  input: {
    marginTop: 20,
  },
});

export { JobcardStyle, textField };
