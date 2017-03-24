import value from './value/value';
import file from './file/file';

function Formatting(type) {

  // type = file, value, text, number
  switch (type) {
    case 'file': {
      file(this);
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

window.Formatting = Formatting;
