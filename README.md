# React Sticky Timeline

![GitHub package version](https://img.shields.io/github/package-json/v/GaryGolf/react-sticky-timeline.svg?style=plastic)
![GitHub issues](https://img.shields.io/github/issues/GaryGolf/react-sticky-timeline.svg?style=plastic)


## Motivation

#### Usage

```jsx
import  StickyTimeline from 'react-sticky-timeline';
  
  handleDateChange = (date) => this.props.dispatch({ type: UPDATE_DATE, payload: { date } });
  
  return (
    <StickyTimeline
      value={this.props.date}
      type="Date" // optional "Date" || "string" || "number
      monthCount={4} // optional default 6
      onChange={this.handleDateChange}
    />
  );
```

#### Attributes


## License

The code is available under [MIT licence](LICENSE).