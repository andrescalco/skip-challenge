import axios from 'axios';

const getPictureUrl = (photoreference) => {

    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoreference}&sensor=false&key=AIzaSyC0XnNTQaW5czyTcqsSNSpGHdp9XYlX2xI`
};

export default getPictureUrl;
