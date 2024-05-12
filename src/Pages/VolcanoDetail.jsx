import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VolcanoDetail = () => {
  const [volcano, setVolcano] = useState(null);
  const { id } = useParams(); // Get the volcano ID from URL parameter

  useEffect(() => {
    const fetchVolcano = async () => {
      try {
        const response = await fetch(`http://4.237.58.241:3000/volcano/${id}`);
        if (!response.ok) throw new Error("Failed to fetch volcano details");
        const data = await response.json();
        setVolcano(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVolcano();
  }, [id]);

  return (
    <div>
      <h1>Volcano Details</h1>
      {volcano && (
        <>
          <p>Name: {volcano.name}</p>
          <p>Country: {volcano.country}</p>
          <p>Region: {volcano.region}</p>
          <p>Subregion: {volcano.subregion}</p>
          <p>Last Eruption: {volcano.lastEruption}</p>
          <p>Summit: {volcano.summit}</p>
          <p>Elevation: {volcano.elevation}</p>
        </>
      )}
    </div>
  );
};

export default VolcanoDetail;
