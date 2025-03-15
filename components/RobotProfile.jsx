import { useTranslation } from 'react-i18next';

export function RobotProfile({ robot }) {
    const { t } = useTranslation();

    const getRawGitHubUrl = (url) => {
        return url
            ?.replace('github.com', 'raw.githubusercontent.com')
            .replace('/blob', '');
    };

    return (
        <div
            style={{
                justifyItems: 'center',
                backgroundColor: '#D9D9D980',
                width: '50%',
            }}
        >
            <h4 style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                {robot?.nombre}
            </h4>
            <img
                src={getRawGitHubUrl(robot?.imagen)}
                alt='Robot Lovers profile pic'
                style={{ maxWidth: '200px' }}
            />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '100%',
                    paddingLeft: '16px',
                    flexDirection: 'column',
                }}
            >
                <p style={{ marginBottom: 0 }}>
                    <span>&#8594;</span>
                    {t('robotProfile.manufactureDate')}: {robot?.añoFabricacion}
                </p>
                <p style={{ marginBottom: 0 }}>
                    <span>&#8594;</span>
                    {t('robotProfile.processingPower')}:
                    {robot?.capacidadProcesamiento}
                </p>
                <p
                    style={{
                        marginBottom: 0,
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        maxWidth: '100%',
                        whiteSpace: 'pre-wrap',
                        width: '500px',
                    }}
                >
                    <span>&#8594;</span>
                    Humor: {robot?.humor}
                </p>
            </div>
        </div>
    );
}
