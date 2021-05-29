import { Component } from '@angular/core';

const SVG_PATHS = [
  `M 13.457269,4.0185853 C 13.173559,3.7621262 12.964837,3.381866 12.606138,3.2492084 12.243429,3.1150676 11.823956,3.1917864 11.446264,3.2748542 8.3890857,3.9472356 5.5561862,6.5912007 4.4786724,9.5110815 1.035657,18.841071 14.687527,24.32928 20.433205,17.764786 23.451996,14.315787 24.543044,8.7333258 21.125792,5.0871643 20.500926,4.4204411 19.641837,3.9117373 18.747632,3.7236574 16.005947,3.1469943 13.255863,4.2981078 10.862154,5.4248354`
];

@Component({
  selector: 'tictac-naught',
  templateUrl: './naught.component.html',
  styleUrls: ['./naught.component.scss']
})
export class NaughtComponent {

  path: string;

  constructor() {
    this.path = SVG_PATHS[Math.round(Math.random() * (SVG_PATHS.length - 1))];
  }
}
