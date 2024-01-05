import * as jsonLib from "json_library"; 

export const getRemoteDataAsync = async (path: string) => {
  let result: any = {};

  try {
    const response = await fetch(path);
    result = await response.json();
  } catch (error) {
    console.log("Failure in getRemoteDataAsync", error);
  }

  return result;
};

export const updateRemoteDataAsync = async (data: any) => {
  try {
    const response = await fetch("https://example.com/update-remote", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to update remote data: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to update remote data", error);
    throw error;
  }
};

export const getDataByType = (type: string): any[] => jsonLib.getLocalStorageJSON(type);

export const setDataByType = (type: string, value: Record<string, unknown>): void => {
  jsonLib.setLocalStorageJSON(type, value);
}
