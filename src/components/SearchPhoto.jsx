import React, { useState } from 'react';
import Unsplash, { toJson } from "unsplash-js"

const unsplash = new Unsplash({
    accessKey: "Xpnmv03tU7d54Tqx2PpzHWNDGxOrRrKcKlE3_cKR6Gw"
})

export default function SearchPhoto() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    // console.log(query)
    const searchP = async (e) => {
        e.preventDefault();
        // console.log("submitting request")
            unsplash.search
            .photos(query)
            .then(toJson)
            .then((json) => {
                // console.log(json)
                setPics(json.results);
            });
    };
    console.log(query);
    return (
        <div>
            <form className="form" onSubmit={searchP}>
                <label htmlFor="query" className="label">
                    {""}
                </label>

                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Try "landscape" or "Tokyo"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {pics.map((pic) => pic.id)}
            </div>
        </div>
    )
}