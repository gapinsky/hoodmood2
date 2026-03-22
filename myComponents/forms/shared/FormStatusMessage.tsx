type FormStatusMessageProps = {
  type: "success" | "error";
  message: string;
};

export default function FormStatusMessage({
  type,
  message,
}: FormStatusMessageProps) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        type === "success"
          ? "border-green-200 bg-green-50 text-green-900"
          : "border-red-200 bg-red-50 text-red-900"
      }`}
      aria-live="polite"
    >
      {message}
    </div>
  );
}