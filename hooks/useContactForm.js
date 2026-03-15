import { useState } from "react";

const REQUIRED_FIELDS_MESSAGE = "Vui lòng nhập họ tên và số điện thoại để tiếp tục.";
const SUCCESS_MESSAGE = "Đã ghi nhận thông tin. Đội ngũ sẽ sớm liên hệ để đồng hành cùng gia đình.";

export function useContactForm() {
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!name || !phone) {
      setFeedback(REQUIRED_FIELDS_MESSAGE);
      return;
    }

    setFeedback(SUCCESS_MESSAGE);
    event.currentTarget.reset();
  }

  return {
    feedback,
    handleSubmit
  };
}
