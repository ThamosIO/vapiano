import { useContext, useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import { Container } from 'semantic-ui-react';

import Dropdown from '../Dropdown/Dropdown.jsx';
import { APIContext, API_URL } from '../API/APIContext.jsx';

function withVerb(WrappedComponent, title) {
  return () => {
    const { t } = useTranslation();
    const [verb, setVerb] = useState(null);
    const [filters, setFilters] = useState([]);

    const API = useContext(APIContext);
    const { verbs } = API;

    const onVerbChange = async (e, { value }) => {
      if (!value) return;

      const found = verbs.find((v) => v.verb === value);

      const response = await fetch(`${API_URL}/verbs/${found._id}`);
      const res = await response.json();

      setVerb(res);
    };

    const randomize = async () => {
      const random = verbs[Math.trunc(Math.random() * verbs.length)];

      onVerbChange(null, { value: random.verb });
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
        <h1>{t(title)}</h1>
        <Dropdown
          verbs={verbs}
          tenses={tenses}
          onVerbChange={onVerbChange}
          onFilterChange={onFilterChange}
          randomize={randomize}
        />
        {verb && (
          <WrappedComponent
            verb={verb.verb}
            translation={verb.translation}
            tenses={
              !filters.length
                ? verb.tenses
                : verb.tenses.filter(
                    ({ tense }) => filters.indexOf(tense) !== -1,
                  )
            }
          ></WrappedComponent>
        )}
      </Container>
    );
  };
}

export default withVerb;
