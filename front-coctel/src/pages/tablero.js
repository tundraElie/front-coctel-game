
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

export default function Tablero() {
  const [siete, setSiete]= useState(-370);
  const [corazones, setCorazones]= useState(350);
  const [queenas, setQueenas]= useState(-420);
  const [todo, setTodo]= useState(700);
  const [nada, setNada]= useState(-700);
  const [jugadores, setJugadores]= useState('3');
  const [size, setSize]= useState(3);
  const [domino]= useState(300);
  const [nombres, setNombres]=useState(['','','',''])

  const [puntajes, setPuntajes]= useState([[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]])

  const handleChange = (e) => {
    if (e.target.value === '4'){
      setSize(2.4);
      setJugadores('4');
      setSiete(-330);
      setCorazones(310);
      setQueenas(-380);
      setTodo(660);
      setNada(-660);
    } else {
      setSize(3);
      setJugadores('3');
      setSiete(-370);
      setCorazones(350);
      setQueenas(-420);
      setTodo(700);
      setNada(-700);
    }
  }
  const updateName = (event, index1) => {
    let newArr = [...nombres];
    newArr[index1] = event.target.value;
    setNombres(newArr);
  }
  const updateValue = (event, index1, index2) => {
    let newArr = [...puntajes];
    newArr[index1][index2] = event.target.value*1;
    setPuntajes(newArr);
  }
  // console.log(jugadores,size)
  console.log(puntajes)
  return (
    <div>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
      >
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 600, minWidth: 500, marginTop: 3, p: 2,  }}> 
          <Typography variant="h4">
            <center><b>Cóctel<br />
            GAME</b></center>
          </Typography>
          <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Cantidad de jugadores:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={jugadores}
              onChange={handleChange}
            >
              <FormControlLabel value={'3'} control={<Radio />} label="3" />
              <FormControlLabel value={'4'} control={<Radio />} label="4" />
              </RadioGroup>
          </FormControl>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            sx={{ marginBottom: 5 }} 
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={size} style={{textAlign: "center"}}>     
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateName(event, 0)} sx = {{ maxWidth: 100}} inputProps={{style: { textAlign: 'center' }}} label="jugador 1" id="jug1" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateName(event, 1)} sx = {{ maxWidth: 100}} inputProps={{style: { textAlign: 'center' }}} label="jugador 2" id="jug2" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateName(event, 2)} sx = {{ maxWidth: 100}} inputProps={{style: { textAlign: 'center' }}} label="jugador 3" id="jug3" variant="standard" />
            </Grid>
            {jugadores !== '3' 
            ? <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateName(event, 3)} sx = {{ maxWidth: 100}} inputProps={{style: { textAlign: 'center' }}} label="jugador 4" id="jug4" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >            
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="game-icons:card-7-clubs" className="big-icon" /><br />
            {puntajes[0][0]+puntajes[1][0]+puntajes[2][0]+puntajes[3][0]}/{siete}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField  
              onChange={event => updateValue(event, 0, 0)} 
              sx = {{ maxWidth: 40}} 
              inputProps={{style: { textAlign: 'center' }}} 
              id="jug11" 
              variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField 
              type="number" 
              onChange={event => updateValue(event, 1, 0)} 
              sx = {{ maxWidth: 40}} 
              inputProps={{style: { textAlign: 'center' }}} 
              id="jug21" 
              variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField 
            type="number" 
            // value={puntajes[2][0]}  
            onChange={event => updateValue(event, 2, 0)} 
            sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug31" variant="standard" />
            </Grid>
            {jugadores !== '3' 
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField type="number" 
              // value={puntajes[3][0]}  
              onChange={event => updateValue(event, 3, 0)} 
              sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug41" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="game-icons:card-ace-hearts" className="big-icon" /><br />
            {puntajes[0][1]+puntajes[1][1]+puntajes[2][1]+puntajes[3][1]}/{corazones}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 0, 1)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug12" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 1, 1)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug22" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 2, 1)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug32" variant="standard" />
            </Grid>
            {jugadores !== '3'
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 3, 1)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug42" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="game-icons:card-queen-spades" className="big-icon" /><br />
            {puntajes[0][2]+puntajes[1][2]+puntajes[2][2]+puntajes[3][2]}/{queenas}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 0, 2)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug13" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 1, 2)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug23" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 2, 2)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug33" variant="standard" />
            </Grid>
            {jugadores !== '3'
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 3, 2)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug43" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="healthicons:positive" className="mid-icon" /><br />
            {puntajes[0][3]+puntajes[1][3]+puntajes[2][3]+puntajes[3][3]}/{todo}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 0, 3)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug14" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 1, 3)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug24" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 2, 3)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug34" variant="standard" />
            </Grid>
            {jugadores !== '3'
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 3, 3)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug44" variant="standard" />
            </Grid>
            : <div />
          }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="healthicons:negative" className="mid-icon" /><br />
            {puntajes[0][4]+puntajes[1][4]+puntajes[2][4]+puntajes[3][4]}/{nada}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 0, 4)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug15" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 1, 4)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug25" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 2, 4)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug35" variant="standard" />
            </Grid>
            {jugadores !== '3'
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 3, 4)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug45" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <Icon icon="material-symbols:stairs" className="stair-icon" /><br />
            {domino}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 0, 5)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug16" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 1, 5)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug26" variant="standard" />
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 2, 5)} sx = {{ maxWidth: 40}} inputProps={{style: { textAlign: 'center' }}} id="jug36" variant="standard" />
            </Grid>
            {jugadores !== '3' 
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            <TextField onChange={event => updateValue(event, 3, 5)} type="number" inputProps={{style: { textAlign: 'center' }}} sx = {{ maxWidth: 40}} id="jug46" variant="standard" />
            </Grid>
            : <div />
            }
          </Grid>
          <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center"
            justifyContent="center"
            marginTop={2}
          >
          <Grid item xs={size} style={{textAlign: "center"}}>
            <b>TOTAL</b>
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            {puntajes[0][0]+puntajes[0][1]+puntajes[0][2]+puntajes[0][3]+puntajes[0][4]+puntajes[0][5]}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            {puntajes[1][0]+puntajes[1][1]+puntajes[1][2]+puntajes[1][3]+puntajes[1][4]+puntajes[1][5]}
            </Grid>
            <Grid item xs={size} style={{textAlign: "center"}}>
            {puntajes[2][0]+puntajes[2][1]+puntajes[2][2]+puntajes[2][3]+puntajes[2][4]+puntajes[2][5]}
            </Grid>
            {jugadores !== '3'
            ?
            <Grid item xs={size} style={{textAlign: "center"}}>
            {puntajes[3][0]+puntajes[3][1]+puntajes[3][2]+puntajes[3][3]+puntajes[3][4]+puntajes[3][5]}
            </Grid>
            : <div />
            }
          </Grid>
          
          <Button sx={{ borderRadius: 5, backgroundColor: "#000", color: "#FFF", marginTop: 5 }}> Guardar Partida</Button>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}
