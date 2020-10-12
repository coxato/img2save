// function to download an image, using the arrayBuffer() method
// example
/*
	fetch(url)
      .then(response => {
        response.arrayBuffer().then( ... )
	}
*/

async function downloadImage(imageURL, imageName, extension){
	try{
		const response = await fetch(imageURL);
		// create buffer from image
      	const buffer = await response.arrayBuffer();
      	// create image
      	const url = window.URL.createObjectURL(new Blob([buffer]));
	    // create an <a> element to download the image
	    const link = document.createElement("a");
	    link.href = url;
	    link.setAttribute("download", `${imageName}.${extension}`);
	    document.body.appendChild(link);
	    link.click();

	}catch({ message }){
		console.error(message);
		return null;
	}
}


export {
	downloadImage
}