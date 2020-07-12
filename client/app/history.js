import { createMemorySource, createHistory } from '@reach/router';

// for some types of tests you want a memory source
const source = createMemorySource('/starting/url');
const history = createHistory(source);

export default history;
