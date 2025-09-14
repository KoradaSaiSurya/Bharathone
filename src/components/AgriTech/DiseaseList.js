import React, { useEffect, useState } from 'react';
import API from '../../utils/api';
import DiseaseCard from './DiseaseCard';

const DiseaseList = () => {
  const [diseases, setDiseases] = useState([]);

  const fetchDiseases = async () => {
    try {
      const res = await API.get('/diagnose'); // backend route
      setDiseases(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDiseases();
  }, []);

  return (
    <div className="disease-list">
      {diseases.length === 0 ? (
        <p>No diseases found</p>
      ) : (
        diseases.map(d => <DiseaseCard key={d._id} disease={d} />)
      )}
    </div>
  );
};

export default DiseaseList;
