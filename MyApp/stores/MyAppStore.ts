import { action, observable } from "mobx";
import React from "react";

import { UserModel } from "./UserModel";

class MyAppStore {
  @observable users!: UserModel[];
  @observable employeeIds!: string[];
  @observable rpsIds!: string[];
  constructor() {
    this.init();
  }

  init() {
    this.users = [];
    this.employeeIds = [];
    this.rpsIds = [];
  }

  @action.bound
  setUsers(users) {
    this.users = users;
  }

  @action.bound
  setEmployeeIds(employeeIds: string[]) {
    this.employeeIds = employeeIds;
  }

  @action.bound
  setRPIds(rpsIds: string[]) {
    this.rpsIds = rpsIds;
  }
}

export { MyAppStore };
