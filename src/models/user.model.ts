type Nullable<T> = T | null;
export interface User {
  email: Nullable<string>;
  id: Nullable<string>;
  isEmailVerified: Nullable<boolean>;
  name: Nullable<string>;
  role: Nullable<string>;
}
