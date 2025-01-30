import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../editor.js';
import './editorInput.js';
import './sideBySideEditorInput.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/registry/common/platform.js';
import '../../../base/common/arrays.js';
define(
			de[1287],
			he([1, 0, 6, 44, 223, 313, 5, 10, 3, 30, 24]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*editor*/,
 w /*editorInput*/,
 E /*sideBySideEditorInput*/,
 C /*instantiation*/,
 d /*configuration*/,
 m /*lifecycle*/,
 r /*platform*/,
 u /*arrays*/) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qY = void 0),
					(e.$lY = c),
					(e.$mY = n),
					(e.$nY = g),
					(e.$oY = p),
					(e.$pY = o);
				const h = {
					LEFT: "left",
					RIGHT: "right",
					FIRST: "first",
					LAST: "last",
				};
				function c(b) {
					const s = b;
					return !!(
						s &&
						typeof s == "object" &&
						Array.isArray(s.editors) &&
						Array.isArray(s.mru)
					);
				}
				function n(b) {
					const s = b;
					return s.editor && s.editorIndex !== void 0;
				}
				function g(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_OPEN &&
						s.editorIndex !== void 0
					);
				}
				function p(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_MOVE &&
						s.editorIndex !== void 0 &&
						s.oldEditorIndex !== void 0
					);
				}
				function o(b) {
					const s = b;
					return (
						s.kind === i.GroupModelChangeKind.EDITOR_CLOSE &&
						s.editorIndex !== void 0 &&
						s.context !== void 0 &&
						s.sticky !== void 0
					);
				}
				let f = class extends m.$1c {
					static {
						a = this;
					}
					static {
						this.a = 0;
					}
					get id() {
						return this.c;
					}
					get n() {
						return this.m[0] ?? null;
					}
					constructor(s, l, y) {
						super(),
							(this.w = l),
							(this.y = y),
							(this.b = this.D(new t.$re({ leakWarningThreshold: 500 }))),
							(this.onDidModelChange = this.b.event),
							(this.f = []),
							(this.g = []),
							(this.h = new Set()),
							(this.j = !1),
							(this.m = []),
							(this.q = null),
							(this.r = -1),
							(this.s = new Set()),
							c(s) ? (this.c = this.W(s)) : (this.c = a.a++),
							this.C(),
							this.z();
					}
					z() {
						this.D(this.y.onDidChangeConfiguration((s) => this.C(s)));
					}
					C(s) {
						(s &&
							!s.affectsConfiguration("workbench.editor.openPositioning") &&
							!s.affectsConfiguration(
								"workbench.editor.focusRecentEditorAfterClose",
							)) ||
							((this.t = this.y.getValue("workbench.editor.openPositioning")),
							(this.u = this.y.getValue(
								"workbench.editor.focusRecentEditorAfterClose",
							)));
					}
					get count() {
						return this.f.length;
					}
					get stickyCount() {
						return this.r + 1;
					}
					getEditors(s, l) {
						const y =
							s === i.EditorsOrder.MOST_RECENTLY_ACTIVE
								? this.g.slice(0)
								: this.f.slice(0);
						return l?.excludeSticky
							? s === i.EditorsOrder.MOST_RECENTLY_ACTIVE
								? y.filter(($) => !this.isSticky($))
								: y.slice(this.r + 1)
							: y;
					}
					getEditorByIndex(s) {
						return this.f[s];
					}
					get activeEditor() {
						return this.n;
					}
					isActive(s) {
						return this.U(this.n, s);
					}
					get previewEditor() {
						return this.q;
					}
					openEditor(s, l) {
						const y =
								l?.sticky ||
								(typeof l?.index == "number" && this.isSticky(l.index)),
							$ = l?.pinned || l?.sticky,
							v = !!l?.transient,
							S =
								l?.active ||
								!this.activeEditor ||
								(!$ && this.q === this.activeEditor),
							I = this.findEditor(s, l);
						if (I) {
							const [T, P] = I;
							return (
								this.R(T, P, v === !1 ? !1 : this.isTransient(T)),
								$ && this.N(T, P),
								this.setSelection(
									S ? T : this.activeEditor,
									l?.inactiveSelection ?? [],
								),
								l && typeof l.index == "number" && this.moveEditor(T, l.index),
								y && this.P(T, this.indexOf(T)),
								{ editor: T, isNew: !1 }
							);
						} else {
							const T = s,
								P = this.indexOf(this.n);
							let k;
							if (
								(l && typeof l.index == "number"
									? (k = l.index)
									: this.t === h.FIRST
										? ((k = 0), !y && this.isSticky(k) && (k = this.r + 1))
										: this.t === h.LAST
											? (k = this.f.length)
											: (this.t === h.LEFT
													? P === 0 || !this.f.length
														? (k = 0)
														: (k = P)
													: (k = P + 1),
												!y && this.isSticky(k) && (k = this.r + 1)),
								y && (this.r++, this.isSticky(k) || (k = this.r)),
								($ || !this.q) && this.S(k, !1, T),
								v && this.R(T, k, !0),
								!$)
							) {
								if (this.q) {
									const D = this.indexOf(this.q);
									k > D && k--, this.G(this.q, T, k, !S);
								}
								this.q = T;
							}
							this.F(T);
							const L = {
								kind: i.GroupModelChangeKind.EDITOR_OPEN,
								editor: T,
								editorIndex: k,
							};
							return (
								this.b.fire(L),
								this.setSelection(
									S ? T : this.activeEditor,
									l?.inactiveSelection ?? [],
								),
								{ editor: T, isNew: !0 }
							);
						}
					}
					F(s) {
						const l = new m.$Zc();
						this.h.add(l),
							l.add(
								t.Event.once(s.onWillDispose)(() => {
									const y = this.f.indexOf(s);
									if (y >= 0) {
										const $ = {
											kind: i.GroupModelChangeKind.EDITOR_WILL_DISPOSE,
											editor: s,
											editorIndex: y,
										};
										this.b.fire($);
									}
								}),
							),
							l.add(
								s.onDidChangeDirty(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_DIRTY,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								s.onDidChangeLabel(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_LABEL,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								s.onDidChangeCapabilities(() => {
									const y = {
										kind: i.GroupModelChangeKind.EDITOR_CAPABILITIES,
										editor: s,
										editorIndex: this.f.indexOf(s),
									};
									this.b.fire(y);
								}),
							),
							l.add(
								this.onDidModelChange((y) => {
									y.kind === i.GroupModelChangeKind.EDITOR_CLOSE &&
										y.editor?.matches(s) &&
										((0, m.$Vc)(l), this.h.delete(l));
								}),
							);
					}
					G(s, l, y, $ = !0) {
						const v = this.H(s, i.EditorCloseContext.REPLACE, $);
						if ((this.S(y, !1, l), v)) {
							const S = { kind: i.GroupModelChangeKind.EDITOR_CLOSE, ...v };
							this.b.fire(S);
						}
					}
					closeEditor(s, l = i.EditorCloseContext.UNKNOWN, y = !0) {
						const $ = this.H(s, l, y);
						if ($) {
							const v = { kind: i.GroupModelChangeKind.EDITOR_CLOSE, ...$ };
							return this.b.fire(v), $;
						}
					}
					H(s, l, y) {
						const $ = this.indexOf(s);
						if ($ === -1) return;
						const v = this.f[$],
							S = this.isSticky($),
							I = this.n === v;
						if (y && I)
							if (this.g.length > 1) {
								let T;
								this.u
									? (T = this.g[1])
									: $ === this.f.length - 1
										? (T = this.f[$ - 1])
										: (T = this.f[$ + 1]);
								const P = this.m.filter((k) => k !== v && k !== T);
								this.M(T, this.f.indexOf(T), P);
							} else this.M(null, void 0, []);
						else if (!I && this.L(v)) {
							const T = this.m.filter(
								(P) => P !== v && P !== this.activeEditor,
							);
							this.M(this.activeEditor, this.indexOf(this.activeEditor), T);
						}
						return (
							this.q === v && (this.q = null),
							this.s.delete(v),
							this.S($, !0),
							{ editor: v, sticky: S, editorIndex: $, context: l }
						);
					}
					moveEditor(s, l) {
						l >= this.f.length ? (l = this.f.length - 1) : l < 0 && (l = 0);
						const y = this.indexOf(s);
						if (y < 0 || l === y) return;
						const $ = this.f[y],
							v = this.r;
						this.isSticky(y) && l > this.r
							? this.r--
							: !this.isSticky(y) && l <= this.r && this.r++,
							this.f.splice(y, 1),
							this.f.splice(l, 0, $);
						const S = {
							kind: i.GroupModelChangeKind.EDITOR_MOVE,
							editor: $,
							oldEditorIndex: y,
							editorIndex: l,
						};
						if ((this.b.fire(S), v !== this.r)) {
							const I = {
								kind: i.GroupModelChangeKind.EDITOR_STICKY,
								editor: $,
								editorIndex: l,
							};
							this.b.fire(I);
						}
						return $;
					}
					setActive(s) {
						let l;
						return s ? (l = this.J(s)) : this.I(), l;
					}
					I() {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_ACTIVE });
					}
					J(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.M(y, $, []), y;
					}
					get selectedEditors() {
						return this.f.filter((s) => this.L(s));
					}
					isSelected(s) {
						let l;
						return (
							typeof s == "number"
								? (l = this.f[s])
								: (l = this.findEditor(s)?.[0]),
							!!l && this.L(l)
						);
					}
					L(s) {
						return this.m.includes(s);
					}
					setSelection(s, l) {
						const y = this.findEditor(s);
						if (!y) return;
						const [$, v] = y,
							S = new Set();
						for (const I of l) {
							const T = this.findEditor(I);
							if (!T) return;
							const [P] = T;
							P !== $ && S.add(P);
						}
						this.M($, v, Array.from(S));
					}
					M(s, l, y) {
						const $ = this.activeEditor,
							v = this.m;
						let S;
						s ? (S = [s, ...y]) : (S = []), (this.m = S);
						const I = s && typeof l == "number" && $ !== s;
						if (I) {
							const T = this.indexOf(s, this.g);
							this.g.splice(T, 1), this.g.unshift(s);
							const P = {
								kind: i.GroupModelChangeKind.EDITOR_ACTIVE,
								editor: s,
								editorIndex: l,
							};
							this.b.fire(P);
						}
						if (I || v.length !== S.length || v.some((T) => !S.includes(T))) {
							const T = { kind: i.GroupModelChangeKind.EDITORS_SELECTION };
							this.b.fire(T);
						}
					}
					setIndex(s) {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_INDEX });
					}
					setLabel(s) {
						this.b.fire({ kind: i.GroupModelChangeKind.GROUP_LABEL });
					}
					pin(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.N(y, $), y;
					}
					N(s, l) {
						if (this.isPinned(s)) return;
						this.setTransient(s, !1), (this.q = null);
						const y = {
							kind: i.GroupModelChangeKind.EDITOR_PIN,
							editor: s,
							editorIndex: l,
						};
						this.b.fire(y);
					}
					unpin(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.O(y, $), y;
					}
					O(s, l) {
						if (!this.isPinned(s)) return;
						const y = this.q;
						this.q = s;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_PIN,
							editor: s,
							editorIndex: l,
						};
						this.b.fire($),
							y && this.closeEditor(y, i.EditorCloseContext.UNPIN);
					}
					isPinned(s) {
						let l;
						return (
							typeof s == "number" ? (l = this.f[s]) : (l = s),
							!this.U(this.q, l)
						);
					}
					stick(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.P(y, $), y;
					}
					P(s, l) {
						if (this.isSticky(l)) return;
						this.pin(s);
						const y = this.r + 1;
						this.moveEditor(s, y), this.r++;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_STICKY,
							editor: s,
							editorIndex: y,
						};
						this.b.fire($);
					}
					unstick(s) {
						const l = this.findEditor(s);
						if (!l) return;
						const [y, $] = l;
						return this.Q(y, $), y;
					}
					Q(s, l) {
						if (!this.isSticky(l)) return;
						const y = this.r;
						this.moveEditor(s, y), this.r--;
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_STICKY,
							editor: s,
							editorIndex: y,
						};
						this.b.fire($);
					}
					isSticky(s) {
						if (this.r < 0) return !1;
						let l;
						return (
							typeof s == "number" ? (l = s) : (l = this.indexOf(s)),
							l < 0 ? !1 : l <= this.r
						);
					}
					setTransient(s, l) {
						if (!l && this.s.size === 0) return;
						const y = this.findEditor(s);
						if (!y) return;
						const [$, v] = y;
						return this.R($, v, l), $;
					}
					R(s, l, y) {
						if (y) {
							if (this.s.has(s)) return;
							this.s.add(s);
						} else {
							if (!this.s.has(s)) return;
							this.s.delete(s);
						}
						const $ = {
							kind: i.GroupModelChangeKind.EDITOR_TRANSIENT,
							editor: s,
							editorIndex: l,
						};
						this.b.fire($);
					}
					isTransient(s) {
						if (this.s.size === 0) return !1;
						let l;
						return (
							typeof s == "number"
								? (l = this.f[s])
								: (l = this.findEditor(s)?.[0]),
							!!l && this.s.has(l)
						);
					}
					S(s, l, y) {
						const $ = this.f[s];
						if (
							(l && this.isSticky(s) && this.r--,
							y ? this.f.splice(s, l ? 1 : 0, y) : this.f.splice(s, l ? 1 : 0),
							!l && y)
						)
							this.g.length === 0 ? this.g.push(y) : this.g.splice(1, 0, y);
						else {
							const v = this.indexOf($, this.g);
							l && !y ? this.g.splice(v, 1) : l && y && this.g.splice(v, 1, y);
						}
					}
					indexOf(s, l = this.f, y) {
						let $ = -1;
						if (!s) return $;
						for (let v = 0; v < l.length; v++) {
							const S = l[v];
							if (this.U(S, s, y))
								if (
									y?.supportSideBySide &&
									S instanceof E.$iY &&
									!(s instanceof E.$iY)
								)
									$ = v;
								else {
									$ = v;
									break;
								}
						}
						return $;
					}
					findEditor(s, l) {
						const y = this.indexOf(s, this.f, l);
						if (y !== -1) return [this.f[y], y];
					}
					isFirst(s, l = this.f) {
						return this.U(l[0], s);
					}
					isLast(s, l = this.f) {
						return this.U(l[l.length - 1], s);
					}
					contains(s, l) {
						return this.indexOf(s, this.f, l) !== -1;
					}
					U(s, l, y) {
						if (!s || !l) return !1;
						if (
							y?.supportSideBySide &&
							s instanceof E.$iY &&
							!(l instanceof E.$iY)
						)
							switch (y.supportSideBySide) {
								case i.SideBySideEditor.ANY:
									if (this.U(s.primary, l, y) || this.U(s.secondary, l, y))
										return !0;
									break;
								case i.SideBySideEditor.BOTH:
									if (this.U(s.primary, l, y) && this.U(s.secondary, l, y))
										return !0;
									break;
							}
						const $ = s === l;
						return y?.strictEquals ? $ : $ || s.matches(l);
					}
					get isLocked() {
						return this.j;
					}
					lock(s) {
						this.isLocked !== s &&
							((this.j = s),
							this.b.fire({ kind: i.GroupModelChangeKind.GROUP_LOCKED }));
					}
					clone() {
						const s = this.w.createInstance(a, void 0);
						(s.f = this.f.slice(0)),
							(s.g = this.g.slice(0)),
							(s.q = this.q),
							(s.m = this.m.slice(0)),
							(s.r = this.r);
						for (const l of s.f) s.F(l);
						return s;
					}
					serialize() {
						const s = r.$Io.as(i.$a1.EditorFactory),
							l = [],
							y = [];
						let $,
							v = this.r;
						for (let I = 0; I < this.f.length; I++) {
							const T = this.f[I];
							let P = !1;
							const k = s.getEditorSerializer(T);
							if (k) {
								const L = k.canSerialize(T) ? k.serialize(T) : void 0;
								typeof L == "string"
									? ((P = !0),
										y.push({ id: T.typeId, value: L }),
										l.push(T),
										this.q === T && ($ = l.length - 1))
									: (P = !1);
							}
							!P && this.isSticky(I) && v--;
						}
						const S = this.g
							.map((I) => this.indexOf(I, l))
							.filter((I) => I >= 0);
						return {
							id: this.id,
							locked: this.j ? !0 : void 0,
							editors: y,
							mru: S,
							preview: $,
							sticky: v >= 0 ? v : void 0,
						};
					}
					W(s) {
						const l = r.$Io.as(i.$a1.EditorFactory);
						return (
							typeof s.id == "number"
								? ((this.c = s.id), (a.a = Math.max(s.id + 1, a.a)))
								: (this.c = a.a++),
							s.locked && (this.j = !0),
							(this.f = (0, u.$Lb)(
								s.editors.map((y, $) => {
									let v;
									const S = l.getEditorSerializer(y.id);
									if (S) {
										const I = S.deserialize(this.w, y.value);
										I instanceof w.$LO && ((v = I), this.F(v));
									}
									return (
										!v &&
											typeof s.sticky == "number" &&
											$ <= s.sticky &&
											s.sticky--,
										v
									);
								}),
							)),
							(this.g = (0, u.$Lb)(s.mru.map((y) => this.f[y]))),
							(this.m = this.g.length > 0 ? [this.g[0]] : []),
							typeof s.preview == "number" && (this.q = this.f[s.preview]),
							typeof s.sticky == "number" && (this.r = s.sticky),
							this.c
						);
					}
					dispose() {
						(0, m.$Vc)(Array.from(this.h)),
							this.h.clear(),
							this.s.clear(),
							super.dispose();
					}
				};
				(e.$qY = f), (e.$qY = f = a = Ne([j(1, C.$Li), j(2, d.$gj)], f));
			},
		),
		