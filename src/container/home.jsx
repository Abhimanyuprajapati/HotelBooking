import axios from "axios";
import { Container } from "@mui/material";
import { HotelCard } from "../components/hotelcard";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

export const Home = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then((response) => {
        // handle success
        console.log(response.data);
        setHotel(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {" "}
        {/*mt = margin top*/}
        <Grid container spacing={2}>
          {hotel.map((hotel)=>{
            return(
              <Grid key={hotel.id} item xs={4}>
              <HotelCard hotel={hotel} />
            </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  );
};
