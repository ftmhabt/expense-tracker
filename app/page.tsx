"use client";

import toast from "react-hot-toast";

export default function Home() {
  const notify = () => toast("Here is your toast.");

  return <button onClick={notify}>Make me a toast</button>;
}
