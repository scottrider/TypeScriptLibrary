// Declare and implement the method as before
declare global {
    interface String {
        isNullEmptyOrUndefined(): boolean;
    }
}

String.prototype.isNullEmptyOrUndefined = function (): boolean {
    return this === null || this === undefined || this === "";
};

export {};