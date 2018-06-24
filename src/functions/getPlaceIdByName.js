import axios from 'axios';

const getPlaceIdByName = (keyword) => {
    const getPlaceID = axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
            keyword,
            key: 'AIzaSyC0XnNTQaW5czyTcqsSNSpGHdp9XYlX2xI',
            location: '49.895077,-97.138451',
            radius: '50000'
        }
    });

    return getPlaceID;
};

export default getPlaceIdByName;
