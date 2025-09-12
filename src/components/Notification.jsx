import { useApp } from '../contexts/AppContext';

export default function Notification() {
  const { notification, closeNotification } = useApp();

  if (!notification) return null;

  const getNotificationStyles = (type) => {
    const baseStyles = "fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-md";
    
    switch (type) {
      case 'success':
        return `${baseStyles} bg-green-500 text-white`;
      case 'error':
        return `${baseStyles} bg-red-500 text-white`;
      case 'warning':
        return `${baseStyles} bg-yellow-500 text-black`;
      default:
        return `${baseStyles} bg-blue-500 text-white`;
    }
  };

  return (
    <div className={getNotificationStyles(notification.type)}>
      <div className="flex justify-between items-center">
        <p className="flex-1">{notification.message}</p>
        <button
          onClick={closeNotification}
          className="ml-4 text-xl font-bold hover:opacity-70"
        >
          ×
        </button>
      </div>
    </div>
  );
}