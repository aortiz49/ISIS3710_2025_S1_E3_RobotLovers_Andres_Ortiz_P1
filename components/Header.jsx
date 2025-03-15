import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ justifyItems: 'center' }}>
                <h1 style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                    {t('header.title')}
                </h1>
                <hr
                    style={{ textShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)' }}
                ></hr>
                <img src={'assets/banner.png'} alt='Robot Lovers banner' />
                <hr
                    style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                ></hr>
            </div>
        </>
    );
}
