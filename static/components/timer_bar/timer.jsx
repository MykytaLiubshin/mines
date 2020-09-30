import React from "react";
const began = Date.now();
export const Timer = () => setInterval(() => Date.now() - began, 3000)