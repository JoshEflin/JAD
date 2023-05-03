import React from "react";
import find from "../../utils/API"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Recipe = () => {
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setSearch(`You are looking for ${search}`);
      };

    const getRecipe = (query) =>
    find(query)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
    return (
            <card >
                <form onSubmit={handleSubmit}>
                <input
                className="query"
            type="text"
            value={search}
            onChange={this.handleChange}
         />              
            <button
            type="submit"
              onClick={getRecipe({search})}
            />
            </form>
              <p>Your recipes here!</p>
          </card>

            
    )
}

export default Recipe