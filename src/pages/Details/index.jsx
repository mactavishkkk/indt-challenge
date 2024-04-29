import React, { useState } from 'react';

const Details = () => {

    return (
        <div class="m-5">
            <h1>Detalhes</h1>
            <p>
                <a class="btn btn-secondary" href={`/home`}>Voltar</a>
            </p>
            <div>
                <h4>Vendedor</h4>
                <hr />
                <dl class="dl-horizontal">
                    <dt>
                        Nome
                    </dt>
                    <dd>
                        .
                    </dd>
                    <dt>
                        Email
                    </dt>
                    <dd>
                        .
                    </dd>
                    <dt>
                        Status
                    </dt>
                    <dd>
                        .
                    </dd>
                    <dt>
                        Admin
                    </dt>
                    <dd>
                        .
                    </dd>
                    <dt>
                        Criado em
                    </dt>
                    <dd>
                        .
                    </dd>
                </dl>

                <form>
                    <a class="btn btn-dark">Editar registro</a>
                </form>
            </div>

        </div>
    );
};

export default Details;