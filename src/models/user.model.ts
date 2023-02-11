type Nullable<T> = T | null;
export interface User {
  email: Nullable<string>;
  id: Nullable<string>;
  isEmailVerified: Nullable<boolean>;
  name: Nullable<string>;
  role: Nullable<string>;
}

export interface UserSettings {
  darkMode: Nullable<boolean>;
  language: Nullable<boolean>;
  avatar: Nullable<string>;
}
