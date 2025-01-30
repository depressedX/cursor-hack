import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/path.js';
import '../../../../base/common/map.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/resources.js';
import './files.js';
import './explorerFileNestingTrie.js';
import '../../../../base/common/types.js';
define(
			de[710],
			he([1, 0, 9, 249, 54, 59, 22, 37, 24, 3, 138, 6, 19, 220, 3062, 28]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*extpath*/,
 w /*path*/,
 E /*map*/,
 C /*files*/,
 d /*strings*/,
 m /*arrays*/,
 r /*lifecycle*/,
 u /*decorators*/,
 a /*event*/,
 h /*resources*/,
 c /*files*/,
 n /*explorerFileNestingTrie*/,
 g /*types*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KWb = e.$JWb = e.$IWb = void 0);
				class p {
					constructor(s, l, y, $, v) {
						(this.f = s), (this.g = l), (this.d = new a.$re());
						const S = () =>
							(this.a = this.f
								.getWorkspace()
								.folders.map(
									(I) => new o(I.uri, y, $, v, void 0, !0, !1, !1, !1, I.name),
								));
						S(),
							(this.b = this.f.onDidChangeWorkspaceFolders(() => {
								S(), this.d.fire();
							}));
					}
					get roots() {
						return this.a;
					}
					get onDidChangeRoots() {
						return this.d.event;
					}
					findAll(s) {
						return (0, m.$Lb)(this.roots.map((l) => l.find(s)));
					}
					findClosest(s) {
						const l = this.f.getWorkspaceFolder(s);
						if (l) {
							const y = this.roots.find(($) =>
								this.g.extUri.isEqual($.resource, l.uri),
							);
							if (y) return y.find(s);
						}
						return null;
					}
					dispose() {
						(0, r.$Vc)(this.b);
					}
				}
				e.$IWb = p;
				class o {
					constructor(s, l, y, $, v, S, I, T, P, k = (0, h.$jh)(s), L, D = !1) {
						(this.resource = s),
							(this.b = l),
							(this.d = y),
							(this.f = $),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.k = T),
							(this.l = P),
							(this.m = k),
							(this.n = L),
							(this.o = D),
							(this.error = void 0),
							(this.a = !1),
							(this._isDirectoryResolved = !1);
					}
					get isExcluded() {
						return this.a ? !0 : this.g ? this.g.isExcluded : !1;
					}
					set isExcluded(s) {
						this.a = s;
					}
					hasChildren(s) {
						return this.hasNests
							? (this.nestedChildren?.some((l) => s(l)) ?? !1)
							: this.isDirectory;
					}
					get hasNests() {
						return !!this.nestedChildren?.length;
					}
					get isDirectoryResolved() {
						return this._isDirectoryResolved;
					}
					get isSymbolicLink() {
						return !!this.j;
					}
					get isDirectory() {
						return !!this.h;
					}
					get isReadonly() {
						return this.f.isReadonly(this.resource, {
							resource: this.resource,
							name: this.name,
							readonly: this.k,
							locked: this.l,
						});
					}
					get mtime() {
						return this.n;
					}
					get name() {
						return this.m;
					}
					get isUnknown() {
						return this.o;
					}
					get parent() {
						return this.g;
					}
					get root() {
						return this.g ? this.g.root : this;
					}
					get children() {
						return new Map();
					}
					q(s) {
						this.g?.removeChild(this), (this.m = s), this.g?.addChild(this);
					}
					getId() {
						return (
							this.root.resource.toString() + "::" + this.resource.toString()
						);
					}
					toString() {
						return `ExplorerItem: ${this.name}`;
					}
					get isRoot() {
						return this === this.root;
					}
					static create(s, l, y, $, v, S) {
						const I = new o(
							$.resource,
							s,
							l,
							y,
							v,
							$.isDirectory,
							$.isSymbolicLink,
							$.readonly,
							$.locked,
							$.name,
							$.mtime,
							!$.isFile && !$.isDirectory,
						);
						if (
							I.isDirectory &&
							((I._isDirectoryResolved =
								!!$.children ||
								(!!S && S.some((T) => (0, h.$hh)(T, I.resource)))),
							$.children)
						)
							for (let T = 0, P = $.children.length; T < P; T++) {
								const k = o.create(s, l, y, $.children[T], I, S);
								I.addChild(k);
							}
						return I;
					}
					static mergeLocalWithDisk(s, l) {
						if (s.resource.toString() !== l.resource.toString()) return;
						const y = s.isDirectory || l.isDirectory;
						if (
							!(y && l._isDirectoryResolved && !s._isDirectoryResolved) &&
							((l.resource = s.resource),
							l.isRoot || l.q(s.name),
							(l.h = s.isDirectory),
							(l.n = s.mtime),
							(l._isDirectoryResolved = s._isDirectoryResolved),
							(l.j = s.isSymbolicLink),
							(l.error = s.error),
							y && s._isDirectoryResolved)
						) {
							const $ = new E.$Gc();
							l.children.forEach((v) => {
								$.set(v.resource, v);
							}),
								l.children.clear(),
								s.children.forEach((v) => {
									const S = $.get(v.resource);
									S
										? (o.mergeLocalWithDisk(v, S),
											l.addChild(S),
											$.delete(v.resource))
										: l.addChild(v);
								}),
								$.forEach((v) => {
									v instanceof f && l.addChild(v);
								});
						}
					}
					addChild(s) {
						(s.g = this), s.v(!1), this.children.set(this.u(s.name), s);
					}
					getChild(s) {
						return this.children.get(this.u(s));
					}
					fetchChildren(s) {
						const l = this.d.getValue({ resource: this.root.resource }).explorer
							.fileNesting;
						return l.enabled && this.nestedChildren
							? this.nestedChildren
							: (async () => {
									if (!this._isDirectoryResolved) {
										const $ = s === c.SortOrder.Modified;
										this.error = void 0;
										try {
											const v = await this.b.resolve(this.resource, {
													resolveSingleChildDescendants: !0,
													resolveMetadata: $,
												}),
												S = o.create(this.b, this.d, this.f, v, this);
											o.mergeLocalWithDisk(S, this);
										} catch (v) {
											throw ((this.error = v), v);
										}
										this._isDirectoryResolved = !0;
									}
									const y = [];
									if (l.enabled) {
										const $ = [],
											v = [];
										for (const I of this.children.entries())
											(I[1].nestedParent = void 0),
												I[1].isDirectory ? v.push(I) : $.push(I);
										const S = this.t.nest(
											$.map(([I]) => I),
											this.u(this.name),
										);
										for (const [I, T] of $) {
											const P = S.get(I);
											if (P !== void 0) {
												T.nestedChildren = [];
												for (const k of P.keys()) {
													const L = (0, g.$wg)(this.children.get(k));
													T.nestedChildren.push(L), (L.nestedParent = T);
												}
												y.push(T);
											} else T.nestedChildren = void 0;
										}
										for (const [I, T] of v.values()) y.push(T);
									} else
										this.children.forEach(($) => {
											y.push($);
										});
									return y;
								})();
					}
					get t() {
						if (!this.root.s) {
							const s = this.d.getValue({ resource: this.root.resource })
									.explorer.fileNesting,
								l = Object.entries(s.patterns)
									.filter(
										(y) =>
											typeof y[0] == "string" &&
											typeof y[1] == "string" &&
											y[0] &&
											y[1],
									)
									.map(([y, $]) => [
										this.u(y.trim()),
										$.split(",")
											.map((v) =>
												this.u(
													v
														.trim()
														.replace(/\u200b/g, "")
														.trim(),
												),
											)
											.filter((v) => v !== ""),
									]);
							this.root.s = new n.$FWb(l);
						}
						return this.root.s;
					}
					removeChild(s) {
						(this.nestedChildren = void 0),
							this.children.delete(this.u(s.name));
					}
					forgetChildren() {
						this.children.clear(),
							(this.nestedChildren = void 0),
							(this._isDirectoryResolved = !1),
							(this.s = void 0);
					}
					u(s) {
						return this.b.hasCapability(
							this.resource,
							C.FileSystemProviderCapabilities.PathCaseSensitive,
						)
							? s
							: s.toLowerCase();
					}
					move(s) {
						this.nestedParent?.removeChild(this),
							this.g?.removeChild(this),
							s.removeChild(this),
							s.addChild(this),
							this.v(!0);
					}
					v(s) {
						this.g && (this.resource = (0, h.$nh)(this.g.resource, this.name)),
							s &&
								this.isDirectory &&
								this.children.forEach((l) => {
									l.v(!0);
								});
					}
					rename(s) {
						this.q(s.name), (this.n = s.mtime), this.v(!0);
					}
					find(s) {
						const l = !this.b.hasCapability(
							s,
							C.FileSystemProviderCapabilities.PathCaseSensitive,
						);
						return s &&
							this.resource.scheme === s.scheme &&
							(0, d.$Mf)(this.resource.authority, s.authority) &&
							(l
								? (0, d.$Nf)(s.path, this.resource.path)
								: s.path.startsWith(this.resource.path))
							? this.w(
									(0, d.$uf)(s.path, w.$lc.sep),
									this.resource.path.length,
									l,
								)
							: null;
					}
					w(s, l, y) {
						if ((0, i.$Kg)((0, d.$uf)(this.resource.path, w.$lc.sep), s, y))
							return this;
						if (this.isDirectory) {
							for (; l < s.length && s[l] === w.$lc.sep; ) l++;
							let $ = s.indexOf(w.$lc.sep, l);
							$ === -1 && ($ = s.length);
							const v = s.substring(l, $),
								S = this.children.get(this.u(v));
							if (S) return S.w(s, $, y);
						}
						return null;
					}
				}
				(e.$JWb = o), Ne([u.$ei], o.prototype, "children", null);
				class f extends o {
					constructor(s, l, y, $, v) {
						super(t.URI.file(""), s, l, y, $, v),
							(this._isDirectoryResolved = !0);
					}
				}
				e.$KWb = f;
			},
		),
		