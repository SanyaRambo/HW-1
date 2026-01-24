import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Forms from "./forms.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Forms />
	</StrictMode>
);
