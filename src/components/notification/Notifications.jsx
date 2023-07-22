import { toast } from "react-hot-toast";

const Notifications = ({ funcName, notification }) => {
  if (funcName === notification?.id) {
    if (notification?.isPending) {
      return toast.loading(`${notification?.title}, ${notification?.message}`, {
        duration: 1500,
        position: "top-center",
        className: "",
        icon: "🤨",
      });
    } else if (notification?.isError) {
      return toast.error(`${notification?.title}, ${notification?.message}`, {
        duration: 2000,
        position: "top-center",
        className: "",
        icon: "😕",
      });
    } else if (notification?.isSuccess) {
      return toast.success(`${notification?.title}, ${notification?.message}`, {
        duration: 2000,
        position: "top-center",
        className: "",
        icon: "😎",
      });
    }
  }
};

export default Notifications;
