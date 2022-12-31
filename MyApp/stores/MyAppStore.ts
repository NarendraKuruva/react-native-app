import { action, computed, observable } from "mobx";
import React from "react";

import { UserModel } from "./UserModel";

class MyAppStore {
  @observable usersMap!: Map<string, UserModel>;
  @observable favoriteContacts!: string[];
  @observable employeeIds!: string[];
  @observable rpsIds!: string[];
  constructor() {
    this.init();
  }

  init() {
    this.usersMap = new Map();
    this.employeeIds = [];
    this.rpsIds = [];
    this.favoriteContacts = [];
  }

  @computed
  get users() {
    return Array.from(this.usersMap.values());
  }

  @action.bound
  addUser(user) {
    this.usersMap.set(user.userId, user);
  }

  @action.bound
  getUser(userId: string) {
    return this.usersMap.get(userId);
  }

  @action.bound
  setEmployeeIds(employeeIds: string[]) {
    this.employeeIds = employeeIds;
  }

  @action.bound
  setRPIds(rpsIds: string[]) {
    this.rpsIds = rpsIds;
  }

  @action.bound
  toggleLikedUser(userId: string) {
    if (!this.favoriteContacts.includes(userId)) {
      this.favoriteContacts = [...this.favoriteContacts, userId];
    } else {
      this.favoriteContacts = this.favoriteContacts.filter(
        each => each !== userId
      );
    }
  }

  isUserLiked = (userId: string) => this.favoriteContacts.includes(userId);
}

export { MyAppStore };
