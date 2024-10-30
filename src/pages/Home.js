import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [isFlightTypeOpen, setIsFlightTypeOpen] = useState(false);
  const [flightType, setFlightType] = useState('IDA Y VUELTA');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');
  const [isPassengerOpen, setIsPassengerOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState({ adultos: 0, niños: 0, bebes: 0 });

  const toggleFlightType = () => setIsFlightTypeOpen(!isFlightTypeOpen);
  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);
  const togglePassenger = () => setIsPassengerOpen(!isPassengerOpen);

  const handleHome = () => navigate('/');
  const handlfacturacion = () => navigate('/facturacion');
  const handlgestionar = () => navigate('/gestionar');
  const handlinformacion = () => navigate('/informacion');

  const selectFlightType = (type) => {
    setFlightType(type);
    setIsFlightTypeOpen(false);

    setSelectedDepartureDate('');
    setSelectedReturnDate('');
  };

  const handlePassengerChange = (type, operation) => {
    setPassengerCount((prev) => {
      const newCount = { ...prev };
      if (operation === 'increment') newCount[type] += 1;
      else if (operation === 'decrement' && newCount[type] > 0) newCount[type] -= 1;
      return newCount;
    });
  };
  const closeCalendar = () => setIsCalendarOpen(false);

  return (
    <div className="home">
      <header className="navbar">
        <div className="navbar-logo" onClick={handleHome}>MEXICANA</div>
        <nav className="navbar-links">
          <a onClick={handlfacturacion}>Facturación</a>
          <a onClick={handlgestionar}>Gestionar reserva</a>
          <a onClick={handlinformacion}>Información del Viaje</a>
        </nav>
        <button className="login-button">CHECK-IN</button>
      </header>

      <div className="hero">

        {/* Botón de selección de vuelo */}
        <div className="flight-selection" onClick={() => setIsFlightTypeOpen(true)}>
          <p className="label">VUELO</p>
          <p>{flightType}</p>
          {isFlightTypeOpen && (
            <div className="dropdown" onClick={(e) => e.stopPropagation()}>
              <p onClick={() => selectFlightType('IDA')}>IDA</p>
              <p onClick={() => selectFlightType('IDA Y VUELTA')}>IDA Y VUELTA</p>
              <div className="input-fields">
                <input
                  type="text"
                  placeholder="Origen"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Selección de fechas */}
        <div className="date-selection" onClick={() => setIsCalendarOpen(true)}>
          <p className="label">SELECCIONAR</p>
          <p>{flightType === 'Ida Y Vuelta' 
                ? (selectedDepartureDate && selectedReturnDate 
                  ? `IDA: ${selectedDepartureDate} - VUELTA: ${selectedReturnDate}`
                  : 'FECHAS DE VIAJE')
                : (selectedDepartureDate || 'FECHA DE IDA')}
          </p>
          {isCalendarOpen && (
            <div className="calendar-dropdown" onClick={(e) => e.stopPropagation()}>
              <label>Fecha de IDA       </label>
              <input
                type="date"
                value={selectedDepartureDate}
                onChange={(e) => setSelectedDepartureDate(e.target.value)}
              />
              {flightType === 'IDA Y VUELTA' && (
                <>
                  <label>Fecha de VUELTA</label>
                  <input
                    type="date"
                    value={selectedReturnDate}
                    onChange={(e) => setSelectedReturnDate(e.target.value)}
                  />
                </>
              )}
              <button onClick={closeCalendar}></button>
            </div>
          )}
        </div>

        {/* Selección de cantidad de pasajeros */}
        <div className="passenger-selection" onClick={() => setIsPassengerOpen(true)}>
          <p className="label">CANTIDAD DE PASAJEROS</p>
          <p>{passengerCount.adultos + passengerCount.niños + passengerCount.bebes} Turistas</p>
          {isPassengerOpen && (
            <div className="passenger-dropdown" onClick={(e) => e.stopPropagation()}>
              <div>
                <p>Adultos</p>
                <button onClick={() => handlePassengerChange('adultos', 'decrement')}>-</button>
                <span>{passengerCount.adultos}</span>
                <button onClick={() => handlePassengerChange('adultos', 'increment')}>+</button>
              </div>
              <div>
                <p>Niños</p>
                <button onClick={() => handlePassengerChange('niños', 'decrement')}>-</button>
                <span>{passengerCount.niños}</span>
                <button onClick={() => handlePassengerChange('niños', 'increment')}>+</button>
              </div>
              <div>
                <p>Bebés</p>
                <button onClick={() => handlePassengerChange('bebes', 'decrement')}>-</button>
                <span>{passengerCount.bebes}</span>
                <button onClick={() => handlePassengerChange('bebes', 'increment')}>+</button>
              </div>
              <button onClick={() => setIsPassengerOpen(false)}>Cerrar</button>
            </div>
          )}
        </div>

        {/* Botón de búsqueda */}
        <button className="search-button">Buscar vuelos</button>
      </div>

      {/* Slider Section */}
      <section className="slider-section">
        <h2 className="slider-title">DESCUBRA LAS MARAVILLAS DE MÉXICO</h2>
        <div className="slider">
          <div className="slide">
            <img src="/Cancun.jpg" alt="Cancún" />
            <div className="image-caption">Cancún</div>
          </div>
          <div className="slide">
            <img src="/Los Cabos.jpg" alt="Los Cabos" />
            <div className="image-caption">Los Cabos</div>
          </div>
          <div className="slide">
            <img src="/Tulum.jpg" alt="Tulum" />
            <div className="image-caption">Tulum</div>
          </div>
          <div className="slide">
            <img src="/Puerto_Vallarta.png" alt="Puerto Vallarta" />
            <div className="image-caption">Puerto Vallarta</div>
          </div>
          <div className="slide">
            <img src="/Puerto_Escondido.jpg" alt="Puerto Escondido" />
            <div className="image-caption">Puerto Escondido</div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2 className="video-title">EXPLORA MÉXICO DESDE EL AIRE</h2>
        <video autoPlay muted loop className="promo-video">
          <source src="/Video_Mexico.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
}

export default Home;
