import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg height="64" width="64" viewBox="0 0 128 128">
      <Path
        d="M46.867 53.748v-2.645c0-3.768 1.443-5.732 6.613-8.858 5.772-3.447 8.377-7.736 8.377-13.547 0-9.42-7.495-15.712-18.637-15.712-11.583 0-18.878 6.453-19.038 16.994h10.741c.24-4.288 3.167-7.054 7.575-7.054 4.33 0 7.295 2.485 7.295 6.132 0 3.648-1.403 5.491-6.573 8.658-5.33 3.206-7.255 6.693-6.974 13.387l.08 2.645h10.541zm-4.93 19.238c4.048 0 7.215-3.046 7.215-6.974 0-3.927-3.167-6.974-7.215-6.974s-7.214 3.047-7.214 6.974c0 3.928 3.166 6.974 7.214 6.974z"
        fill="red"
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default SvgComponent;
