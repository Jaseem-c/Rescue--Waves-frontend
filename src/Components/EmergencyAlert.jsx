import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Badge } from 'react-bootstrap';
import { FaExclamationTriangle, FaCloudSun, FaCloudShowersHeavy, FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function EmergencyAlert() {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertIcon, setAlertIcon] = useState(null);
  const [issuedBy, setIssuedBy] = useState('');

  // Define background colors for each alert type
  const backgroundColors = {
    danger: '#f8d7da',  // Light red for severe alerts
    warning: '#fff3cd', // Light yellow for warnings
    success: '#d4edda', // Light green for clear weather
    secondary: '#e2e3e5' // Light gray for default or unclear conditions
  };
  const fetchWeatherAndSetAlert = async () => {
    try {
      // Fetch the user's approximate location based on IP- ipapi (based on public ip adress)
      const locationResponse = await axios.get('https://ipapi.co/json/');
      console.log(locationResponse.data.city);
      
        const { city } = locationResponse.data;
      // Fetch weather data
      const weatherResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: "kakkanad", // Replace with dynamic location if needed
          appid: '658cb1112b27dbb1c69daf1a1e5ea151'
        }
      });

      const weatherData = weatherResponse.data;
      const weatherDescription = weatherData.weather[0].description;
      const mainWeather = weatherData.weather[0].main;

      // Define flood-related alert messages and icons
      let alertMessage = '';
      let alertType = '';
      let alertIcon = null;
      if (mainWeather === 'Thunderstorm' || weatherDescription.includes('flood')) {
        alertMessage = 'Flood Alert: Severe flooding conditions are expected. Avoid low-lying areas and move to higher ground immediately!';
        alertType = 'danger';
        alertIcon = <FaExclamationTriangle size={50} />;
      } else if (mainWeather === 'Rain' || weatherDescription.includes('rain')) {
        alertMessage = 'Flood Warning: Heavy rainfall is expected. Be prepared for possible flooding and monitor local advisories.';
        alertType = 'warning';
        alertIcon = <FaCloudShowersHeavy size={50} />;
      } else if (weatherDescription.includes('clear')) {
        alertMessage = 'The weather is clear. No flood alerts at the moment.';
        alertType = 'success';
        alertIcon = <FaCheckCircle size={50} />;
      } else if (weatherDescription.includes('clouds')) {
        alertMessage = 'The weather is mostly cloudy. No severe flood alerts at this time.';
        alertType = 'secondary';
        alertIcon = <FaCloudSun size={50} />;
      } else {
        alertMessage = `Weather Update: ${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}. Stay informed and follow local guidelines.`;
        alertType = 'secondary';
        alertIcon = <FaCloudSun size={50} />;
      }

      setAlertMessage(alertMessage);
      setAlertType(alertType);
      setAlertIcon(alertIcon);
      setIssuedBy('Flood Relief Service');
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      setAlertMessage('Failed to fetch weather data.');
      setAlertType('secondary');
      setAlertIcon(<FaCloudSun size={50} />);
      setIssuedBy('');
    }
  };
  useEffect(() => {
    fetchWeatherAndSetAlert();
  }, []);
  return (
    <Card className='border-0 shadow rounded-3' style={{ backgroundColor: backgroundColors[alertType] }}>
    <Card.Body className='text-center'>
      <div className='mb-3'>
        {alertIcon}
      </div>
      <Card.Title>
        <h3>Flood Emergency Alert</h3>
      </Card.Title>
      <Badge bg={alertType} className='mb-3'>
        {alertType.charAt(0).toUpperCase() + alertType.slice(1)}
      </Badge>
      <Card.Text>
        {alertMessage}
      </Card.Text>
      {issuedBy && (
        <Card.Footer className='text-muted'>
          Issued by: {issuedBy}
        </Card.Footer>
      )}
    </Card.Body>
  </Card>
  )
}

export default EmergencyAlert