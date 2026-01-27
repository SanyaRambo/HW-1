import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CommentsSelection from "./CommentsSelection.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CommentsSelection />
	</StrictMode>
);
