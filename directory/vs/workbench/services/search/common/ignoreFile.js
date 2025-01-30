import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/glob.js';
define(de[1861], he([1, 0, 215]), function (ce /*require*/,
 e /*exports*/,
 t /*glob*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$sXb = void 0),
				(t = mt(t));
			class i {
				constructor(E, C, d) {
					if (((this.b = C), (this.c = d), C[C.length - 1] === "\\"))
						throw Error(
							"Unexpected path format, do not use trailing backslashes",
						);
					C[C.length - 1] !== "/" && (C += "/"),
						(this.a = this.e(E, this.b, this.c));
				}
				updateContents(E) {
					this.a = this.e(E, this.b, this.c);
				}
				isPathIncludedInTraversal(E, C) {
					if (E[0] !== "/" || E[E.length - 1] === "/")
						throw Error(
							"Unexpected path format, expectred to begin with slash and end without. got:" +
								E,
						);
					return !this.a(E, C);
				}
				isArbitraryPathIgnored(E, C) {
					if (E[0] !== "/" || E[E.length - 1] === "/")
						throw Error(
							"Unexpected path format, expectred to begin with slash and end without. got:" +
								E,
						);
					const d = E.split("/").filter((u) => u);
					let m = !1,
						r = "";
					for (let u = 0; u < d.length; u++) {
						const a = u === d.length - 1,
							h = d[u];
						if (
							((r = r + "/" + h),
							!this.isPathIncludedInTraversal(r, a ? C : !0))
						) {
							m = !0;
							break;
						}
					}
					return m;
				}
				d(E, C, d) {
					const m = E.map((u) => this.f(u, C)),
						r = Object.create(null);
					for (const u of m) r[u] = !0;
					return t.$Jk(r, { trimForExclusions: d });
				}
				e(E, C, d) {
					const m = E.split(`
`)
							.map((b) => b.trim())
							.filter((b) => b && b[0] !== "#"),
						r = m.filter((b) => !b.endsWith("/")),
						u = r.filter((b) => !b.includes("!")),
						a = this.d(u, C, !0),
						h = r
							.filter((b) => b.includes("!"))
							.map((b) => b.replace(/!/g, "")),
						c = this.d(h, C, !1),
						n = m.filter((b) => !b.includes("!")),
						g = this.d(n, C, !0),
						p = m
							.filter((b) => b.includes("!"))
							.map((b) => b.replace(/!/g, "")),
						o = this.d(p, C, !1);
					return (b, s) =>
						b.startsWith(C)
							? (s && g(b) && !o(b)) || (a(b) && !c(b))
								? !0
								: d
									? d.a(b, s)
									: !1
							: !1;
				}
				f(E, C) {
					const d = E.indexOf("/");
					return (
						d === -1 || d === E.length - 1
							? (E = "**/" + E)
							: (d === 0
									? C.slice(-1) === "/" && (E = E.slice(1))
									: C.slice(-1) !== "/" && (E = "/" + E),
								(E = C + E)),
						E
					);
				}
			}
			e.$sXb = i;
		}),
		