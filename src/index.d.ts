import * as React from 'react';
import { Moment } from 'moment';

export declare type DateType = string | number | Date | Moment;
export declare type DateFormat = 'Date' | 'Moment' | 'number' | 'string';

export interface StickyElement {
  idx: number;
  position: string;
  component: JSX.Element;
}

export interface StickyPosition {
  idx: number;
  position: string;
}

export declare interface StickyTimelineProps  {
  value: DateType;
  monthCount?: number;
  type?: DateFormat;
  onChange: (date:DateType) => void;
}

export default class StickyTimeline extends React.Component<StickyTimelineProps> {}