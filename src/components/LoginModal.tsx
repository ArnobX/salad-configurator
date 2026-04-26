import { useState } from "react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    // connect API here

    onClose(); // close modal after submit
  };

  if (!isOpen) return null;

  return (
    <Modal>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl flex flex-col gap-4 min-w-[300px]"
      >
        <h2 className="text-xl font-bold">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black border p-2 rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black border p-2 rounded"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#A2D135] text-black font-bold py-2 rounded hover:opacity-90"
        >
          Login
        </button>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="text-black text-sm underline"
        >
          Cancel
        </button>
      </form>
    </Modal>
  );
}