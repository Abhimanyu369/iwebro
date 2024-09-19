"use client";
import React, { useState, useEffect } from "react";

interface FilterProps {
  filters: any;
}

const Filters: React.FC<FilterProps> = ({ filters }) => {
  const { airlines, arrivals, departures, durationRange, stops } =
    filters || {};

  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-bold mb-2">Airlines</h3>
        {Object.entries(airlines)?.map(([key, value]: any) => (
          <label key={key} className="block">
            <input
              type="checkbox"
              //   checked={selectedStars.includes(star)}
              //   onChange={() => handleStarChange(star)}
              className="mr-2"
            />
            {value}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-bold mb-2">Stops</h3>
        <div className="grid grid-cols-2 gap-2">
          {stops?.map((e: any) => (
            <label key={e} className="block">
              <input
                type="checkbox"
                // checked={selectedChains.includes(code)}
                // onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {e}
            </label>
          ))}
          {/* {departures &&
          Object.entries(hotelChains).map(([code, name]) => (
            <label key={code} className="block">
              <input
                type="checkbox"
                checked={selectedChains.includes(code)}
                onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {name}
            </label>
          ))} */}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Departures</h3>
        <div className="grid grid-cols-2 gap-2">
          {departures?.map((e: any) => (
            <label key={e} className="block">
              <input
                type="checkbox"
                // checked={selectedChains.includes(code)}
                // onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {new Date(e).toLocaleTimeString("en-US", { hour12: true })}
            </label>
          ))}
          {/* {departures &&
          Object.entries(hotelChains).map(([code, name]) => (
            <label key={code} className="block">
              <input
                type="checkbox"
                checked={selectedChains.includes(code)}
                onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {name}
            </label>
          ))} */}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2">Arrivals</h3>
        <div className="grid grid-cols-2 gap-2">
          {arrivals?.map((e: any) => (
            <label key={e} className="block">
              <input
                type="checkbox"
                // checked={selectedChains.includes(code)}
                // onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {new Date(e).toLocaleTimeString("en-US", { hour12: true })}
            </label>
          ))}
          {/* {departures &&
          Object.entries(hotelChains).map(([code, name]) => (
            <label key={code} className="block">
              <input
                type="checkbox"
                checked={selectedChains.includes(code)}
                onChange={() => handleChainChange(code)}
                className="mr-2"
              />
              {name}
            </label>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Filters;
