export const i = [0, 1];
export const one = [1, 0];
export function complex(r = 0, i = 0) {
    return [r, i];
}
export default complex;
export function add(a, b) {
    return [a[0] + b[0], a[1] + b[1]];
}
export function sub(a, b) {
    return [a[0] - b[0], a[1] - b[1]];
}
export function mul(a, b) {
    return [
        (a[0] && b[0] ? a[0] * b[0] : 0) - (a[1] && b[1] ? a[1] * b[1] : 0),
        (a[0] && b[1] ? a[0] * b[1] : 0) - (a[1] && b[0] ? a[1] * b[0] : 0),
    ];
}
export function inverse(z) {
    return [z[0] / (z[0] * z[0] + z[1] * z[1]), -z[1] / (z[0] * z[0] + z[1] * z[1])];
}
export function div(a, b) {
    return mul(a, inverse(b));
}
export function neg(z) {
    return [-z[0], -z[1]];
}
export function arg(z) {
    return Math.atan2(z[1], z[0]);
}
export function mag(z) {
    return Math.hypot(z[0], z[1]);
}
export function conj(z) {
    return [z[0], -z[1]];
}
export function sqrt(z) {
    const r = Math.sqrt(mag(z));
    const theta = arg(z) / 2;
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
export function sqr(z) {
    return mul(z, z);
}
export function exp(z) {
    const r = Math.exp(z[0]);
    return [r * Math.cos(z[1]), r * Math.sin(z[1])];
}
export function log(z) {
    return [Math.log(mag(z)), arg(z)];
}
export function pow(z, n) {
    const r = Math.pow(mag(z), n);
    const theta = n * arg(z);
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
export function pow_complex(z, n) {
    return exp(mul(log(z), n));
}
export function sin(z) {
    return [Math.sin(z[0]) * Math.cosh(z[1]), Math.cos(z[0]) * Math.sinh(z[1])];
}
export function cos(z) {
    return [Math.cos(z[0]) * Math.cosh(z[1]), -Math.sin(z[0]) * Math.sinh(z[1])];
}
export function tan(z) {
    return div(sin(z), cos(z));
}
export function asin(z) {
    const asin = add(mul(i, z), sqrt(sub(one, sqr(z))));
    return neg(mul(i, log(asin)));
}
export function acos(z) {
    return sub([Math.PI / 2, 0], asin(z));
}
export function atan(z) {
    const iz = mul(i, z);
    const atan = sub(log(sub(one, iz)), log(add(one, iz)));
    return div(mul(i, atan), [2, 0]);
}
export function sinh(z) {
    return [Math.sinh(z[0]) * Math.cos(z[1]), Math.cosh(z[0]) * Math.sin(z[1])];
}
export function cosh(z) {
    return [Math.cosh(z[0]) * Math.cos(z[1]), Math.sinh(z[0]) * Math.sin(z[1])];
}
export function tanh(z) {
    return div(sinh(z), cosh(z));
}
