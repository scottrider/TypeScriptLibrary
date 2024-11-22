// Declare and implement the method as before
declare global {
    interface String {
        isNullEmptyOrUndefined(): boolean;
        toTitleCase(): string;
    }
}

const enu = (value: String): boolean =>  value.trim() === '' || value === null || value === undefined;  

String.prototype.isNullEmptyOrUndefined = function (): boolean {
    
    return enu(this);
};

String.prototype.toTitleCase = function (): string {
    
    if (enu(this)) {
    
        return "";
    }
      
    return this[0].toUpperCase() + this.substring(1).toLowerCase();    
}

export const jsonToDelimitedString = (record: any, arrDisplay: string[], delimiter: string): string => {
    // array of string field names
    // json, dictionary, or dataset as record
    // cycle through record by field name
    // create and append delimited values and return it

    // console.log(`record ${JSON.stringify(record)}`);
    // console.log(`arrDisplay ${arrDisplay}`);
    let value = record[arrDisplay[0]];
    
    for (let i = 1; i < arrDisplay.length; ++i) {
        value += delimiter + record[arrDisplay[i]];
    }

    return value;
};

export {};
