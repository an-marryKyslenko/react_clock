import { Component, ReactNode } from 'react';

type State = {
  today: Date;
};

type Props = {
  name: string;
  nameTimerId: number;
};
export class Clock extends Component<Props, State> {
  state: Readonly<State> = {
    today: new Date(),
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.props.nameTimerId);
  }

  render(): ReactNode {
    const { today } = this.state;
    const { name } = this.props;

    // eslint-disable-next-line no-console
    console.log(today.toUTCString().slice(-12, -4));

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
