import { useState, useEffect } from 'react';
import './DashboardFooter.css';

const API_BASE_URL = 'http://localhost:5099/api';

const DashboardFooter = () => {
  const [version, setVersion] = useState('1.0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/Login/GetVersion`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data?.Data?.version) {
            setVersion(data.Data.version);
          }
        }
      } catch (error) {
        console.error('Failed to fetch version:', error);
        // Keep default version on error
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  return (
    <footer className="dashboard-footer">
      <div className="footer-left">
        <span className="footer-version">Version {version}</span>
      </div>
      <div className="footer-right">
        <span className="footer-copyright">© 2025 gmeremit.com | All right reserved.</span>
      </div>
    </footer>
  );
};

export default DashboardFooter;

