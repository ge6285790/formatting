export default function url(that) {
  that.getHash = (url) => {
    let string = url ? url : location.href;
    string = string.split('/')[string.split('/').length - 1];
    const hashArray = string.split('#');
    hashArray.shift();
    const hash = hashArray.reduce((prev, next) => {
      return `${prev}#${next}`;
    });
    return {
      hash: hash,
      hashArray: hashArray
    }
  }

  that.getParamByName = (name, url) => {
    let locationUrl = url ? url : location.href;
    const string = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + string + '(=([^&#]*)|&|#|$)');
    let results = regex.exec(locationUrl);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  that.getParams = (url) => {
    let string = url ? url : location.href;
    string = string.split('?')[string.split('?').length - 1];
    let params = string.split('&');
    params = params.map((item) => {
      const keyValuePair = item.split('=');
      return {
        [keyValuePair[0]]: keyValuePair[1] || '',
      };
    });
    return params.reduce((prev, next) => {
      return {
        ...prev,
        ...next
      }
    });
  }
}
