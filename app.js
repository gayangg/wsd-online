// import { serve } from "./deps.js";

// const handleRequest = (request) => {
//   return new Response("My app deplyment on Render....!");
// };

// serve(handleRequest, { port: 7777 });

import { serve } from "https://deno.land/std@0.222.1/http/server.ts";

let count = 0;

const handleRequest = (request) => {
  if (request.method === "POST") {
    count++;
  }

  return new Response(count);
};

serve(handleRequest, { port: 7777 });
