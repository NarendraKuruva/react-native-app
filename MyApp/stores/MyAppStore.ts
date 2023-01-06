import { action, computed, observable } from "mobx";
import React from "react";

import { UserModel } from "./UserModel";

class MyAppStore {
  @observable usersMap!: Map<string, UserModel>;
  @observable favoriteContacts!: string[];
  @observable employeeIds!: string[];
  @observable rpsIds!: string[];
  @observable bulkEditIds!: string[];

  constructor() {
    this.init();
  }

  init() {
    this.usersMap = new Map();
    this.employeeIds = [];
    this.rpsIds = [];
    this.favoriteContacts = [];
    this.bulkEditIds = [];
  }

  @computed
  get users() {
    return Array.from(this.usersMap.values());
  }
  @computed
  get isBulkEditEnabled(): boolean {
    return this.bulkEditIds.length > 0;
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
  removeFavoriteUser(userId: string) {
    this.favoriteContacts = this.favoriteContacts.filter(
      each => each !== userId
    );
  }

  @action.bound
  addFavoriteUser(userId: string) {
    if (!this.favoriteContacts.includes(userId)) {
      this.favoriteContacts = [...this.favoriteContacts, userId];
    }
  }

  @action.bound
  toggleLikedUser(userId: string) {
    if (!this.favoriteContacts.includes(userId)) {
      this.addFavoriteUser(userId);
    } else {
      this.removeFavoriteUser(userId);
    }
  }

  isBulkEditItem = (id: string): boolean => this.bulkEditIds.includes(id);

  @action.bound
  toggleBulkEditItem = (id: string) => {
    const isBulkEditEnabled = this.isBulkEditItem(id);

    if (isBulkEditEnabled) {
      const filteredBulkEditIds = this.bulkEditIds.filter(each => each !== id);

      this.bulkEditIds = filteredBulkEditIds;
    } else {
      this.bulkEditIds.push(id);
    }
  };

  @action.bound
  clearBulkEdit() {
    this.bulkEditIds = [];
  }
  isUserLiked = (userId: string) => this.favoriteContacts.includes(userId);
}

export { MyAppStore };
