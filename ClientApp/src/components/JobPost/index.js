import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { JobcardStyle, textField } from "./jobStyles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { POST } from "../../api";

const chipStyle = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

const JobPost = () => {
  const classes = JobcardStyle();
  const chipClass = chipStyle();
  const txt = textField();
  const [hashtag, setHashtag] = useState("");
  const [numberOfHashtags, setNumberOfHashtags] = useState(0);
  const [arrayOfHashtags, addHashtag] = useState([]);

  const DeleteTags = (h, i) => () => {
    console.log("Clicked Delete: " + i);
    addHashtag((arrayOfHashtags) =>
      arrayOfHashtags.filter((hashtag, idx) => idx !== i)
    );
  };
  const Hashtags = arrayOfHashtags.map((h, i) => (
    <Chip label={h} color="primary" size="medium" onDelete={DeleteTags(h, i)} />
  ));

  const OnHashChange = (e) => {
    if (e.target.value !== "") {
      const { value, name } = e.target;

      setHashtag((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(name + ": " + value);
    }
  };

  const AddPost = async (e) => {
    var formData = new FormData();
    formData.append("name", hashtag.title);
    formData.append("duration", hashtag.duration);
    formData.append("price", hashtag.price);
    formData.append("description", hashtag.description);
    try {
      // formData.append("Tags", arrayOfHashtags);
      console.log(hashtag.level);

      const { data } = await POST("project/add", {
        name: hashtag.title,
        duration: hashtag.duration,
        price: hashtag.price,
        description: hashtag.description,
        level: hashtag.level,
        tags: arrayOfHashtags,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const AddTags = () => {
    setNumberOfHashtags(numberOfHashtags + 1);
    addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag.TagsField));
    console.log(arrayOfHashtags);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={6} spacing={2}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" align="center">
              Post a Job
            </Typography>
            <form noValidate autoComplete="on">
              <TextField
                className={txt.root}
                id="outlined-basic"
                label="Title"
                name="title"
                variant="outlined"
                style={{ marginTop: "20px" }}
                onChange={OnHashChange}
              />
              <TextField
                className={txt.root}
                id="outlined-basic"
                label="Duration"
                name="duration"
                variant="outlined"
                style={{ marginTop: "20px" }}
                onChange={OnHashChange}
              />
              <TextField
                className={txt.root}
                id="outlined-basic"
                label="Experience Level"
                name="level"
                variant="outlined"
                style={{ marginTop: "20px" }}
                onChange={OnHashChange}
              />
              <TextField
                className={txt.root}
                id="outlined-basic"
                label="Price"
                name="price"
                variant="outlined"
                style={{ marginTop: "20px" }}
                onChange={OnHashChange}
              />
              <TextareaAutosize
                className={txt.root}
                placeholder="Description"
                name="description"
                style={{ marginTop: "20px" }}
                onChange={OnHashChange}
              />

              <div className={chipClass.root}>
                {numberOfHashtags > 0 ? Hashtags : ""}
              </div>

              <TextField
                className={txt.root}
                id="outlined-basic"
                label="Tags"
                variant="outlined"
                style={{ marginTop: "20px" }}
                name="TagsField"
                onChange={OnHashChange}
              />
              <CardActions style={{ justifyContent: "left" }}>
                <Button variant="contained" color="primary" onClick={AddTags}>
                  ADD
                </Button>
              </CardActions>
            </form>
            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" color="primary" onClick={AddPost}>
                Post
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobPost;
