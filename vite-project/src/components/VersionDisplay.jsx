import { useState, useEffect } from 'react';
import { getVersionAPI } from '../services/api';
import './VersionDisplay.css';

const VersionDisplay = () => {
  const [version, setVersion] = useState('1.0');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await getVersionAPI();
        if (response?.Data?.version) {
          setVersion(response.Data.version);
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
    <div className="version-display">
      {loading ? (
        <span className="version-text">Version 1.0</span>
      ) : (
        <span className="version-text">Version {version}</span>
      )}
    </div>
  );
};

export default VersionDisplay;

