import { Table, Container, Grid } from 'semantic-ui-react';

const Verb = ({ verb }) => {
  return (
    <Container>
      {verb.tenses.map((tense) => (
        <Table definition collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Conjugation ({tense.tense})</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tense.conjugation.map(({ person, result }) => (
              <Table.Row>
                <Table.Cell>{person}</Table.Cell>
                <Table.Cell>{result}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ))}
    </Container>
  );
};

export default Verb;
