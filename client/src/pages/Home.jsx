import React from 'react';
import { useQuery } from '@apollo/client';

import Grocery from '../components/Recipe'

const Home = () => {
    // const { loading, data } = useQuery();

    return (
        <main>
            <div>
                <div>
                    <h1>placeholder</h1>
                    <Grocery />
                </div>
            </div>
        </main>
    );
};

export default Home;