export function textSlicer(txt: string, max: number = 50) {
  if (txt.length < 50) {
    return txt;
  } else {
    return `${txt.slice(0, max)} ...`;
  }
}