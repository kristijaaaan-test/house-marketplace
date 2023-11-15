import React from "react";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useUser } from "./useUser";

function Contact() {
  const { landlordId } = useParams();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
  const { user } = useUser();

  return (
    <div className="pageContainer">
      <header className="pageHeader">Contact Landlord</header>

      <main>
        <div className="contactLandlord">
          <p className="landlordName">
            Contact {user?.user_metadata?.name || "landlord"}
          </p>
        </div>

        <form className="messageForm">
          <div className="messageDiv">
            <label htmlFor="message" className="messageLabel">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <a
            href={`mailto:${user?.email}?Subject=${searchParams.get(
              "listingName"
            )}&body=${message}`}
          >
            <button type="button" className="primaryButton">
              Send message
            </button>
          </a>
        </form>
      </main>
    </div>
  );
}

export default Contact;
