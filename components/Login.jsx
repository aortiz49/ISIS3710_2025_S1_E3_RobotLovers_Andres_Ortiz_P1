import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';

export function Login({ onLoginSuccess }) {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: formData.username,
                password: formData.password,
            }),
        });

        const data = await response.json();
        if (data.status != 'success') {
            setError(true);
        } else {
            onLoginSuccess(true);
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setFormData({
            username: '',
            password: '',
        });
        setError(false);
    };

    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h2 className='text-center'>{t('login.title')}</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label fw-bold'>
                        {t('login.username')}
                    </label>
                    <input
                        style={{
                            backgroundColor: '##D9D9D9',
                            borderColor: error ? 'red' : '#dee2e6',
                        }}
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        className='form-control'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label fw-bold'>
                        {t('login.password')}
                    </label>
                    <input
                        style={{
                            backgroundColor: '##D9D9D9',
                            borderColor: error ? 'red' : '#dee2e6',
                        }}
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className='form-control'
                        required
                    />
                </div>
                <div style={{ display: 'flex', gap: '64px' }}>
                    <button
                        style={{
                            borderRadius: '4px',
                            backgroundColor: '#003B93',
                        }}
                        type='submit'
                        className='btn btn-primary w-100'
                    >
                        {t('login.login')}
                    </button>
                    <button
                        style={{ borderRadius: '4px' }}
                        onClick={handleCancel}
                        type='button'
                        className='btn btn-danger w-100'
                    >
                        {t('login.cancel')}
                    </button>
                </div>
                {error && (
                    <p className='pt-4 fw-bold' style={{ color: 'red' }}>
                        {t('login.errorMessage')}
                    </p>
                )}
            </form>
        </div>
    );
}
