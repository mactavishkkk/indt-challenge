import React, { useState } from 'react';

const Home = () => {
    const users = [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', status: true, isAdmin: false, createdAt: '1995-05-15', updatedAt: '1995-05-15' },
        { id: 2, firstName: 'John', lastName: 'Doe', email: 'john@example.com', status: true, isAdmin: false, createdAt: '1995-05-15', updatedAt: '1995-05-15' },
        { id: 3, firstName: 'John', lastName: 'Doe', email: 'john@example.com', status: true, isAdmin: false, createdAt: '1995-05-15', updatedAt: '1995-05-15' },
    ];

    return (
        <div class="m-5">
            <h1>Home</h1>
            <p>
                <a class="btn btn-secondary" href={`/create`}>Criar novo usuário</a>
            </p>
            <table class="table table-striped table-hover">
                <thead>
                    <tr class="bg-gradient">
                        <th>
                            Código
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Ativo
                        </th>
                        <th>
                            Admin
                        </th>
                        <th>
                            Criado em
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.status ? 'Ativo' : 'Desativo'}</td>
                            <td>{user.isAdmin ? 'Administrador' : 'Comum'}</td>
                            <td>{user.createdAt}</td>
                            <td>
                                <a href={`/edit/${user.id}`} className="btn btn-primary me-1">Editar</a>
                                <a href={`/details/${user.id}`} className="btn btn-info me-1">Sobre</a>
                                <a href={`/delete/${user.id}`} className="btn btn-danger me-1">Deletar</a>
                                <a href={`/delete/${user.id}`} className="btn btn-danger">Desativar</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;