import imageUrl from '../assets/Yuta.jpg';

const imageObj = {
    character : 'Yuta Okkotsu',
    url : imageUrl,
    size: 100
};

function Yuta(){
    return(
        <>
            <h1>{imageObj.character}</h1>
            <img src={imageObj.url} alt="nice guy" style={{width:imageObj.size}}/>
        </>
    );
}

export default Yuta;
