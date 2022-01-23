import React from 'react'
import { Box, Grid } from '@mui/material'
import InputPanel from '~components/pages/translate/input-panel/InputPanel'
import ResultPanel from '~components/pages/translate/result-panel/ResultPanel'

const TranslatePage = () => {
  return (
    <Box>
      <h1>Translate Page</h1>
      <Grid container>
        <Grid item md={6}>
          <InputPanel />
        </Grid>
        <Grid item md={6}>
          <ResultPanel />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TranslatePage
