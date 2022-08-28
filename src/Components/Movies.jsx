import axios from "axios";
import React, { useEffect, useState } from "react";

function Movies() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=0dogounw8tOyjmK0IfdqoyE33DfdMA00"
      )
      .then((reviews) => {
        setReviews(reviews.data.results);
        console.log(reviews.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {reviews.map((item) => {
        return (
          <div key={item.id}>
            <h1>byline:{item.byline}</h1>
            <h1>critics_pick:{item.critics_pick}</h1>
            <h1>display_title:{item.display_title}</h1>
            <h1>headline:{item.headline}</h1>
            <img src={item.multimedia?.src} />
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}

export default Movies;
