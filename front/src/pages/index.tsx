import { useState } from "react";

import styles from "./index.module.css";

export default function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <button type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn ICE
          </a>
        </p>
      </div>
    </div>
  );
}
