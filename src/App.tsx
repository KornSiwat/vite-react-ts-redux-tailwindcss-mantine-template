import {Box, MantineProvider, Title, Text} from "@mantine/core";
import '@mantine/core/styles.css'

import {theme} from "./theme/theme.tsx";
import './assets/stylesheets/tailwindcss.css'

function App() {
  return (
    <MantineProvider theme={theme}>
      <Box className='p-4 text-center absolute top-0 bottom-0 left-0 right-0 h-full flex flex-col justify-center'
           bg='gray.4'>
        <Title>Vite React Redux Tailwindcss Mantine</Title>
        <Text>By Siwat</Text>
      </Box>
    </MantineProvider>
  )
}

export default App
