import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65ed9a86097891e65790"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
