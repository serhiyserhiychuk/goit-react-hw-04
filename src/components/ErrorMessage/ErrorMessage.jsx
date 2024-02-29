import toast from "react-hot-toast";

export default function ErrorMessage(text) {
  return toast.error(text);
}
