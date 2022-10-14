import { Button, Container, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import './App.css'
import { InputPhoneMask } from './components/InputPhoneMask'

function App() {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} mt={8}>
          <InputPhoneMask
            name="telefone"
            label="Telefone"
            control={control}
            message={errors.telefone?.message?.toString()}
          />

          <Button variant="contained" type="submit">
            Enviar dados
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default App
