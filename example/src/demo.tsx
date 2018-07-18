import * as React from 'react';
import * as styles from './demo.css';
interface Props {}

export default class Demo extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className={styles.container}>
        Hello
      </div>
    )
  }
}