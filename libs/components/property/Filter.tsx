import { useState } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, TextField, Button, Select, MenuItem, InputAdornment } from '@mui/material';
import { Refresh, Search } from '@mui/icons-material';


const Filter = () => {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    rooms: 'Any',
    bedrooms: 'Any',
    buyOrRent: 'Rent',
    squareMeterMin: 0,
    squareMeterMax: 500,
    yearBuiltStart: 1970,
    yearBuiltEnd: 2024,
    priceRange: 2000000,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Filters:', filters);
    
  };

  return (
    <div className={'filter-container'}>
      <h2>Find your home</h2>
       <div className='search-container'>
       <FormControl className="search">
        <TextField
          size="small"
          variant="outlined"
          placeholder='what are you looking for'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
           
          }}
        />
      </FormControl>
     
        <Refresh sx={{color: "#333"}}  />
      </div>
     <div className={'filter-group'}>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <RadioGroup
            name="location"
            value={filters.location}
            onChange={handleInputChange}
          >
            <FormControlLabel value="Seoul" control={<Radio />} label="Seoul" />
            <FormControlLabel value="BUSAN" control={<Radio />} label="BUSAN" />
            <FormControlLabel value="DAEGU" control={<Radio />} label="DAEGU" />
          </RadioGroup>
        </FormControl>
      </div>

      {/* Property Type */}
      <div className={'filter-group'}>
        <FormControl>
          <FormLabel>Property Type</FormLabel>
          <RadioGroup
            name="propertyType"
            value={filters.propertyType}
            onChange={handleInputChange}
          >
            <FormControlLabel value="Apartment" control={<Radio />} label="Apartment" />
            <FormControlLabel value="Villa" control={<Radio />} label="Villa" />
            <FormControlLabel value="House" control={<Radio />} label="House" />
          </RadioGroup>
        </FormControl>
      </div>

      
      <div className={'filter-group-rooms'}>
        <FormControl>
        <FormLabel  component="legend">Rooms</FormLabel>
          <RadioGroup
           row
           name="rooms"
           style={{paddingTop: "10px"}}
           value={filters.rooms}
           onChange={handleInputChange}
         >
           <FormControlLabel sx={{borderRadius: "7px", borderEndEndRadius:"0px", borderTopRightRadius:"0px"}} value="Any" control={<Radio />} label="Any" />
           <FormControlLabel value="1" control={<Radio />} label="1" />
           <FormControlLabel value="2" control={<Radio />} label="2" />
           <FormControlLabel value="3" control={<Radio />} label="3" />
           <FormControlLabel value="4" control={<Radio />} label="4" />
           <FormControlLabel sx={{borderRadius: "7px", borderStartStartRadius:"0px", borderTopLeftRadius:"0px"}}   value="5+" control={<Radio />} label="5+" />
         </RadioGroup>
               </FormControl>
             </div>
      <div className={'filter-group-bedrooms'}>
        <FormControl>
        <FormLabel component="legend">badrooms</FormLabel>
          <RadioGroup
           row
           name="bedrooms"
           style={{paddingTop: "10px"}}
           value={filters.bedrooms}
           onChange={handleInputChange}
         >
           <FormControlLabel sx={{borderRadius: "7px", borderEndEndRadius:"0px", borderTopRightRadius:"0px"}} value="Any" control={<Radio />} label="Any" />
           <FormControlLabel value="1" control={<Radio />} label="1" />
           <FormControlLabel value="2" control={<Radio />} label="2" />
           <FormControlLabel value="3" control={<Radio />} label="3" />
           <FormControlLabel value="4" control={<Radio />} label="4" />
           <FormControlLabel sx={{borderRadius: "7px", borderStartStartRadius:"0px", borderTopLeftRadius:"0px"}}   value="5+" control={<Radio />} label="5+" />
         </RadioGroup>
               </FormControl>
             </div>
     
      <div className={'filter-group'}>
        <FormControl>
          <FormLabel>Option</FormLabel>
          <RadioGroup
            style={{paddingTop: "10px"}}
            name="buyOrRent"
            value={filters.buyOrRent}
            onChange={handleInputChange}
          >
            <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
            <FormControlLabel value="Rent" control={<Radio />} label="Rent" />
          </RadioGroup>
        </FormControl>
      </div>

     
      <div className={'filter-group'}>
        <FormControl>
          <FormLabel>Square Meter</FormLabel>
          <div style={{paddingTop: "10px"}} className={'range-inputs'}>
            <TextField
            
              type="number"
              label="Min"
              name="squareMeterMin"
              value={filters.squareMeterMin}
              onChange={handleInputChange}
            />
            <TextField
              type="number"
              label="Max"
              name="squareMeterMax"
              value={filters.squareMeterMax}
              onChange={handleInputChange}
            />
          </div>
        </FormControl>
      </div>

      
      <div className={'filter-group'}>
        <FormControl>
          <FormLabel>Year Built</FormLabel>
          <div style={{paddingTop: "10px"}} className={'range-inputs'}>
            <TextField
              type="number"
              label="Start"
              name="yearBuiltStart"
              value={filters.yearBuiltStart}
              onChange={handleInputChange}
            />
            <TextField
              type="number"
              label="End"
              name="yearBuiltEnd"
              value={filters.yearBuiltEnd}
              onChange={handleInputChange}
            />
          </div>
        </FormControl>
      </div>

     
      <div  className={'filter-group'}>
          <FormLabel>Price Range</FormLabel>
          <FormControl style={{paddingTop: "10px"}} >
          <TextField
            type="number"
            label="Max Price"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleInputChange}
          />
        </FormControl>
      </div>

      
     
    </div>
  );
};

export default Filter;
