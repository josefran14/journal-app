import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1, ml: 35, width: '70%'}}>

        <Grid item>
            <Typography fontSize={39} fontWeight='light'>21 de septiembre, 2023</Typography>
        </Grid>

        <Grid item sx={{mr: 5, width: 50}}>
            <Button color="primary" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
            type='text'
            variant="filled"
            placeholder="Ingrese un titulo"
            label="Titulo"
            sx={{border: 'none', mb: 1, width: '100vh'}}
            />

            <TextField
            type='text'
            variant="filled"
            multiline
            placeholder="¿Que sucedio en el dia de hoy?"
            minRows={5}
            sx={{border: 'none', mb: 1, width: '100vh'}}
            />
        </Grid>

        <ImageGallery/>
       
    </Grid>
  )
}
