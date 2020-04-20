import { Dropdown as SemanticDropdown, Container } from 'semantic-ui-react';
import { useState } from 'preact/hooks';

import { API_URL } from '../API/APIContext.jsx';
import Verb from '../Verb/Verb.jsx';

const Dropdown = ({ verbs }) => {
  const [verb, setVerb] = useState(null);

  const onChange = async (e, { value }) => {
    const found = verbs.find((v) => v.verb === value);

    const response = await fetch(`${API_URL}/verbs/${found._id}`);
    const res = await response.json();

    setVerb(res);
  };

  return (
    <Container fluid>
      <SemanticDropdown
        placeholder="Verbs"
        search
        selection
        options={(verbs || []).map(({ _id: id, verb }) => ({
          key: id,
          text: verb,
          value: verb,
        }))}
        onChange={onChange}
      />
      {verb && <Verb verb={verb}></Verb>}
    </Container>
  );
};

export default Dropdown;
