import { http } from "./http";
import "./app/websocket/client";

http.listen(3333, () => console.log("Server running on port 3333"));
