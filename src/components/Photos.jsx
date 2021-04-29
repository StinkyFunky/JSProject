import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({

    accessKey: "bXaoO1S0aThLTL6iZU7zxAMy7T4PxTzD_PcNOFOS0N0",
});


export default function SearchPhotos() {

    const [query, setQuery] = useState(null);
    const [photo, setPhoto] = useState([]);

    const searchPhotos = async (value) => {

        value.preventDefault();

        unsplash.search.photos(query, Math.floor(Math.random() * 11), 100).then(toJson).then(json => {

            // console.log(json);
            setPhoto(json.results);
        });
    };

    return (
        <>
            <form className="form" onSubmit={searchPhotos}>
                <label className="label" htmlFor="query">
                    📷
                </label>
                <input type="text" name="query" className="input" placeholder={"Search for images"} value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="button"> Search </button>
            </form>

            <div className="card-list">
                {photo.map((photo) => (
                    <div className="card" key={photo.id}>
                        <img className="card-image" alt={photo.description} src={photo.urls.full} width="100%" height="100%"></img>
                    </div>
                ))}
            </div>
        </>
    );
}
