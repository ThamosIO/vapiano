import {
  Dropdown as SemanticDropdown,
  Container,
  Label,
} from 'semantic-ui-react';
import styled from 'styled-components';

const DropContainer = styled.div`
  margin-bottom: 1rem;
`;

const Dropdown = ({ verbs, tenses, onVerbChange, onFilterChange }) => (
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
