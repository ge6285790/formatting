import value from './value/value';
export default function Formatting(type) {
  // type = file, value, text, number
  switch (type) {
    case 'file': {

    }
    case 'value': {
      value(this);
    }
    case 'text': {

    }
    case 'number': {


    }
    default: {

    }
  }
}
