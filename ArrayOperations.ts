class ArrayOperations {
    /**
     * Splits an array of objects into two groups based on whether the specified field value matches any of the values in `separateValues`.
     * 
     * @param arrObject - The array of objects to split.
     * @param separateValues - The values to use for splitting.
     * @param field - The key in the objects to check.
     * @returns An object with two arrays: `values` containing matches and `remainder` containing non-matches.
     */
    
    static splitArrayByValue<T extends Record<string, any>>(
        arrObject: T[],
        separateValues: string[],
        field: keyof T
    ): { remainder: T[]; values: T[] } {
        const values: T[] = [];
        const remainder: T[] = [];

        arrObject.forEach((item) => {
            if (separateValues.includes(item[field])) {
                values.push(item);
            } else {
                remainder.push(item);
            }
        });

        return { values, remainder };
    }
}

export default ArrayOperations;
