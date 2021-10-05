import React from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useLocation } from "wouter";
import useForm from "./SearchFormHook";

const RATINGS = ["g", "pg", "pg-13", "r"];

const useStyles = makeStyles({
  customField: {
    "& .MuiInputBase-input": {
      padding: "14px",
      display: "flex",
      alignItems: "center",
    },
    marginBottom: "1rem",
  },
});

export function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  const [, pushLocation] = useLocation();
  const classes = useStyles();

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleKeywordChange = (event) => {
    updateKeyword(event.target.value);
  };

  const handleRatingChange = (event) => {
    updateRating(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={classes.customField}
        fullWidth
        id="search"
        label="Buscar"
        onChange={handleKeywordChange}
        variant="outlined"
      />
      <select onChange={handleRatingChange} value={rating}>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

export default React.memo(SearchForm);
