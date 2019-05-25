
/**
 * @interface
 * use these properties as getters mostly
 * to implement custom validations
 */
export interface IValidable<T> {
  /**
   * implement as a custom `get`
   * to check if the required fields are valid
   */
  isValid: boolean;
  /**
   * implement as a custom `get`
   * to return an array of the 
   * object keys that should be required
   */
  requiredFields: (keyof T)[];
  currentlyMissing: (keyof T)[];
}