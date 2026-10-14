import { createContext } from 'react';

const ScrollContext = createContext({ progress: { current: 0 } });

export default ScrollContext;
