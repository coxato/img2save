# img2save
this simple webapp it's for download images, you find a photo and download it, that's all.

all the photos are from API's. I use 3 differents public API's services:

 - [unsplash](https://unsplash.com/developers)
 - [pixabay](https://pixabay.com/api/docs/)
 - [flickr](https://www.flickr.com/services/api/)

igm2save is make with React.
In this version you can download differents resolutions of the same photo.

I use the filesaver.js library but with a little modification, filesaver.js does not notify when a file is finished downloading, so I add one  parameter more, a callback. If you want to see that check here [filesaver little modification](https://github.com/carlosEdua/img2save/blob/master/src/utilities/filesaver.js)

## check the website!
### here [img2save.now.sh](https://img2save.now.sh/)