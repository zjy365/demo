import { ObjectId } from "mongoose";

export interface UserModelSchema {
  _id: ObjectId;
  username: string;
  // password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  github?: string;
  email?: string;
}

export type TgithubToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  token_type: "bearer";
  scope: string;
};

export type TgithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: "User";
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type UserInfo = {
  readonly name: string;
  readonly avatar: string;
} & UserSignInType;

export type Session = {
  token: string;
  user: UserInfo;
};

export const AUTH_PROVIDERS = ["github", "email"] as const;

export type AuthProvider = (typeof AUTH_PROVIDERS)[number];

export type OauthProvider = Exclude<AuthProvider, "email">;

export type UserSignInType = { [key in AuthProvider]?: string };
