import React, { useState } from 'react';
import BooleanInput from '../../components/BooleanInput';

const Create = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [status, setStatus] = useState(false);

    const [createdAt, setCreatedAt] = useState(Date.now());
    const [updatedAt, setUpdatedAt] = useState(Date.now());

    const handleStatusChange = (newValue) => {
        setStatus(newValue);
    };

    const handleAdminChange = (newValue) => {
        setIsAdmin(newValue);
    };

    return (
        <div className="m-5">
            <h1>Criar</h1>
            <p>
                <a className="btn btn-secondary" href="/home">Voltar</a>
            </p>

            <h4>Usuário</h4>
            <hr />

            <div className="col-8">
                <form action="Create" method="post">
                    <div className="text-danger"></div>
                    <div className="form-group">
                        <label htmlFor="Name" className="control-label">Nome</label>
                        <input type="text" id="Name" name="Name" className="form-control mb-3" placeholder='Nome' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="control-label">Sobrenome</label>
                        <input type="text" id="lastName" name="lastName" className="form-control mb-3" placeholder='Sobrenome' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email" className="control-label">Email</label>
                        <input type="email" id="Email" name="Email" className="form-control mb-3" placeholder='exemplo@gmail.com' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="control-label">Senha</label>
                        <input type="password" id="password" name="password" className="form-control mb-3" placeholder='******' />
                    </div>
                    <div className="form-group">
                        <BooleanInput
                            label="Desativado"
                            value={status}
                            onChange={handleStatusChange}
                        />
                    </div>
                    <div className="form-group">
                        <BooleanInput
                            label="Administrador"
                            value={isAdmin}
                            onChange={handleAdminChange}
                        />
                    </div>
                    <input type="hidden" name="createdAt" value={createdAt} />
                    <input type="hidden" name="updatedAt" value={updatedAt} />
                    <div className="form-group">
                        <input type="submit" value="Criar" className="btn btn-dark" style={{ marginTop: '10px' }} />
                    </div>
                </form>
            </div >
        </div>
    );
};

export default Create;