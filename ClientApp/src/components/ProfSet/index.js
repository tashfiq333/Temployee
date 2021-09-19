import React, { PureComponent } from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./profset.css";

const useStyles = makeStyles((theme) => ({
root: {
  '& > :not(style)': { m: 1, width: '25ch' },
}}));


const ProfSet = () =>{
  const classes = useStyles();

    return(
        <div className="bgimg">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" noValidate autoComplete="off" />
        </div>
    );

};

export default ProfSet;
