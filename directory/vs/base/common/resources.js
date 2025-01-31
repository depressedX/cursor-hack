import '../../../require.js';
import '../../../exports.js';
import './charCode.js';
import './extpath.js';
import './network.js';
import './path.js';
import './platform.js';
import './strings.js';
import './uri.js';
define(
			de[19],
			he([1, 0, 120, 249, 23, 54, 12, 37, 9]),
			function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*extpath*/,
 w /*network*/,
 E /*path*/,
 C /*platform*/,
 d /*strings*/,
 m /*uri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DataUri =
						e.$vh =
						e.$uh =
						e.$th =
						e.$sh =
						e.$rh =
						e.$qh =
						e.$ph =
						e.$oh =
						e.$nh =
						e.$mh =
						e.$lh =
						e.$kh =
						e.$jh =
						e.$ih =
						e.$hh =
						e.$gh =
						e.$fh =
						e.$eh =
						e.$dh =
						e.$ch =
							void 0),
					(e.$bh = r),
					(e.$wh = a),
					(e.$xh = c),
					(i = mt(i)),
					(E = mt(E));
				function r(n) {
					return (0, m.$Cc)(n, !0);
				}
				class u {
					constructor(g) {
						this.a = g;
					}
					compare(g, p, o = !1) {
						return g === p
							? 0
							: (0, d.$Ff)(
									this.getComparisonKey(g, o),
									this.getComparisonKey(p, o),
								);
					}
					isEqual(g, p, o = !1) {
						return g === p
							? !0
							: !g || !p
								? !1
								: this.getComparisonKey(g, o) === this.getComparisonKey(p, o);
					}
					getComparisonKey(g, p = !1) {
						return g
							.with({
								path: this.a(g) ? g.path.toLowerCase() : void 0,
								fragment: p ? null : void 0,
							})
							.toString();
					}
					ignorePathCasing(g) {
						return this.a(g);
					}
					isEqualOrParent(g, p, o = !1) {
						if (g.scheme === p.scheme) {
							if (g.scheme === w.Schemas.file)
								return (
									i.$Lg(r(g), r(p), this.a(g)) &&
									g.query === p.query &&
									(o || g.fragment === p.fragment)
								);
							if ((0, e.$sh)(g.authority, p.authority))
								return (
									i.$Lg(g.path, p.path, this.a(g), "/") &&
									g.query === p.query &&
									(o || g.fragment === p.fragment)
								);
						}
						return !1;
					}
					joinPath(g, ...p) {
						return m.URI.joinPath(g, ...p);
					}
					basenameOrAuthority(g) {
						return (0, e.$kh)(g) || g.authority;
					}
					basename(g) {
						return E.$lc.basename(g.path);
					}
					extname(g) {
						return E.$lc.extname(g.path);
					}
					dirname(g) {
						if (g.path.length === 0) return g;
						let p;
						return (
							g.scheme === w.Schemas.file
								? (p = m.URI.file(E.$rc(r(g))).path)
								: ((p = E.$lc.dirname(g.path)),
									g.authority &&
										p.length &&
										p.charCodeAt(0) !== t.CharCode.Slash &&
										(console.error(
											`dirname("${g.toString})) resulted in a relative path`,
										),
										(p = "/"))),
							g.with({ path: p })
						);
					}
					normalizePath(g) {
						if (!g.path.length) return g;
						let p;
						return (
							g.scheme === w.Schemas.file
								? (p = m.URI.file(E.$mc(r(g))).path)
								: (p = E.$lc.normalize(g.path)),
							g.with({ path: p })
						);
					}
					relativePath(g, p) {
						if (g.scheme !== p.scheme || !(0, e.$sh)(g.authority, p.authority))
							return;
						if (g.scheme === w.Schemas.file) {
							const b = E.$qc(r(g), r(p));
							return C.$l ? i.$Fg(b) : b;
						}
						let o = g.path || "/";
						const f = p.path || "/";
						if (this.a(g)) {
							let b = 0;
							for (
								const s = Math.min(o.length, f.length);
								b < s &&
								!(
									o.charCodeAt(b) !== f.charCodeAt(b) &&
									o.charAt(b).toLowerCase() !== f.charAt(b).toLowerCase()
								);
								b++
							);
							o = f.substr(0, b) + o.substr(b);
						}
						return E.$lc.relative(o, f);
					}
					resolvePath(g, p) {
						if (g.scheme === w.Schemas.file) {
							const o = m.URI.file(E.$pc(r(g), p));
							return g.with({ authority: o.authority, path: o.path });
						}
						return (p = i.$Gg(p)), g.with({ path: E.$lc.resolve(g.path, p) });
					}
					isAbsolutePath(g) {
						return !!g.path && g.path[0] === "/";
					}
					isEqualAuthority(g, p) {
						return (
							g === p || (g !== void 0 && p !== void 0 && (0, d.$Mf)(g, p))
						);
					}
					hasTrailingPathSeparator(g, p = E.sep) {
						if (g.scheme === w.Schemas.file) {
							const o = r(g);
							return o.length > i.$Hg(o).length && o[o.length - 1] === p;
						} else {
							const o = g.path;
							return (
								o.length > 1 &&
								o.charCodeAt(o.length - 1) === t.CharCode.Slash &&
								!/^[a-zA-Z]:(\/$|\\$)/.test(g.fsPath)
							);
						}
					}
					removeTrailingPathSeparator(g, p = E.sep) {
						return (0, e.$th)(g, p)
							? g.with({ path: g.path.substr(0, g.path.length - 1) })
							: g;
					}
					addTrailingPathSeparator(g, p = E.sep) {
						let o = !1;
						if (g.scheme === w.Schemas.file) {
							const f = r(g);
							o =
								f !== void 0 &&
								f.length === i.$Hg(f).length &&
								f[f.length - 1] === p;
						} else {
							p = "/";
							const f = g.path;
							o =
								f.length === 1 &&
								f.charCodeAt(f.length - 1) === t.CharCode.Slash;
						}
						return !o && !(0, e.$th)(g, p) ? g.with({ path: g.path + "/" }) : g;
					}
				}
				(e.$ch = u),
					(e.$dh = new u(() => !1)),
					(e.$eh = new u((n) => (n.scheme === w.Schemas.file ? !C.$n : !0))),
					(e.$fh = new u((n) => !0)),
					(e.$gh = e.$dh.isEqual.bind(e.$dh)),
					(e.$hh = e.$dh.isEqualOrParent.bind(e.$dh)),
					(e.$ih = e.$dh.getComparisonKey.bind(e.$dh)),
					(e.$jh = e.$dh.basenameOrAuthority.bind(e.$dh)),
					(e.$kh = e.$dh.basename.bind(e.$dh)),
					(e.$lh = e.$dh.extname.bind(e.$dh)),
					(e.$mh = e.$dh.dirname.bind(e.$dh)),
					(e.$nh = e.$dh.joinPath.bind(e.$dh)),
					(e.$oh = e.$dh.normalizePath.bind(e.$dh)),
					(e.$ph = e.$dh.relativePath.bind(e.$dh)),
					(e.$qh = e.$dh.resolvePath.bind(e.$dh)),
					(e.$rh = e.$dh.isAbsolutePath.bind(e.$dh)),
					(e.$sh = e.$dh.isEqualAuthority.bind(e.$dh)),
					(e.$th = e.$dh.hasTrailingPathSeparator.bind(e.$dh)),
					(e.$uh = e.$dh.removeTrailingPathSeparator.bind(e.$dh)),
					(e.$vh = e.$dh.addTrailingPathSeparator.bind(e.$dh));
				function a(n, g) {
					const p = [];
					for (let o = 0; o < n.length; o++) {
						const f = g(n[o]);
						n.some((b, s) => (s === o ? !1 : (0, e.$hh)(f, g(b)))) ||
							p.push(n[o]);
					}
					return p;
				}
				var h;
				(function (n) {
					(n.META_DATA_LABEL = "label"),
						(n.META_DATA_DESCRIPTION = "description"),
						(n.META_DATA_SIZE = "size"),
						(n.META_DATA_MIME = "mime");
					function g(p) {
						const o = new Map();
						p.path
							.substring(p.path.indexOf(";") + 1, p.path.lastIndexOf(";"))
							.split(";")
							.forEach((s) => {
								const [l, y] = s.split(":");
								l && y && o.set(l, y);
							});
						const b = p.path.substring(0, p.path.indexOf(";"));
						return b && o.set(n.META_DATA_MIME, b), o;
					}
					n.parseMetaData = g;
				})(h || (e.DataUri = h = {}));
				function c(n, g, p) {
					if (g) {
						let o = n.path;
						return (
							o && o[0] !== E.$lc.sep && (o = E.$lc.sep + o),
							n.with({ scheme: p, authority: g, path: o })
						);
					}
					return n.with({ scheme: p });
				}
			},
		)
