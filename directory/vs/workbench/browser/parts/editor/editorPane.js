import '../../../../../require.js';
import '../../../../../exports.js';
import '../../composite.js';
import '../../../common/editor.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/map.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/event.js';
import '../../../../base/common/types.js';
import './editor.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/extpath.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
define(
			de[217],
			he([1, 0, 1701, 44, 21, 59, 9, 6, 28, 548, 19, 249, 3, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*composite*/,
 i /*editor*/,
 w /*storage*/,
 E /*map*/,
 C /*uri*/,
 d /*event*/,
 m /*types*/,
 r /*editor*/,
 u /*resources*/,
 a /*extpath*/,
 h /*lifecycle*/,
 c /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KEb = e.$JEb = void 0);
				class n extends t.$gEb {
					static {
						this.U = new Map();
					}
					get minimumWidth() {
						return r.$DEb.width;
					}
					get maximumWidth() {
						return r.$EEb.width;
					}
					get minimumHeight() {
						return r.$DEb.height;
					}
					get maximumHeight() {
						return r.$EEb.height;
					}
					get input() {
						return this.W;
					}
					get options() {
						return this.X;
					}
					get window() {
						return (0, c.getWindowById)(this.group.windowId, !0).window;
					}
					get scopedContextKeyService() {}
					constructor(o, f, b, s, l) {
						super(o, b, s, l),
							(this.group = f),
							(this.onDidChangeSizeConstraints = d.Event.None),
							(this.S = this.D(new d.$re())),
							(this.onDidChangeControl = this.S.event);
					}
					create(o) {
						super.create(o), this.Y(o);
					}
					async setInput(o, f, b, s) {
						(this.W = o), (this.X = f);
					}
					clearInput() {
						(this.W = void 0), (this.X = void 0);
					}
					setOptions(o) {
						this.X = o;
					}
					setVisible(o) {
						super.setVisible(o), this.Z(o);
					}
					Z(o) {}
					setBoundarySashes(o) {}
					ab(o, f, b, s = 10) {
						const l = `${this.getId()}${b}`;
						let y = n.U.get(l);
						return (
							y ||
								((y = this.D(
									new g(
										this.getId(),
										b,
										this.F(w.StorageScope.WORKSPACE, w.StorageTarget.MACHINE),
										s,
										o,
										f,
									),
								)),
								n.U.set(l, y)),
							y
						);
					}
					getViewState() {}
					I() {
						for (const [, o] of n.U) o.id === this.getId() && o.saveState();
						super.I();
					}
					dispose() {
						(this.W = void 0), (this.X = void 0), super.dispose();
					}
				}
				e.$JEb = n;
				class g extends h.$1c {
					static {
						this.a = -1;
					}
					constructor(o, f, b, s, l, y) {
						super(),
							(this.id = o),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.q = y),
							(this.c = !1),
							(this.g = !1),
							this.s(void 0),
							this.r();
					}
					r() {
						this.D(this.q.onDidChangeConfiguration((o) => this.s(o)));
					}
					s(o) {
						(!o ||
							o.affectsConfiguration(
								void 0,
								"workbench.editor.sharedViewState",
							)) &&
							(this.g =
								this.q.getValue(void 0, "workbench.editor.sharedViewState") ===
								!0);
					}
					saveEditorState(o, f, b) {
						const s = this.t(f);
						if (!s || !o) return;
						const l = this.u();
						let y = l.get(s.toString());
						y || ((y = Object.create(null)), l.set(s.toString(), y)),
							(y[o.id] = b),
							this.g && (y[g.a] = b),
							(0, i.$r1)(f) && this.clearEditorStateOnDispose(s, f);
					}
					loadEditorState(o, f) {
						const b = this.t(f);
						if (!b || !o) return;
						const l = this.u().get(b.toString());
						if (l) {
							const y = l[o.id];
							if (y) return y;
							if (this.g) return l[g.a];
						}
					}
					clearEditorState(o, f) {
						(0, i.$r1)(o) && this.f?.delete(o);
						const b = this.t(o);
						if (b) {
							const s = this.u();
							if (f) {
								const l = s.get(b.toString());
								l && (delete l[f.id], (0, m.$yg)(l) && s.delete(b.toString()));
							} else s.delete(b.toString());
						}
					}
					clearEditorStateOnDispose(o, f) {
						this.f || (this.f = new Map()),
							this.f.has(f) ||
								this.f.set(
									f,
									d.Event.once(f.onWillDispose)(() => {
										this.clearEditorState(o), this.f?.delete(f);
									}),
								);
					}
					moveEditorState(o, f, b) {
						const s = this.u(),
							l = [...s.keys()];
						for (const y of l) {
							const $ = C.URI.parse(y);
							if (!b.isEqualOrParent($, o)) continue;
							let v;
							if ((0, u.$gh)(o, $)) v = f;
							else {
								const I = (0, a.$Sg)($.path, o.path);
								v = (0, u.$nh)(f, $.path.substr(I + o.path.length + 1));
							}
							const S = s.get(y, E.Touch.None);
							S && (s.delete(y), s.set(v.toString(), S));
						}
					}
					t(o) {
						return (0, i.$r1)(o) ? o.resource : o;
					}
					u() {
						if (!this.b) {
							this.b = new E.$Jc(this.m);
							const o = this.j[this.h];
							Array.isArray(o) && this.b.fromJSON(o);
						}
						return this.b;
					}
					saveState() {
						const o = this.u();
						this.c || (this.w(), (this.c = !0)), (this.j[this.h] = o.toJSON());
					}
					w() {
						const o = this.u(),
							f = [...o.entries()];
						for (const [b, s] of f)
							for (const l of Object.keys(s)) {
								const y = Number(l);
								(y === g.a && this.g) ||
									this.n.getGroup(y) ||
									(delete s[y], (0, m.$yg)(s) && o.delete(b));
							}
					}
				}
				e.$KEb = g;
			},
		)
