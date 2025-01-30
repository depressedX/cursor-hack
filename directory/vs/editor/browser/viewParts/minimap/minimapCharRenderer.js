import '../../../../../require.js';
import '../../../../../exports.js';
import './minimapCharSheet.js';
import '../../../../base/common/uint.js';
define(de[2545], he([1, 0, 1145, 210]), function (ce /*require*/,
 e /*exports*/,
 t /*minimapCharSheet*/,
 i /*uint*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Avb = void 0);
			class w {
				constructor(C, d) {
					(this.scale = d),
						(this._minimapCharRendererBrand = void 0),
						(this.a = w.e(C, 12 / 15)),
						(this.d = w.e(C, 50 / 60));
				}
				static e(C, d) {
					const m = new Uint8ClampedArray(C.length);
					for (let r = 0, u = C.length; r < u; r++) m[r] = (0, i.$hf)(C[r] * d);
					return m;
				}
				renderChar(C, d, m, r, u, a, h, c, n, g, p) {
					const o = t.Constants.BASE_CHAR_WIDTH * this.scale,
						f = t.Constants.BASE_CHAR_HEIGHT * this.scale,
						b = p ? 1 : f;
					if (d + o > C.width || m + b > C.height) {
						console.warn("bad render request outside image data");
						return;
					}
					const s = g ? this.d : this.a,
						l = (0, t.$zvb)(r, n),
						y = C.width * t.Constants.RGBA_CHANNELS_CNT,
						$ = h.r,
						v = h.g,
						S = h.b,
						I = u.r - $,
						T = u.g - v,
						P = u.b - S,
						k = Math.max(a, c),
						L = C.data;
					let D = l * o * f,
						M = m * y + d * t.Constants.RGBA_CHANNELS_CNT;
					for (let N = 0; N < b; N++) {
						let A = M;
						for (let R = 0; R < o; R++) {
							const O = (s[D++] / 255) * (a / 255);
							(L[A++] = $ + I * O),
								(L[A++] = v + T * O),
								(L[A++] = S + P * O),
								(L[A++] = k);
						}
						M += y;
					}
				}
				blockRenderChar(C, d, m, r, u, a, h, c) {
					const n = t.Constants.BASE_CHAR_WIDTH * this.scale,
						g = t.Constants.BASE_CHAR_HEIGHT * this.scale,
						p = c ? 1 : g;
					if (d + n > C.width || m + p > C.height) {
						console.warn("bad render request outside image data");
						return;
					}
					const o = C.width * t.Constants.RGBA_CHANNELS_CNT,
						f = 0.5 * (u / 255),
						b = a.r,
						s = a.g,
						l = a.b,
						y = r.r - b,
						$ = r.g - s,
						v = r.b - l,
						S = b + y * f,
						I = s + $ * f,
						T = l + v * f,
						P = Math.max(u, h),
						k = C.data;
					let L = m * o + d * t.Constants.RGBA_CHANNELS_CNT;
					for (let D = 0; D < p; D++) {
						let M = L;
						for (let N = 0; N < n; N++)
							(k[M++] = S), (k[M++] = I), (k[M++] = T), (k[M++] = P);
						L += o;
					}
				}
			}
			e.$Avb = w;
		}),
		