import axios from 'axios';

const getPlaceDetails = (placeid) => {
    const placeDetails = axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
            placeid,
            key: 'AIzaSyC0XnNTQaW5czyTcqsSNSpGHdp9XYlX2xI',
            extensions: 'review_summary',
        }
    });

    return placeDetails;
};

export default getPlaceDetails;
