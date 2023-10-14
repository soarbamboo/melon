import React from "react";
import { useState, useEffect, useRef } from "react";
import { TypewriterContent } from "./style";
import useTypewriter from "react-typewriter-hook";
// import "./index.module.css"

const MagicOcean = [
  "Yo, did you see that?",
  "Fine, I' ll show you again.",
  "事不过三，bye."
];
let index = 0;

function Typewriter({ text }) {
  const [magicName, setMagicName] = useState(text);
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 4000);
      return function clear() {
        clearInterval(intervalRef.current as any);
      };
    },
    [magicName]
  );
  return (
    <TypewriterContent >
      <p className="cursor">{name}</p>
    </TypewriterContent>
  );
}
export default Typewriter