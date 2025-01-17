import '../../../../../require.js';
import '../../../../../exports.js';
import './minimapCharRenderer.js';
import './minimapCharSheet.js';
import './minimapPreBaked.js';
import '../../../../base/common/uint.js';
define(
			de[2547],
			he([1, 0, 2545, 1145, 2546, 210]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Dvb = void 0);
				class C {
					static create(m, r) {
						if (this.a && m === this.a.scale && r === this.b) return this.a;
						let u;
						return (
							w.$Cvb[m]
								? (u = new t.$Avb(w.$Cvb[m](), m))
								: (u = C.createFromSampleData(C.createSampleData(r).data, m)),
							(this.b = r),
							(this.a = u),
							u
						);
					}
					static createSampleData(m) {
						const r = document.createElement("canvas"),
							u = r.getContext("2d");
						(r.style.height = `${i.Constants.SAMPLED_CHAR_HEIGHT}px`),
							(r.height = i.Constants.SAMPLED_CHAR_HEIGHT),
							(r.width =
								i.Constants.CHAR_COUNT * i.Constants.SAMPLED_CHAR_WIDTH),
							(r.style.width =
								i.Constants.CHAR_COUNT * i.Constants.SAMPLED_CHAR_WIDTH + "px"),
							(u.fillStyle = "#ffffff"),
							(u.font = `bold ${i.Constants.SAMPLED_CHAR_HEIGHT}px ${m}`),
							(u.textBaseline = "middle");
						let a = 0;
						for (const h of i.$yvb)
							u.fillText(
								String.fromCharCode(h),
								a,
								i.Constants.SAMPLED_CHAR_HEIGHT / 2,
							),
								(a += i.Constants.SAMPLED_CHAR_WIDTH);
						return u.getImageData(
							0,
							0,
							i.Constants.CHAR_COUNT * i.Constants.SAMPLED_CHAR_WIDTH,
							i.Constants.SAMPLED_CHAR_HEIGHT,
						);
					}
					static createFromSampleData(m, r) {
						const u =
							i.Constants.SAMPLED_CHAR_HEIGHT *
							i.Constants.SAMPLED_CHAR_WIDTH *
							i.Constants.RGBA_CHANNELS_CNT *
							i.Constants.CHAR_COUNT;
						if (m.length !== u)
							throw new Error("Unexpected source in MinimapCharRenderer");
						const a = C.d(m, r);
						return new t.$Avb(a, r);
					}
					static c(m, r, u, a, h) {
						const c = i.Constants.BASE_CHAR_WIDTH * h,
							n = i.Constants.BASE_CHAR_HEIGHT * h;
						let g = a,
							p = 0;
						for (let o = 0; o < n; o++) {
							const f = (o / n) * i.Constants.SAMPLED_CHAR_HEIGHT,
								b = ((o + 1) / n) * i.Constants.SAMPLED_CHAR_HEIGHT;
							for (let s = 0; s < c; s++) {
								const l = (s / c) * i.Constants.SAMPLED_CHAR_WIDTH,
									y = ((s + 1) / c) * i.Constants.SAMPLED_CHAR_WIDTH;
								let $ = 0,
									v = 0;
								for (let I = f; I < b; I++) {
									const T =
											r + Math.floor(I) * i.Constants.RGBA_SAMPLED_ROW_WIDTH,
										P = 1 - (I - Math.floor(I));
									for (let k = l; k < y; k++) {
										const L = 1 - (k - Math.floor(k)),
											D = T + Math.floor(k) * i.Constants.RGBA_CHANNELS_CNT,
											M = L * P;
										(v += M), ($ += ((m[D] * m[D + 3]) / 255) * M);
									}
								}
								const S = $ / v;
								(p = Math.max(p, S)), (u[g++] = (0, E.$hf)(S));
							}
						}
						return p;
					}
					static d(m, r) {
						const u =
								i.Constants.BASE_CHAR_HEIGHT *
								r *
								i.Constants.BASE_CHAR_WIDTH *
								r,
							a = u * i.Constants.CHAR_COUNT,
							h = new Uint8ClampedArray(a);
						let c = 0,
							n = 0,
							g = 0;
						for (let p = 0; p < i.Constants.CHAR_COUNT; p++)
							(g = Math.max(g, this.c(m, n, h, c, r))),
								(c += u),
								(n +=
									i.Constants.SAMPLED_CHAR_WIDTH *
									i.Constants.RGBA_CHANNELS_CNT);
						if (g > 0) {
							const p = 255 / g;
							for (let o = 0; o < a; o++) h[o] *= p;
						}
						return h;
					}
				}
				e.$Dvb = C;
			},
		),
		