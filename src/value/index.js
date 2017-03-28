export default function value(that) {
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

  that.tailing = (value, length, letter) => {
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
    return value + mend;
  };

  that.sequence = (value, letter, number) => {
    let newValue = value.slice(0, number);
    let loopCount = Math.floor(value.toString().length / number);
    if (value.toString().length % number === 0) {
      loopCount = loopCount - 1;
    }
    for (let i = 1; i <= loopCount; i += 1) {
      newValue += `${letter}${value.slice((number) * i, (number) * (i + 1))}`
    }
    return newValue;
  }

  that.insert = (value, letter, start) => {
    const text = value.toString();
    return `${text.slice(0, start)}${letter}${text.slice(start, text.length)}`;
  }

  that.replace = (value, letter, replaceLetter) => {
    const reg = new RegExp(letter, "g");
    if (value.indexOf(letter) < 0) {
      return value;
    }
    return value.replace(reg, replaceLetter);
  }

  that.replaceWithRange = (value, replaceLetter, start, end) => {
    const text = value.toString();
    return `${text.slice(0, start)}${replaceLetter}${text.slice(end, text.length)}`;
  }

}
