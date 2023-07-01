import { Typography, Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const HotelDetail = () => {
  const param = useParams();
  const [hotelinfo, setHotelinfo] = useState({});
  console.log(param.slug);
  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${param.slug}`)
      .then((response) => {
        console.log(response.data);
        // console.log("This is the information we get",hotelinfo);
        setHotelinfo(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [param.slug]);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {" "}
        {/*mt = margin top*/}
        <Typography>{hotelinfo.name}</Typography>
        <Grid container spacing={2}>
          {hotelinfo.images?.map((images)=>{
              return(
                <Grid item lg={4}>
                <img
                  src={images.img}
                  width={500}
                  alt="photo"
                />
              </Grid>
              )
          })}
        </Grid>
      </Container>
    </>
  );
};
