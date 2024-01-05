const enu = (value: String): boolean =>  value.trim() === '' || value === null || value === undefined;  

export const toTitleCase = (value: string) : string => {

  if (enu(value)) {
    
    return "";
  }
  
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

export const isEmptyNullOrUndefined = (value: String) : boolean => {

  return enu(value);
}

export const displayJoin = (record: any, arrDisplay: string[], delimiter: string): string => {
  // console.log(`record ${JSON.stringify(record)}`);
  // console.log(`arrDisplay ${arrDisplay}`);
  let value = record[arrDisplay[0]];
  for (let i = 1; i < arrDisplay.length; ++i) {
    value += delimiter + record[arrDisplay[i]];
  }
  
  return value;
};
