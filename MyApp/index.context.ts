import React from "react";
import { createContext } from "react";

import { MyAppStore } from "./stores/MyAppStore";

const myAppStore = new MyAppStore();

const MyAppStoreContext = createContext(myAppStore);

export { MyAppStoreContext };
