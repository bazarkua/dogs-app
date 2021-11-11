
const map = document.querySelector('.Map');

const data = {
    lat: 38.2527,
    lng:-85.7595,
};
fetch(`https://mapservice-stumpfjo.uw.r.appspot.com/map`,{
        method: 'POST',
        mode: 'no-cors',
        data: data
    }
).then((res) =>{
    console.log(res);
})
.catch((error) => {
    console.error(error);
});