let tanjiroKamadoImg=[
    
    "http://dummyimage.com/600x400/000/fff&text=one",
    "http://dummyimage.com/600x400/000/fff&text=two",

];

const imgs=document.getElementsByTagName("img")

for (let i=0;i<imgs.length;i++){

    const randomImg= Math.floor(Math.random()*tanjiroKamadoImg.length)
    imgs[i].src=tanjiroKamadoImg[randomImg]
}
