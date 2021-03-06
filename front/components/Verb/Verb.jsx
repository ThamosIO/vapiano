import { Table, Checkbox, TableCell } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { generateKey } from '../../helpers/generators';

const TensesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.layout &&
    css`
      flex-direction: column;
    `}
`;

const TenseContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  margin-bottom: 2rem;
  align-self: center;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.p`
  margin-right: 0.5rem;
`;

const Title = styled.h2`
  text-align: center;
`;

const Verb = ({ tenses, verb, translation }) => {
  const [layout, setLayout] = useState(true);
  const { t } = useTranslation();

  return (
    <>
      <ToggleContainer>
        <CheckboxLabel>{t('one_per_line')}</CheckboxLabel>
        <Checkbox checked={layout} toggle onChange={() => setLayout(!layout)} />
      </ToggleContainer>
      <Title>
        {verb} – {translation?.join(', ')}
      </Title>
      <TensesContainer layout={layout}>
        {tenses.map((tense) => (
          <TenseContainer key={generateKey()}>
            <Table definition collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>{t('conjugation')}</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <TableCell positive>{t('tense')}</TableCell>
                  <TableCell positive>{tense.tense}</TableCell>
                </Table.Row>
                {tense.conjugation.map(({ person, result }) => (
                  <Table.Row key={generateKey()}>
                    <Table.Cell>{person}</Table.Cell>
                    <Table.Cell>{result}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </TenseContainer>
        ))}
      </TensesContainer>
    </>
  );
};

export default Verb;
