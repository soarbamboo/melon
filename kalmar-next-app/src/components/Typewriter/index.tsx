import React from "react";
import { useState, useEffect, useRef } from "react";
import { TypewriterContent } from "./style";
import useTypewriter from "react-typewriter-hook";

const MagicOcean = [
  "我们总是喜欢用顺其自然来敷衍人生道路上的荆棘坎坷。",
  "却很少承认，真正的顺其自然。",
  "其实是竭尽所能之后的不强求，而不是两手一摊的不作为。"
];
let index = 0;

function Typewriter(porps) {
  const [magicName, setMagicName] = useState("我们总是喜欢用顺其自然来敷衍人生道路上的荆棘坎坷。");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 2 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 5000);
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