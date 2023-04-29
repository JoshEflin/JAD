import React from 'react';
import { useQuery } from '@apollo/client';

import Grocery from '../components/Grocery'

const Home = () => {
    // const { loading, data } = useQuery();

    return (
        <main>
            <div>
                <div>
                    <Grocery />
                </div>
            </div>
        </main>
    );
};

export default Home;