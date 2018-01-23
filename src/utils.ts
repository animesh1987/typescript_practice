export type ValidSymbol = '#' | '$';

export interface GenerateConfig {
    symbol: ValidSymbol,
    len?: number
};

export function generateRandomId(symbol: ValidSymbol, len: number): string
export function generateRandomId(options: GenerateConfig): string
export function generateRandomId(optionsOrSymbol: GenerateConfig | ValidSymbol): string {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol +
            Math.random().toString(36).substr(2, 7);
    }
    return optionsOrSymbol.symbol +
        Math.random().toString(36).substr(2, optionsOrSymbol.len);
}

export function Component(options: {id: string}) {
    return (target) => {
        target.id = options.id;
    };
}

export function enumerable(isEnumerable: boolean) {
    return (
        target, propertyKey, propertyDescriptor
    ) => {
        propertyDescriptor.enumerable = isEnumerable
    }
}

export function prop(x, name) {
    console.log(x, name)
}

export function param(x, name, index) {
    console.log(x, name)
}
