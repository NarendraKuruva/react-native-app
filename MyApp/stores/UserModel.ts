import { computed } from "mobx";
import React from "react";

class UserModel {
  userId: string;
  firstName: string;
  lastName: string;
  profilePicURL: string;

  constructor(user) {
    this.userId = user.userId;
    this.profilePicURL = user.avatar;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  @computed
  get name() {
    return this.firstName + " " + this.lastName;
  }
}

export { UserModel };
