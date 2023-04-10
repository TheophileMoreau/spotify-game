import { extendTheme } from '@chakra-ui/react';
import '@fontsource/anek-latin/100.css';
import '@fontsource/anek-latin/200.css';
import '@fontsource/anek-latin/300.css';
import '@fontsource/anek-latin/400.css';
import '@fontsource/anek-latin/500.css';
import '@fontsource/anek-latin/600.css';
import '@fontsource/anek-latin/700.css';
import '@fontsource/anek-latin/800.css';

const theme = extendTheme({
  fonts: {
    heading: `'Anek Latin', sans-serif`,
    body: `'Anek Latin', sans-serif`,
  },
})

export default theme