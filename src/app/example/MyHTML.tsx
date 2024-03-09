import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

export function MyComponent() {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Fetch HTML content from your server or external source
    axios.get("./example.html")
      .then(response => setHtmlContent(response.data))
      .catch(error => console.error("Error fetching HTML:", error));
  }, []);

  return (
    <div>
      {/* Your other React components */}
      {ReactHtmlParser(htmlContent)}
    </div>
  );
}
