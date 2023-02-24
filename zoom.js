let zoomNode = document.querySelectorAll('.zoom');
let imgZoomNode = document.querySelectorAll('#imgZoom');

for (const zoom of zoomNode){
    for (const imgZoom of imgZoomNode ){
        zoom.addEventListener('mousemove', (e)=>{
            imgZoom.style.opacity = 1;
            let positionPx = e.x - zoom.getBoundingClientRect().left;
            let positionX = (positionPx / zoom.offsetWidth) * 100;

            let positionPy = e.y - zoom.getBoundingClientRect().top;
            let positionY = (positionPy / zoom.offsetHeight) * 100;

            imgZoom.style.setProperty('--zoom-x', positionX + '%');
            imgZoom.style.setProperty('--zoom-y', positionY + '%');
        })
    }
}


for (const zoom of zoomNode){
    for (const imgZoom of imgZoomNode ){
        zoom.addEventListener('mouseout', (e)=>{
            imgZoom.style.opacity = 0;
        })
    }
}
