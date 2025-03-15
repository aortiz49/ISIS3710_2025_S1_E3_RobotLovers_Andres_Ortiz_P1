import { useTranslation } from 'react-i18next';

export function Table({ robots, onRobotClick }) {
    const { t } = useTranslation();

    return (
        <table id='results-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>{t('robotProfile.name')}</th>
                    <th>{t('robotProfile.model')}</th>
                    <th>{t('robotProfile.manufacturer')}</th>
                </tr>
            </thead>
            <tbody>
                {robots.map((robot) => (
                    <tr
                        key={robot.id}
                        onClick={() => onRobotClick(robot.id)}
                        style={{ cursor: 'pointer' }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = 'grey')
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = '')
                        }
                    >
                        <td>{robot.id}</td>
                        <td>{robot.nombre}</td>
                        <td>{robot.modelo}</td>
                        <td>{robot.empresaFabricante}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
