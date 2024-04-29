import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Charts = () => {
    const navigate = useNavigate();

    const cookies = new Cookies();
    const token = cookies.get('token');

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, []);

    return (
        <div className="m-5">
            <h1>Gráficos</h1>

            <p>
                <a className="btn btn-secondary" href={`/home`}>Página Inicial</a>
            </p>
        </div>
    );
};

export default Charts;
