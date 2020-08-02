import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Recipe: React.FunctionComponent = () => {
  return <Container>
    <Typography variant="h2">Recipe Name</Typography>
    <Typography variant="subtitle1">Servings</Typography>
  </Container>;
}

export default Recipe;