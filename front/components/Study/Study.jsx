import { useContext } from 'preact/hooks';
import { Container } from 'semantic-ui-react';
import Dropdown from '../Dropdown/Dropdown.jsx';

import { APIContext } from '../API/APIContext.jsx';

const Study = () => {
  const API = useContext(APIContext);

  return (
    <Container>
      <h3>Study</h3>
      <Dropdown verbs={API.verbs} />
    </Container>
  );
};

export default Study;
