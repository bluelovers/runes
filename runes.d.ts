export declare const HIGH_SURROGATE_START = 55296;
export declare const HIGH_SURROGATE_END = 56319;
export declare const LOW_SURROGATE_START = 56320;
export declare const REGIONAL_INDICATOR_START = 127462;
export declare const REGIONAL_INDICATOR_END = 127487;
export declare const FITZPATRICK_MODIFIER_START = 127995;
export declare const FITZPATRICK_MODIFIER_END = 127999;
export declare const VARIATION_MODIFIER_START = 65024;
export declare const VARIATION_MODIFIER_END = 65039;
export declare const DIACRITICAL_MARKS_START = 8400;
export declare const DIACRITICAL_MARKS_END = 8447;
export declare const ZWJ = 8205;
export declare const GRAPHEMS: number[];
export declare function runes(string: string): string[];
export declare namespace runes {
    export var substr: typeof import("./runes").substring;
    export var substring: typeof import("./runes").substring;
    var _a: typeof import("./runes").runes;
    export var runes: typeof import("./runes").runes;
    export { _a as default };
}
export declare function nextUnits(i: number, string: string): 1 | 2 | 4;
export declare function isFirstOfSurrogatePair(string: string): boolean;
export declare function isRegionalIndicator(string: string): boolean;
export declare function isFitzpatrickModifier(string: string): boolean;
export declare function isVariationSelector(string: string): boolean;
export declare function isDiacriticalMark(string: string): boolean;
export declare function isGraphem(string: string): boolean;
export declare function isZeroWidthJoiner(string: string): boolean;
export declare function codePointFromSurrogatePair(pair: string): number;
export declare function betweenInclusive(value: number, lower: number, upper: number): boolean;
export declare function substring(string: string, start?: number, width?: number): string;
export { substring as substr };
export default runes;
