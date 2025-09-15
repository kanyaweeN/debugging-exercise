import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Submitted: ${username}`);
    setUsername("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </label>
        <button type="submit" disabled={username.trim().length < 3}>Submit</button>
      </form>
      {(username.trim().length < 3) && <span className="error">กรุณาใส่ username อยากน้อย 3 ตัวอักษร</span>}
    </div>

  );
}
