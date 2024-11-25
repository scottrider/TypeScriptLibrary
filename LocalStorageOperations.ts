import "./StringOperations"

export class LocalStorageOperations {
    constructor() {
        // Constructor can be left empty or used for initializations.
    }

    setKey(key: string, value: string) : void {
        try {
            window.localStorage.setItem(key, value); // No JSON.stringify as value is already a string
        } catch (error) {
            console.error("Failed to set localStorage item:", error);
        }
    }

    getKey(key: string) : string|null  {
        try {
            return window.localStorage.getItem(key);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error reading localStorage item:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
            return null; // Return null consistently
        }
    }

    removeKey(key: string) : void {
        try {
            window.localStorage.removeItem(key);
            console.log(`${key} was removed from localStorage.`);
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error removing localStorage item:", error.message);
            } else {
                console.error("Unexpected error:", error);
            }
        }
    }

    updateKey(key: string, value: string) : void {
        this.setKey(key, value);
    }

    hasKey(path: string): boolean {
        
        return !this.getKey(path)?.isNullEmptyOrUndefined();
    }    
}

export default LocalStorageOperations;
