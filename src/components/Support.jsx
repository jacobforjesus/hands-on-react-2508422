import { useEffect, useState } from 'react';
const pageTitle = document.title;

export default () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0) {
      count && (document.title = `${pageTitle}--${count}`)  // parenthesis only get executed if `count` is truthy
    }
  })

  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {count === 0 ? "Click to support": `Supported ${count} times`}
    </button>
  )
}