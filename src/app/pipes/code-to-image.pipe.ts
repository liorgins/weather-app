import { Pipe, PipeTransform } from '@angular/core';


const iconPath = 'assets/icons/';
const iconData: any = {
  "01n": "clear",
  "01d": "sun",
  "02n": "few-clouds",
  "02d": "few-clouds",
  "03n": "clouds",
  "03d": "clouds",
  "04n": "clouds",
  "04d": "clouds",
  "09n": "rain",
  "09d": "rain",
  "10n": "rain",
  "10d": "rain",
  "11n": "thunderstorm",
  "11d": "thunderstorm",
  "13n": "snow",
  "13d": "snow"
}

@Pipe({
  name: 'codeToImage'
})
export class CodeToImagePipe implements PipeTransform {

  transform(code: string, ...args: unknown[]): unknown {
    const mode = args[0] === 'dark' ? '' : '-light';
    let name = iconData[code.toString()]? iconData[code.toString()] : 'sun';
    return `${iconPath}${name}${mode}.svg`
  }

}
