export interface ToolItem {
  /**
   * value: name of tool
   */
  value: string;
}

export interface Experience {
  /**
   * value: name of tool
   */
  value: string;
  /**
   * type: type pf tool,
   */
  year: number;
}

export interface ToolValue {
  /**
   * value: name of tool
   */
  tool: string;
  /**
   * years:in string,
   */
  years: string;
}

export interface Tool {
  /**
   * value: name of tool
   */
  tool: string;
  /**
   * type: type pf tool,
   */
  years: number;
}

export interface ToolApi {
  id: string;
  value: string;
}

export interface UserToolApi {
  id: string;
  user: string;
  experience: number;
  tool: {
    id: string;
    name: string;
    color: string;
  };
}
