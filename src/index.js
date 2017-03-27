import value from './value/value';
import file from './file/file';
import url from './url/url';

function Formatting(type) {

  // type = file, value, text, number, url
  switch (type) {
    case 'file': {
      file(this);
    }
    case 'url': {
      url(this);
    }
    case 'value': {
      value(this);
    }
    case 'text': {

    }
    case 'number': {


    }
    default: {
      value(this);
      file(this);
    }
  }
}

// window.Formatting = Formatting;

export default Formatting;
