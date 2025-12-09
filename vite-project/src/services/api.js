const API_BASE_URL = 'http://localhost:5099/api';

export const loginAPI = async (email, userCode, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Login/LoginProcess`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        UserCode: userCode,
        Password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login API error:', error);
    throw error;
  }
};

export const getVersionAPI = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Mobile/GetVersion`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('GetVersion API error:', error);
    throw error;
  }
};

