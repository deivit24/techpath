type Nullable<T> = T | null;
interface Access {
  expires: Nullable<string>;
  token: Nullable<string>;
}

interface Refresh {
  expires: Nullable<string>;
  token: Nullable<string>;
}

export interface Tokens {
  access: Access;
  refresh: Refresh;
}
