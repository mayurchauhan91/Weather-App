import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette,
  },
  inline: {
    display: "inline",
  },
}));

const News = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://gnews.io/api/v4/top-headlines?token=778e25fc032c75cae1a88c145165abdb&lang=en"
        );
        setData(response.data?.articles);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    getData();
  }, []);
  return (
    <div className="news-main-container">
      <div>
        <h2 className="news-title">News</h2>
      </div>
      <List className={(classes.root, "newList-container")}>
        {data.map((item) => {
          return (
            <ListItem alignItems="flex-start" key={item.title}>
              <ListItemAvatar>
                <a target="_blank" rel="" href={item.url}>
                  <Avatar alt="Remy Sharp" src={item.image} />
                </a>
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                secondary={<React.Fragment>{item.description}</React.Fragment>}
              ></ListItemText>
            </ListItem>
          );
        })}
      </List>
      <h1>{error}</h1>
    </div>
  );
};

export default News;
