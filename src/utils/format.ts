export declare interface instanceObject {
  [key: string]: string;
}

/**
 *
 * @param data Convert JSON to url parameters
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};

export default formatJsonToUrlParams;
