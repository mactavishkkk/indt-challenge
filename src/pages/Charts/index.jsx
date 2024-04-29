import React, { useEffect } from 'react';
import DrawerChart from '../../components/DrawerChart';

const Charts = () => {
    return (
        <div className="m-5">
            <h1>Gráficos</h1>
            <p>
                <a className="btn btn-secondary" href={`/home`}>Página Inicial</a>
            </p>
            <div>
                <h2>Relação de status de usuários</h2>
                <DrawerChart />
            </div>
        </div>
    );
};

export default Charts;
