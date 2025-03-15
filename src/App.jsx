import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Login } from '../components/Login';

import './App.css';
import { useEffect, useState } from 'react';
import { Table } from '../components/Table';
import { RobotProfile } from '../components/RobotProfile';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import './i18n';

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [robots, setRobots] = useState([]);
    const [currentRobotId, setCurrentRobotId] = useState();
    const [robot, setRobot] = useState(undefined);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (!currentRobotId) return;

        const getRobot = async () => {
            const robotData = await fetchData(
                `http://localhost:3001/robots/${currentRobotId}`
            );
            setRobot(robotData);
        };

        getRobot();
    }, [currentRobotId]);

    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <div>
                <LanguageSwitcher />
                <Header />
                {!authenticated ? (
                    <Login
                        onLoginSuccess={async (data) => {
                            setAuthenticated(data);
                            try {
                                const robotData = await fetchData(
                                    'http://localhost:3001/robots'
                                );
                                setRobots(robotData);
                            } catch (error) {
                                console.error('Failed to fetch robots:', error);
                            }
                        }}
                    />
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            gap: '64px',
                        }}
                    >
                        <Table
                            robots={robots}
                            onRobotClick={(id) => setCurrentRobotId(id)}
                        />
                        {robot != undefined && <RobotProfile robot={robot} />}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
