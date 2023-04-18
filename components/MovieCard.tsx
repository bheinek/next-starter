import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { FilmCard } from '../types';

type Movie = { movie: FilmCard };

export const MovieCard = ({ movie }: Movie) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        image={movie.Poster}
        alt="green iguana"
        height="300"
      />
      <CardHeader title={movie.Title} />
      <CardContent>
        <Typography paragraph>{`imdbId: ${movie.imdbID}`}</Typography>
        <Typography paragraph variant="caption" color="InfoText">
          {`Type: ${movie.Type} `}
        </Typography>
        <Typography paragraph variant="caption" color="InfoText">
          {`Year: ${movie.Year} `}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
