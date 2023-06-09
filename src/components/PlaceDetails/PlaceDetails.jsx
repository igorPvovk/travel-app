import React, { useEffect } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from "@material-ui/core";

const PlaceDetails = ({ place }) => {
    const classes = useStyles();

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={
                    place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                }
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name}
                </Typography>

                <Box display="flex" justifyContent="space-between">
                    <Rating value={Number(place.rating)} readOnly></Rating>
                    <Typography variant="subtitle1" gutterBottom>
                        out of {place.num_reviews} reviews
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Prise</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {place.price_level}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {place.ranking}
                    </Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="centre"
                        my={1}
                    >
                        <img
                            src={award.images.small}
                            alt={award.display_name}
                        />
                        <Typography variant="subtitle2" color="textSecondary">
                            {award.display_name}
                        </Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                    <Chip
                        key={name}
                        size="small"
                        label={name}
                        className={classes.chip}
                    />
                ))}
                {place?.address && (
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        color="textSecondary"
                        className={classes.subtitle}
                    >
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography
                        gutterBottom
                        variant="subtitle2"
                        color="textSecondary"
                        className={classes.spacing}
                    >
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => window.open(place.web_url, "_blank")}
                    >
                        Trip Advisor
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => window.open(place.website, "_blank")}
                    >
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
