import { useContext, useState } from 'preact/hooks';
import { Container } from 'semantic-ui-react';
import Dropdown from '../Dropdown/Dropdown.jsx';

import { APIContext, API_URL } from '../API/APIContext.jsx';

function withVerb(WrappedComponent, title) {
  return () => {
    const [verb, setVerb] = useState(null);
    const [filters, setFilters] = useState([]);
  
    const API = useContext(APIContext);
    const { verbs } = API;
  
    const onVerbChange = async (e, { value }) => {
      const found = verbs.find((v) => v.verb === value);
  
      const response = await fetch(`${API_URL}/verbs/${found._id}`);
      const res = await response.json();
  
      setVerb(res);
    };
  
    const tenses = verb?.tenses.map(({ tense }) => ({
      key: tense,
      value: tense,
      text: tense,
    }));
  
    const onFilterChange = (e, { value }) => {
      setFilters(value);
    };
  
    return (
      <Container>
        <h3>{title}</h3>
        <Dropdown
          verbs={verbs}
          tenses={tenses}
          onVerbChange={onVerbChange}
          onFilterChange={onFilterChange}
        />
        {verb && (
          <WrappedComponent
            tenses={
              !filters.length
                ? verb.tenses
                : verb.tenses.filter(({ tense }) => filters.indexOf(tense) !== -1)
            }
          ></WrappedComponent>
        )}
      </Container>
    );
  };
}

export default withVerb;