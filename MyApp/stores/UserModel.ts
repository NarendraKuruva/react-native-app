import React from "react";

class UserModel {
  userId: string;
  name: string;
  profilePicURL: string;

  constructor(user) {
    this.userId = user.userId;
    this.name = user.name;
    this.profilePicURL = user.profilePicURL;
  }
}

export { UserModel };
