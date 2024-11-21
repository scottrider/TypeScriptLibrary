// Declare global augmentation
declare global {
    interface String {
        highlightAllValues(pattern: string): string;
        highlightValue(pattern: string | RegExp): string;
    }
}

// Implement highlightAllValues
String.prototype.highlightAllValues = function (pattern: string): string {
    const re = new RegExp(pattern, "g");
    return this.highlightValue(re); // Pass RegExp to avoid redundant creation
};

// Implement highlightValue
String.prototype.highlightValue = function (pattern: RegExp | string): string {
    const regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, "g");
    let toggle = false;

    return this.replace(regex, (match) => {
        toggle = !toggle;
        const className = toggle ? "highlight-1" : "highlight-2";
        return `<span class="${className}">${match}</span>`;
    });
};

export {};
