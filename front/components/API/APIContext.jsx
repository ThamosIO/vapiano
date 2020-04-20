import { createContext } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const APIContext = createContext();

export const API_URL = 'http://localhost:8080/api';

const fetchAPI = async (params, setData) => {
  const response = await fetch(params);
  const res = await response.json();

  setData(res);
};

function APIProvider({ children }) {
  const [verbs, setVerbs] = useState([]);

  useEffect(() => {
    if (!verbs.length) {
      fetchAPI(`${API_URL}/verbs`, setVerbs);
    }
  }, []);

  return (
    <APIContext.Provider value={{ verbs, setVerbs }}>
      {children}
    </APIContext.Provider>
  );
}

export { APIProvider, APIContext };
