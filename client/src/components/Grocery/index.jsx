// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
import { IngredientCard,RecipeCard } from './card';
// import Auth from '../../utils/auth';

const Grocery = () => {
    return (
        <div>
            <h1 className = "bg-green">ingredient card template</h1>
            {/* < IngredientCard /> */}

            <h1>Recipe Card Template</h1>
            <RecipeCard />
        </div>
    )
}

export default Grocery