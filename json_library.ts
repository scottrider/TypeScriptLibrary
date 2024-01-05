// import * as objectLib from "../libraries/ts_object_library";
import * as stringLib from "../libraries/ts_string_library"; 

export const getFormDataJSON = (e: Event): Record<string, string | number> => {
  e.preventDefault();
  const formData: Record<string, string | number> = {};

  for (let i = 0; i < (e.target as HTMLFormElement).elements.length; i++) {
    const element = (e.target as HTMLFormElement).elements[i] as HTMLFormElement;

    if (!stringLib.isEmptyNullOrUndefined(element.name) && !stringLib.isEmptyNullOrUndefined(element.value)) {
      
      if (typeof parseInt(element.value, 10) === "number" && !isNaN(element.value) && !element.name.match(/phone/gi)) {
        formData[element.name] = parseInt(element.value, 10);
        // console.log(`${element.name} is a number`);
      } else {
        formData[element.name] = element.value;
      }
    }
  }
  // console.log("App handleSideMenuSubmit formData", formData);

  return formData;
};

export const getLocalStorageJSON = (name: string): Record<string, unknown> | null => JSON.parse(localStorage.getItem(name) || 'null');

export const hasLocalStorageJSON = (name: string): boolean => {
  const item = getLocalStorageJSON(name);
  // const b = objectLib.isObject(item);

  return item !== undefined && item !== null;
};

export const hasRecord = <T>(collection: T[], field: string, value: unknown): boolean =>
  collection.find((r: any) => r[field] === value) !== undefined;

export const setLocalStorageJSON = (name: string, data: Record<string, unknown>): void =>
  localStorage.setItem(name, JSON.stringify(data));

export const removeLocalStorageJSON = (name: string): void => localStorage.removeItem(name);

export const arraysToJSON = (source: string[], fields: string[]): any => {
  try {
    
    if (source.length !== fields.length) {
      console.error("Source and fields arrays must have the same length.");
      
      return undefined;
    }
    let json: any = {};

    for (let i = 0; i < fields.length; i++) {
      json[fields[i]] = source[i];
    }

    return json;
  } catch (err) {
    console.error(err);
    
    return undefined;
  }
};
