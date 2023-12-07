import { FormEvent, useRef } from "react";

export function Contact() {
  const contactUsRef = useRef({ email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactUsRef.current) return;
    if (contactUsRef.current.email && contactUsRef.current.message) {
      alert("Successfully got your response");
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px",
          borderColor: "gray-500",
          padding: "4px",
        }}
        className="border border-gray-500 p-4 rounded-md"
      >
        <h2 className="text-3xl font-bold">Welcome to Contact us page</h2>
        <p className="text-xs font-bold">
          Go ahead and contact our support today!
        </p>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "10px",
          }}
          className="flex flex-col gap-3 mt-4"
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className="flex flex-col font-bold"
          >
            Email
            <input
              type="email"
              onChange={(e) => {
                contactUsRef.current.email = e.target.value.trim();
              }}
              className="border border-black rounded-md text-sm p-1"
              placeholder="Enter your email"
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className="flex flex-col font-bold"
          >
            Message
            <textarea
              onChange={(e) => {
                contactUsRef.current.message = e.target.value.trim();
              }}
              className="border border-black rounded-md text-sm p-1"
              placeholder="Enter your message"
            />
          </label>
          <button className="font-bold rounded-md bg-yellow-300 p-1 border border-black text-gray-600">
            Contact
          </button>
        </form>
      </div>
    </div>
  );
}
