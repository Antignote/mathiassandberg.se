import * as React from "react"

const hearts = ['โค๏ธ', '๐งก', '๐', '๐', '๐', '๐', '๐ค', '๐ค', '๐ค']
const animationFeature = false;

const Heart = () => {
  if(!animationFeature) {
    return hearts[6];
  }

  return (
    <span className="heart">
      {hearts.map((heart, index) => (
        <span
          className={`heart heart${index}`}
          key={heart}
        >
          {heart}
        </span>
      ))}
    </span>
  );
}

export default Heart;