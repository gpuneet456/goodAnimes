import React from "react";
import "./styles.css";
import { useState } from "react";

var animeDB = {
  Shonen: [
    {
      name: "My Hero Academia",
      rating: "8/10",
      url: "https://www.imdb.com/title/tt5626028/"
    },
    {
      name: "Naruto",
      rating: "9/10",
      url: "https://www.imdb.com/title/tt0409591/?ref_=fn_al_tt_2"
    },
    {
      name: "Dragon Ball Z",
      rating: "8.7/10",
      url: "https://www.imdb.com/title/tt0214341/?ref_=fn_al_tt_4"
    }
  ],
  Isekai: [
    {
      name: "No Game No Life",
      rating: "8.7/10",
      url: "https://www.imdb.com/title/tt3431758/"
    },
    {
      name: "Remake our Life",
      rating: "8.4/10",
      url: "https://www.imdb.com/title/tt13528102/?ref_=nv_sr_srsg_0"
    },
    {
      name: "Hunter X Hunter",
      rating: "9.5/10",
      url: "https://www.imdb.com/title/tt2098220/"
    }
  ],
  Fantasy: [
    {
      name: "Attack on Titan",
      rating: "9.6/10",
      url: "https://www.imdb.com/title/tt2560140/?ref_=nv_sr_srsg_0"
    },
    {
      name: "Steins Gate",
      rating: "8.8/10",
      url: "https://www.imdb.com/title/tt1910272/?ref_=nv_sr_srsg_0"
    },
    {
      name: "Code Geass",
      rating: "9/10",
      url: "https://www.imdb.com/title/tt0994314/?ref_=nv_sr_srsg_0"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Shonen");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📺Good Animes </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite animes. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>
                {" "}
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={anime.url}
                >
                  {anime.name}
                </a>{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {anime.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
