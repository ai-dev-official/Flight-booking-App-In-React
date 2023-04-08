import React from 'react';
import { useState } from 'react';
import './search.css';
import BedIcon from '../assets/bed.svg';
import FlightIcon from '../assets/flight.svg';
import FlightIconWhite from '../assets/flightwhite.svg';
import CarIcon from '../assets/car.svg';
import CarIconWhite from '../assets/carwhite.svg';
import SearchIcon from '../assets/searchwhite.svg';
import BedIconWhite from '../assets/bedwhite.svg';
import LandingFlight from '../assets/landing.svg';
// import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';




const Search = () => {

  const [opnDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  const [active, setActive] = useState('flight');
  const handleActive = (event) => {
    setActive(event.target.id);
  }

  const [passenger, setPassenger] = useState({count: 0, rooms: 0});
  const handlePassengerCount = (adultCount, childrenCount, roomCount) => {
    setOptions({ adult: adultCount, children: childrenCount, room: roomCount });
    const passengerCount = adultCount + childrenCount;
    const numRooms = roomCount;
    setPassenger({count: passengerCount, rooms: numRooms});
  }


  const [selectedOption, setSelectedOption] = useState('Economy');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1, 
    children: 0,
    room: 1,
  });

  const handleOption = (optionName, operation) => {
    setOptions(prev=>{return {
      ...prev, [optionName] : operation === "i" ? options[optionName] + 1 : options[optionName] - 1,
    };
  });
  };



  return (
    <div className="main">
      <div className="search__box">
        <div className="selectBox">
          <div id="flight" className={`flight flightbox ${active === 'flight' ? 'active' : ''}`} onClick={handleActive}>
            <img src={active === 'flight' ? FlightIconWhite : FlightIcon} alt="Flight" />
            <span>Flight</span>
          </div>
          <div id="hotel" className={`hotel flightbox ${active === 'hotel' ? 'active' : ''}`} onClick={handleActive}>
            <img src={active === 'hotel' ? BedIconWhite : BedIcon} alt="Bed" />
            <span>Flight + Hotel</span>
          </div>
          <div id="car" className={`car flightbox ${active === 'car' ? 'active' : ''}`} onClick={handleActive}>
            <img src={active === 'car' ? CarIconWhite : CarIcon} alt="Car" />
            <span>Flight + Car</span>
          </div>
        </div>
        <div className="searchSelect">
          <div className="searchText">
            <span><a href="#">Flight + Hotel</a></span>
            <span><a href="#">Hotel only</a></span>
            <span><a href="#">Create custom trip</a></span>
          </div>
          <div className="searchBoxes">
            <div className="search__boxes fromTo">
            
              <div className='takeoff'>
                <span className='whereto'><img src={FlightIcon} alt="Flight" /></span>
                <div className="from">
                  <label htmlFor="from">From</label>
                  <input type="text" id="from" className="second" placeholder="New York" onFocus={(event) => { event.target.placeholder = '' }} />
                </div>
              </div>
              <div className="landing">
                <span className='whereto'><img src={LandingFlight} alt="Flight" /></span>
                <div className="to">
                  <label htmlFor="to">To</label>
                  <input type="text" id="to" className="second" placeholder="Dubai" onFocus={(event) => { event.target.placeholder = '' }} />
                </div>
              </div>
            </div>

            <div className="search__boxes outbound">
              <span className='fligtDate'>Outbound</span>
              <span onMouseUp={() => { setOpenDate(!opnDate) }} className="num">{`${format(date[0].startDate, "dd")}`}</span>
              <span>{`${format(date[0].startDate, "MMMM")}`}</span>
             
            </div>
            <div className="search__boxes return">
              <span className='fligtDate'>Return Flight</span>
              <span onMouseUp={() => {setOpenDate(!opnDate)}} className="num">{`${format(date[0].endDate, "dd")}`}</span>
              <span>{`${format(date[0].startDate, "MMMM")}`}</span>
            
            </div>
            <div className="search__boxes roomsFlight">
              <div className="rooms">
                <span><img src={BedIcon} alt="" /></span>
                <div className="roomType">
                  <span className="topspan">From</span>
                  {/* <span className="second">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span> */}
                  <span onClick={()=>setOpenOptions(!openOptions)} className="bottomspan">
                    {passenger.count} Persons {passenger.rooms} Room
                  </span>
                  {openOptions && <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                     <div className="optionCount">
                        <button disabled={options.adult < 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>–</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                     </div>
                      
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                     <div className="optionCount">
                        <button disabled={options.children < 1} className="optionCounterButton" onClick={()=> handleOption("children", "d")}>–</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                     </div>

                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                     <div className="optionCount">
                        <button disabled={options.room < 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>–</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                     </div>
                    </div>
                    <button id="calcPassenger" onClick={() => handlePassengerCount(options.adult, options.children, options.room)}>Total Passengers</button>
                  </div>}
                </div>
              </div>
              <div className="flightclass">
                <span><img src={FlightIcon} alt="Flight" /></span>
                <div className="travelClass">
                  <span className="topspan">Travel Class</span>
                  <span className="bottomspan">Economy</span>
                </div>
              </div>
            </div>
            <div className="search__boxes searchIcon">
              <img src={SearchIcon} alt="search" />
            </div>
          </div>
        </div>
        {opnDate && (
          <div className="modal">
            <div className="modal__content">
            
              <DateRangePicker
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={date}
                className="date"
                direction="horizontal"
              />
              <button className="modal__close__button" onClick={() => setOpenDate(false)}>×</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search