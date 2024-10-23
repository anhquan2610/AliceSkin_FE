import { toast } from "react-toastify";


export const notifyError = (message) => {
  if (Array.isArray(message)) {
    toast.error(message.join(", ")); 
  } else {
    toast.error(message); 
  }
};


export const notifySuccess = (message) => {
  toast.success(message);
};

export const notifyWarning = (message) => {
  toast.warning(message);
};


export const notifyInfo = (message) => {
  toast.info(message);
};
