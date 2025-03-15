import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div style={{ padding: '24px' }}>
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value='es'>Español</option>
                <option value='en'>English</option>
            </select>
        </div>
    );
}
