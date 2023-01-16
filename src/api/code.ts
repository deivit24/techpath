declare interface codeMessageMapTypes {
  400: string;
  401: string;
  403: string;
  404: string;
  405: string;
  500: string;
  [key: string]: string;
}

const codeMessageMap: codeMessageMapTypes = {
  400: '[400]:Request parameter error',
  401: '[401]:account not logged in',
  403: '[403]:access denied',
  404: '[404]:wrong request path',
  405: '[405]:wrong request method',
  500: '[500]:Server Error',
};

const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] || 'abnormal network connection,Please try again later!';
};

export default showCodeMessage;
