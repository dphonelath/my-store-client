import React from "react"
import styles from "./loader.module.scss"

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles["lds-ring"]}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader