declare global {
    interface Object {
        toDelimitedString(arrDisplay: string[], delimiter: string): string;
    }
}

Object.prototype.toDelimitedString = (arrDisplay: string[], delimiter: string): string => {
    // parse (JSON) object into JSON object
    // array of string field names
    // cycle through record by field name
    // create and append delimited values and return it

    // console.log(`record ${JSON.stringify(record)}`);
    // console.log(`arrDisplay ${arrDisplay}`);

    try {
        
        if (typeof this !== "object" || this === null) {
            throw new Error("Input must be a valid object.");
        }        
        const data = JSON.parse(JSON.stringify(this));
        let value = data[arrDisplay[0]];
        
        for (let i = 1; i < arrDisplay.length; ++i) {
            value += delimiter + data[arrDisplay[i]];
        }
    
        return value;
    } catch(e: any) {
        console.log(e.message);
    }

    return "";
};

export {};
