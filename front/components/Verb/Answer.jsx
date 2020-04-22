import { Icon, Input, Label, Table } from 'semantic-ui-react';
import { useState } from 'preact/hooks';
import styled, { css } from 'styled-components';

const colors = {
  check: '#2c662d',
  close: '#9f3a38',
  question: '',
};

const ColoredIcon = styled(Icon)`
  ${(props) => {
    return css`
      color: ${colors[props.name]};
      flex-direction: column;
    `;
  }}
`;

const ColoredLabel = styled(Label)`
  transition: color 0.3s ease-in-out !important;
  user-select: none;

  ${(props) =>
    !props.revealed &&
    css`
      color: #e8e8e8 !important;
    `}
`;

const AnswerInput = ({ person, result }) => {
  const [answer, setAnswer] = useState(null);
  const [reveal, setReveal] = useState(false);

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      setAnswer(e.target.value === result);
      setReveal(e.target.value === result);
    }
  };

  const renderIcon = () => {
    switch (answer) {
      case false:
        return 'close';
      case true:
        return 'check';
      case null:
        return 'question';
    }
  };

  const revealAnswer = () => {
    setReveal(true);
  };

  return (
    <>
      <Table.Cell>{person}</Table.Cell>
      <Table.Cell>
        <Input icon placeholder={`${person}…`} onKeyUp={handleSubmit}>
          <input />
          <ColoredIcon name={renderIcon()} />
        </Input>
      </Table.Cell>
      <Table.Cell>
        <ColoredLabel revealed={reveal} onClick={revealAnswer}>
          {result}
        </ColoredLabel>
      </Table.Cell>
    </>
  );
};

export default AnswerInput;
