import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
define(de[1325], he([1, 0, 12]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bEb = void 0);
			function i(R) {
				return Array.isArray(R) ? R : [R];
			}
			const w = "",
				E = " ",
				C = "\\",
				d = /^\s+$/,
				m = /(?:[^\\]|^)\\$/,
				r = /^\\!/,
				u = /^\\#/,
				a = /\r?\n/g,
				h = /^\.*\/|^\.+$/,
				c = "/";
			let n = "node-ignore";
			typeof Symbol < "u" && (n = Symbol.for("node-ignore"));
			const g = n,
				p = (R, O, B) => Object.defineProperty(R, O, { value: B }),
				o = /([0-z])-([0-z])/g,
				f = () => !1,
				b = (R) =>
					R.replace(o, (O, B, U) =>
						B.charCodeAt(0) <= U.charCodeAt(0) ? O : w,
					),
				s = (R) => {
					const { length: O } = R;
					return R.slice(0, O - (O % 2));
				},
				l = [
					[/^\uFEFF/, () => w],
					[/\\?\s+$/, (R) => (R.indexOf("\\") === 0 ? E : w)],
					[/\\\s/g, () => E],
					[/[\\$.|*+(){^]/g, (R) => `\\${R}`],
					[/(?!\\)\?/g, () => "[^/]"],
					[/^\//, () => "^"],
					[/\//g, () => "\\/"],
					[/^\^*\\\*\\\*\\\//, () => "^(?:.*\\/)?"],
					[
						/^(?=[^^])/,
						function () {
							return /\/(?!$)/.test(this) ? "^" : "(?:^|\\/)";
						},
					],
					[
						/\\\/\\\*\\\*(?=\\\/|$)/g,
						(R, O, B) => (O + 6 < B.length ? "(?:\\/[^\\/]+)*" : "\\/.+"),
					],
					[
						/(^|[^\\]+)(\\\*)+(?=.+)/g,
						(R, O, B) => {
							const U = B.replace(/\\\*/g, "[^\\/]*");
							return O + U;
						},
					],
					[/\\\\\\(?=[$.|*+(){^])/g, () => C],
					[/\\\\/g, () => C],
					[
						/(\\)?\[([^\]/]*?)(\\*)($|\])/g,
						(R, O, B, U, z) =>
							O === C
								? `\\[${B}${s(U)}${z}`
								: z === "]" && U.length % 2 === 0
									? `[${b(B)}${U}]`
									: "[]",
					],
					[/(?:[^*])$/, (R) => (/\/$/.test(R) ? `${R}$` : `${R}(?=$|\\/$)`)],
					[
						/(\^|\\\/)?\\\*$/,
						(R, O) => `${O ? `${O}[^/]+` : "[^/]*"}(?=$|\\/$)`,
					],
				],
				y = Object.create(null),
				$ = (R, O) => {
					let B = y[R];
					return (
						B ||
							((B = l.reduce((U, z) => U.replace(z[0], z[1].bind(R)), R)),
							(y[R] = B)),
						O ? new RegExp(B, "i") : new RegExp(B)
					);
				},
				v = (R) => typeof R == "string",
				S = (R) =>
					R && v(R) && !d.test(R) && !m.test(R) && R.indexOf("#") !== 0,
				I = (R) => R.split(a);
			class T {
				constructor(O, B, U, z) {
					(this.origin = O),
						(this.pattern = B),
						(this.negative = U),
						(this.regex = z);
				}
			}
			const P = (R, O) => {
					const B = R;
					let U = !1;
					R.indexOf("!") === 0 && ((U = !0), (R = R.substr(1))),
						(R = R.replace(r, "!").replace(u, "#"));
					const z = $(R, O);
					return new T(B, R, U, z);
				},
				k = (R, O) => {
					throw new O(R);
				},
				L = (R, O, B) =>
					v(R)
						? R
							? L.isNotRelative(R)
								? B(
										`path should be a \`path.relative()\`d string, but got "${O}"`,
										RangeError,
									)
								: !0
							: B("path must not be empty", TypeError)
						: B(`path must be a string, but got \`${O}\``, TypeError),
				D = (R) => h.test(R);
			(L.isNotRelative = D), (L.convert = (R) => R);
			class M {
				constructor({
					ignorecase: O = !0,
					ignoreCase: B = O,
					allowRelativePaths: U = !1,
				} = {}) {
					p(this, g, !0),
						(this._rules = []),
						(this._ignoreCase = B),
						(this._allowRelativePaths = U),
						this._initCache();
				}
				_initCache() {
					(this._ignoreCache = Object.create(null)),
						(this._testCache = Object.create(null));
				}
				_addPattern(O) {
					if (O && O[g]) {
						(this._rules = this._rules.concat(O._rules)), (this._added = !0);
						return;
					}
					if (S(O)) {
						const B = P(O, this._ignoreCase);
						(this._added = !0), this._rules.push(B);
					}
				}
				add(O) {
					return (
						(this._added = !1),
						i(v(O) ? I(O) : O).forEach(this._addPattern, this),
						this._added && this._initCache(),
						this
					);
				}
				addPattern(O) {
					return this.add(O);
				}
				_testOne(O, B) {
					let U = !1,
						z = !1;
					return (
						this._rules.forEach((F) => {
							const { negative: x } = F;
							if ((z === x && U !== z) || (x && !U && !z && !B)) return;
							F.regex.test(O) && ((U = !x), (z = x));
						}),
						{ ignored: U, unignored: z }
					);
				}
				_test(O, B, U, z) {
					const F = O && L.convert(O);
					return L(F, O, this._allowRelativePaths ? f : k), this._t(F, B, U, z);
				}
				_t(O, B, U, z) {
					if (O in B) return B[O];
					if ((z || (z = O.split(c)), z.pop(), !z.length))
						return (B[O] = this._testOne(O, U));
					const F = this._t(z.join(c) + c, B, U, z);
					return (B[O] = F.ignored ? F : this._testOne(O, U));
				}
				ignores(O) {
					return this._test(O, this._ignoreCache, !1).ignored;
				}
				createFilter() {
					return (O) => !this.ignores(O);
				}
				filter(O) {
					return i(O).filter(this.createFilter());
				}
				test(O) {
					return this._test(O, this._testCache, !0);
				}
			}
			e.$bEb = M;
			const N = (R) => new M(R),
				A = (R) => L(R && L.convert(R), R, f);
			if (((N.isPathValid = A), (N.default = N), (e.default = N), t.$l)) {
				const R = (B) =>
					/^\\\\\?\\/.test(B) || /["<>|\u0000-\u001F]+/u.test(B)
						? B
						: B.replace(/\\/g, "/");
				L.convert = R;
				const O = /^[a-z]:\//i;
				L.isNotRelative = (B) => O.test(B) || D(B);
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	