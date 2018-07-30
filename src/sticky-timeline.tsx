import * as React from 'react';
import { Moment } from 'moment';
import * as moment from 'moment';
import StickyDate from './sticky-date';
import StickyList from 'react-sticky-list';

import { StickyTimelineProps,  DateType} from './index'

export default class StickyTimeline extends React.PureComponent<StickyTimelineProps, null> {

  static defaultProps = { type: 'Date', monthCount: 6 }
  private container: HTMLDivElement;

  private handleDateClick = (date:Moment) => {
    this.props.onChange(date.toDate())
  }

  private renderCalendar = (value: DateType, monthCount: number) => new Array(monthCount)
    .fill(null)
    .map((x,i) => moment().add(i, 'month').startOf('month'))
    .reduce((acc, m) => {

      const activeMonth = moment(value).isSame(m, 'month');
      const month = (
        <h4 key={m.format('MMM YYYY')}  
          className={['sticky-month', activeMonth ? '__active' : ''].join(' ')} >
          {m.format('MMMM')}
        </h4>
      )

      acc.push(month);
      
      const dayList = new Array(m.daysInMonth())
        .fill(null)
        .map((x, i) => moment(m).add(i, 'days'))
        .filter(d => moment().isBefore(d,'days'))
        .map(d => (
          <StickyDate
            date={moment(d)}
            key={moment(d).format('DD MMMM YYYY')}
            className={[
              'sticky-date', 
              moment(value).isSame(d, 'day') ? '__active' : ''
            ].join(' ')}
            onClick={this.handleDateClick}
          />
        ))

      return acc.concat(dayList);
    },[]);

  render() {
    const { value, monthCount } = this.props;
    const calendar = this.renderCalendar(value, monthCount);

    return (
      <div className="sticky-timeline" ref={el => this.container = el}>
        <StickyList>
          {calendar}
        </StickyList>
      </div>
    )
  }
} 
