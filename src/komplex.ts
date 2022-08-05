export type Complex = [number, number];

export const i: Complex = [0, 1];

export const one: Complex = [1, 0];

export function complex(r: number = 0, i: number = 0): Complex {
    return [r, i];
}

export default complex;

export function add(a: Complex, b: Complex): Complex {
    return [a[0] + b[0], a[1] + b[1]];
}

export function sub(a: Complex, b: Complex): Complex {
    return [a[0] - b[0], a[1] - b[1]];
}

export function mul(a: Complex, b: Complex): Complex {
    return [
        (a[0] && b[0] ? a[0] * b[0] : 0) - (a[1] && b[1] ? a[1] * b[1] : 0),
        (a[0] && b[1] ? a[0] * b[1] : 0) - (a[1] && b[0] ? a[1] * b[0] : 0),
    ];
}

export function inverse(z: Complex): Complex {
    return [z[0] / (z[0] * z[0] + z[1] * z[1]), -z[1] / (z[0] * z[0] + z[1] * z[1])];
}

export function div(a: Complex, b: Complex): Complex {
    return mul(a, inverse(b));
}

export function neg(z: Complex): Complex {
    return [-z[0], -z[1]];
}

export function arg(z: Complex): number {
    return Math.atan2(z[1], z[0]);
}

export function mag(z: Complex): number {
    return Math.hypot(z[0], z[1]);
}

export function conj(z: Complex): Complex {
    return [z[0], -z[1]];
}

export function sqrt(z: Complex): Complex {
    const r = Math.sqrt(mag(z));
    const theta = arg(z) / 2;
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

export function sqr(z: Complex): Complex {
    return mul(z, z);
}

export function exp(z: Complex): Complex {
    const r = Math.exp(z[0]);
    return [r * Math.cos(z[1]), r * Math.sin(z[1])];
}

export function log(z: Complex): Complex {
    return [Math.log(mag(z)), arg(z)];
}

export function pow(z: Complex, n: number): Complex {
    const r = Math.pow(mag(z), n);
    const theta = n * arg(z);
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

export function pow_complex(z: Complex, n: Complex): Complex {
    return exp(mul(log(z), n));
}

export function sin(z: Complex): Complex {
    return [Math.sin(z[0]) * Math.cosh(z[1]), Math.cos(z[0]) * Math.sinh(z[1])];
}

export function cos(z: Complex): Complex {
    return [Math.cos(z[0]) * Math.cosh(z[1]), -Math.sin(z[0]) * Math.sinh(z[1])];
}

export function tan(z: Complex): Complex {
    return div(sin(z), cos(z));
}

export function asin(z: Complex): Complex {
    const asin = add(mul(i, z), sqrt(sub(one, sqr(z))));
    return neg(mul(i, log(asin)));
}

export function acos(z: Complex): Complex {
    return sub([Math.PI / 2, 0], asin(z));
}

export function atan(z: Complex): Complex {
    const iz = mul(i, z);
    const atan = sub(log(sub(one, iz)), log(add(one, iz)));
    return div(mul(i, atan), [2, 0]);
}

export function sinh(z: Complex): Complex {
    return [Math.sinh(z[0]) * Math.cos(z[1]), Math.cosh(z[0]) * Math.sin(z[1])];
}

export function cosh(z: Complex): Complex {
    return [Math.cosh(z[0]) * Math.cos(z[1]), Math.sinh(z[0]) * Math.sin(z[1])];
}

export function tanh(z: Complex): Complex {
    return div(sinh(z), cosh(z));
}
