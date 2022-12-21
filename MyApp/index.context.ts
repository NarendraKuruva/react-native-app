import React from "react";
import { useContext } from "react";

import { MyAppStore } from "./stores/MyAppStore";

const myAppStore = new MyAppStore();

const MyAppStoreContext = useContext(myAppStore);

export { MyAppStoreContext };
