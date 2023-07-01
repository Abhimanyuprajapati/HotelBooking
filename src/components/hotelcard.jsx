import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

export const HotelCard = (props) => {
// console.log(props);
const hoteldetail=props.hotel;


const navigate=useNavigate()   // initialization in react
const clickhandlercard=()=>{
  navigate(`hoteldetail/${hoteldetail.slug}`);
  // console.log("crad click",hoteldetail);
};

  return (
    <Card onClick={clickhandlercard} sx={{ maxWidth: 345 ,marginBottom:5}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={hoteldetail.thumbnail}
        alt="hotel"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {hoteldetail.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${hoteldetail.pricePerNight} night
        </Typography>
        <Rating name="half-rating" defaultValue={5} precision={hoteldetail.rating} />
      </CardContent>
    </CardActionArea>
  </Card>
  )
};
