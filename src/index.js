import value from './value';
import file from './file';
import url from './url';
import object from './object';
import array from './array';

function Formatting(type) {

  // type = file, value, text, number, url
  switch (type) {
    case 'file': {
      file(this);
    }
    case 'url': {
      url(this);
    }
    case 'object': {
      array(this);
      object(this);
    }
    case 'array': {
      array(this);
    }
    case 'value': {
      value(this);
    }
    default: {
      value(this);
      file(this);
      url(this);
      array(this);
      object(this);
    }
  }
}

// window.Formatting = Formatting;

export default Formatting;
