import { faker } from "@faker-js/faker";

export const cardsData = [
  { title: "Title 1", description: "Hi This is Test" },
  { title: "Title 2", description: "Hi This is Test" },
  { title: "Title 3", description: "Hi This is Test" },
  { title: "Title 4", description: "Hi This is Test" },
  { title: "Title 5", description: "Hi This is Test" },
  { title: "Title 6", description: "Hi This is Test" },
  { title: "Title 7", description: "Hi This is Test" },
  { title: "Title 8", description: "Hi This is Test" },
  { title: "Title 9", description: "Hi This is Test" },
  { title: "Title 10", description: "Hi This is Test" },
  { title: "Title 11", description: "Hi This is Test" },
  { title: "Title 12", description: "Hi This is Test" },
  { title: "Title 13", description: "Hi This is Test" },
  { title: "Title 14", description: "Hi This is Test" },
  { title: "Title 15", description: "Hi This is Test" },
  { title: "Title 16", description: "Hi This is Test" },
  { title: "Title 17", description: "Hi This is Test" },
  { title: "Title 18", description: "Hi This is Test" },
  { title: "Title 19", description: "Hi This is Test" },
  { title: "Title 20", description: "Hi This is Test" },
];

export const homeTabsData = [
  { id: "1", name: "Narendra", description: "Frontend Developer" },
  { id: "2", name: "Muneera", description: "Frontend Developer" },
  { id: "3", name: "Nagendra", description: "Frontend Developer" },
  { id: "4", name: "Pavan", description: "Backend Developer" },
  { id: "5", name: "Ravi Teja", description: "Backend Developer" },
  { id: "6", name: "Lalitha", description: "Frontend Developer" },
  { id: "7", name: "Mahendra", description: "Backend Developer" },
];

// import { faker } from '@faker-js/faker/locale/de';

export const USERS: User[] = [];

export function createRandomUser(): User {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  USERS.push(createRandomUser());
});

export const keyRoles = [...Array(3)].map(() => {
  const data = {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toDateString(),
    registeredAt: faker.date.past(),
    profilePic: faker.image.avatar(75, 75, "people"),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sex(),
    description: faker.lorem.paragraph(10),
    job: faker.name.jobTitle(),
    jobDescription: faker.name.jobDescriptor(),
    hobbies: [...Array(20)].map(() => {
      let count = 0;
      count = count + 1;
      return {
        count: `Hobby ${count}`,
        hobby: faker.word.verb(),
      };
    }),
  };
  return data;
});

export const usersData = [...Array(20)].map(() => {
  const data = {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate().toDateString(),
    registeredAt: faker.date.past(),
    profilePic: faker.image.avatar(75, 75, "people"),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.name.sex(),
    description: faker.lorem.paragraph(10),
    job: faker.name.jobTitle(),
    jobDescription: faker.name.jobDescriptor(),
    hobbies: [...Array(20)].map(() => {
      let count = 0;
      count = count + 1;
      return {
        count: `Hobby ${count}`,
        hobby: faker.word.verb(),
      };
    }),
  };
  return data;
});

export const usersGroupsData = [
  { title: "Main Roles", data: keyRoles },
  { title: "Employees", data: usersData },
];
