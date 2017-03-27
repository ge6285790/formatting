export default function value(that) {

  that.file = (ele) => {
    return document.querySelector(ele).files;
  }

  that.leading = (value, length, letter) => {
    const valueLength = value.toString().length;
    const dif = length - valueLength;
    let mend = '';
    if (dif > 0)
    {
        for (let i = 0; i <= dif - 1; i += 1)
        {
            mend += letter;
        }
    }
    return mend + value;
  };

  that.size = (size) => {
    const unitArray = ['KB', 'MB', 'GB', 'TB'];
    const mathLog = Math.floor(Math.log10(size));
    const unit = unitArray[Math.floor(mathLog / 3)];
    const divisor = Math.pow(10, Math.floor(mathLog / 3) * 3);
    return `${Math.round((size / divisor) * 100) / 100} ${unit}`;
  }

  that.duration = (duration) => {
    const fileLong = Math.floor(duration);
    let second = fileLong % 60;
    let min = Math.floor(fileLong / 60) % 60;
    let hour = Math.floor(fileLong / 60 / 60);
    second = that.leading(second, 2, 0);
    min = that.leading(min, 2, 0);
    hour = that.leading(hour, 2, 0);
    return `${hour}:${min}:${second}`;
  }

  that.videoInfo = (ele) => {
    const files = that.file(ele);
    const promiseArray = [];
    let index = 0;
    for (const file of files) {
      const i = index;
      const fileSize = that.size(file.size);
      const fileTitle = file.name;

      if (file.type.indexOf('video') < 0){
          promiseArray.push(new Promise((resolve, reject) => {
            resolve({
              name: fileTitle,
              size: fileSize,
              error: 'not video file',
            });
          }));
          continue;
      }

      promiseArray.push(new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.onloadedmetadata = function ()
        {
          window.URL.revokeObjectURL(this.src);
          const fileLong = that.duration(video.duration);
          document.querySelector(`#tempVideo${i}`).remove();
          resolve({
            name: fileTitle,
            size: fileSize,
            type: file.type,
            duration: fileLong,
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate
          });
        };
        video.src = URL.createObjectURL(file);
        video.style.display = 'none';
        video.id = `tempVideo${i}`;
        index ++;
        document.querySelector('body').appendChild(video);
      }));
    }
    return Promise.all(promiseArray);
  }

}
