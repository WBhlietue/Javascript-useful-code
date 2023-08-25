export function NumberTween(
  from,
  to,
  duration,
  ease,
  onUpdate,
  onComplete = () => {},
  fps = 60
) {
  const distance = to - from;
  let time = 0;
  let deltaTime = 1000 / fps;
  let interval = setInterval(() => {
    time += deltaTime;
    if (time >= duration) {
      clearInterval(interval);
      onUpdate(ease(1) * distance + from);
      onComplete && onComplete();
    } else {
      onUpdate && onUpdate(ease(time / duration) * distance + from);
    }
  }, deltaTime);
  return interval;
}
