import { NotificationProps } from './types';

const Notification = (props: NotificationProps) => {
  if (props.message) {
    return (
      <div style={{ color: 'red' }}>
        <b>{props.message}</b>
      </div>
    );
  }
  return null;
};

export default Notification;
