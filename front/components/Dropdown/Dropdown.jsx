import {
  Button,
  Container,
  Dropdown as SemanticDropdown,
} from 'semantic-ui-react';
import styled from 'styled-components';

const DropContainer = styled.div`
  margin-bottom: 1rem;
`;

const RandomButton = styled(Button)`
  margin-left: 1rem !important;
`;

const Dropdown = ({
  verbs,
  tenses,
  onVerbChange,
  onFilterChange,
  randomize,
}) => (
  <Container>
    <DropContainer>
      <p>Choose a verb:</p>
      <SemanticDropdown
        placeholder="Verbs"
        search
        selection
        options={(verbs || []).map(({ _id: id, verb }) => ({
          key: id,
          text: verb,
          value: verb,
        }))}
        onChange={onVerbChange}
      />
      <RandomButton
        content="Random verb"
        compact
        icon="shuffle"
        labelPosition="right"
        onClick={randomize}
      />
    </DropContainer>
    <DropContainer>
      <p>Choose tenses:</p>
      <SemanticDropdown
        placeholder="Tenses"
        multiple
        selection
        fluid
        disabled={!tenses.length}
        options={tenses}
        onChange={onFilterChange}
      />
    </DropContainer>
  </Container>
);

Dropdown.defaultProps = {
  tenses: [],
};

export default Dropdown;
