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

    // Try to parse response even if status is not OK
    let data;
    try {
      const responseText = await response.text();
      if (responseText) {
        data = JSON.parse(responseText);
      }
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
    }

    // If response is not OK and we have error data, throw with the data
    if (!response.ok) {
      const error = new Error(data?.ResponseDescription || data?.message || `HTTP error! status: ${response.status}`);
      error.response = response;
      error.data = data;
      throw error;
    }

    // Return the data (which may contain ResponseCode and ResponseDescription)
    return data || {};
  } catch (error) {
    console.error('Login API error:', error);
    
    // If it's a network error, throw a user-friendly message
    if (error.message === 'Failed to fetch' || error.message.includes('NetworkError') || error.name === 'TypeError') {
      throw new Error('Unable to connect to the server. Please make sure the API is running on http://localhost:5099');
    }
    
    // If we have response data with ResponseDescription, preserve it
    if (error.data) {
      const enhancedError = new Error(error.data.ResponseDescription || error.data.responseDescription || error.message);
      enhancedError.data = error.data;
      throw enhancedError;
    }
    
    throw error;
  }
};

export const getVersionAPI = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Login/GetVersion`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // GetVersion returns a string directly (Ok(version) in C#)
    // Read as text first
    const textData = await response.text();
    if (textData) {
      // Remove quotes if JSON serialized and trim
      let cleanVersion = textData.trim();
      cleanVersion = cleanVersion.replace(/^["']|["']$/g, '');
      console.log('GetVersion API response:', cleanVersion);
      return cleanVersion;
    }
    return '1.0';
  } catch (error) {
    console.error('GetVersion API error:', error);
    throw error;
  }
};

export const changePasswordAPI = async (email, userCode, oldPassword, newPassword) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Login/ChangePassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        UserCode: userCode,
        OldPassword: oldPassword,
        NewPassword: newPassword,
      }),
    });

    // Try to parse response even if status is not OK
    let data;
    try {
      const responseText = await response.text();
      if (responseText) {
        data = JSON.parse(responseText);
      }
    } catch (parseError) {
      console.error('Failed to parse response:', parseError);
    }

    // If response is not OK and we have error data, throw with the data
    if (!response.ok) {
      const error = new Error(data?.ResponseDescription || data?.message || `HTTP error! status: ${response.status}`);
      error.response = response;
      error.data = data;
      throw error;
    }

    // Return the data (which may contain ResponseCode and ResponseDescription)
    return data || {};
  } catch (error) {
    console.error('ChangePassword API error:', error);
    
    // If it's a network error, throw a user-friendly message
    if (error.message === 'Failed to fetch' || error.message.includes('NetworkError') || error.name === 'TypeError') {
      throw new Error('Unable to connect to the server. Please make sure the API is running on http://localhost:5099');
    }
    
    // If we have response data with ResponseDescription, preserve it
    if (error.data) {
      const enhancedError = new Error(error.data.ResponseDescription || error.data.responseDescription || error.message);
      enhancedError.data = error.data;
      throw enhancedError;
    }
    
    throw error;
  }
};

