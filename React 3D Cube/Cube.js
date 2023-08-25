import "./Cube.scss";
import { useEffect, useRef } from "react";

export default function Cube(props) {
  var cubeElem = useRef(null);
  useEffect(() => {
    cubeElem.current.style.transform =
      "translate(-50%, -50%) perspective(var(--perspective)) " +
      "rotateY(" +
      props.rot +
      "deg)";
  }, [props.rot]);
  return (
    <div
      className="cube"
      ref={cubeElem}
      style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
    >
      <div
        className="face f1"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[0] ? (
          <div />
        ) : (
          props.children[0]
        )}
      </div>
      <div
        className="face f2"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[1] ? (
          <div />
        ) : (
          props.children[1]
        )}
      </div>
      <div
        className="face f3"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[2] ? (
          <div />
        ) : (
          props.children[2]
        )}
      </div>
      <div
        className="face f4"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[3] ? (
          <div />
        ) : (
          props.children[3]
        )}
      </div>
      <div
        className="face f5"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[4] ? (
          <div />
        ) : (
          props.children[4]
        )}
      </div>
      <div
        className="face f6"
        style={{ "--size": props.size + "px", "--distanceVal": props.dis }}
      >
        {props.children == undefined && props.children[5] ? (
          <div />
        ) : (
          props.children[5]
        )}
      </div>
    </div>
  );
}
