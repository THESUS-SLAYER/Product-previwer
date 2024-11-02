function previewchange(imageName) {
    const mainimg = document.getElementById('main-product-img');
    mainimg.src = imageName;
}

function backtomainimg(num)
{
    if (num == 1) {
        const mainimg = document.getElementById('main-product-img');
        mainimg.src = "img/iphone1.jpg";
    }
    else
    console.log("Refresh");
}