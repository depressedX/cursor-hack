import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editor.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/event.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/map.js';
import '../../../../base/common/objects.js';
define(
			de[3257],
			he([1, 0, 44, 313, 3, 21, 30, 6, 66, 24, 59, 82]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editor*/,
 i /*sideBySideEditorInput*/,
 w /*lifecycle*/,
 E /*storage*/,
 C /*platform*/,
 d /*event*/,
 m /*editorGroupsService*/,
 r /*arrays*/,
 u /*map*/,
 a /*objects*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xdc = void 0);
				let c = class extends w.$1c {
					static {
						h = this;
					}
					static {
						this.a = "editors.mru";
					}
					get count() {
						return this.c.size;
					}
					get editors() {
						return [...this.c.values()];
					}
					hasEditor(g) {
						return this.f.get(g.resource)?.has(this.h(g)) ?? !1;
					}
					hasEditors(g) {
						return this.f.has(g);
					}
					h(g, p) {
						return typeof g != "string"
							? this.h(g.typeId, g.editorId)
							: p
								? `${g}/${p}`
								: g;
					}
					constructor(g, p, o) {
						super(),
							(this.n = p),
							(this.q = o),
							(this.b = new Map()),
							(this.c = new u.$Ic()),
							(this.f = new u.$Gc()),
							(this.g = this.D(new d.$re())),
							(this.onDidMostRecentlyActiveEditorsChange = this.g.event),
							(this.j = g ?? p),
							(this.m = !!g),
							this.r(),
							this.L();
					}
					r() {
						this.D(this.j.onDidAddGroup((g) => this.s(g))),
							this.D(this.n.onDidChangeEditorPartOptions((g) => this.u(g))),
							this.D(this.q.onWillSaveState(() => this.I()));
					}
					s(g) {
						const p = g.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE);
						for (let o = p.length - 1; o >= 0; o--) this.w(g, p[o], !1, !0);
						this.j.activeGroup === g &&
							g.activeEditor &&
							this.w(g, g.activeEditor, !0, !1),
							this.t(g);
					}
					t(g) {
						const p = new w.$Zc();
						p.add(
							g.onDidModelChange((o) => {
								switch (o.kind) {
									case t.GroupModelChangeKind.GROUP_ACTIVE: {
										this.j.activeGroup === g &&
											g.activeEditor &&
											this.w(g, g.activeEditor, !0, !1);
										break;
									}
									case t.GroupModelChangeKind.EDITOR_OPEN: {
										o.editor &&
											(this.w(g, o.editor, !1, !0),
											this.G({ groupId: g.id, editor: o.editor }, g.id));
										break;
									}
								}
							}),
						),
							p.add(
								g.onDidCloseEditor((o) => {
									this.z(g, o.editor);
								}),
							),
							p.add(
								g.onDidActiveEditorChange((o) => {
									o.editor && this.w(g, o.editor, this.j.activeGroup === g, !1);
								}),
							),
							d.Event.once(g.onWillDispose)(() => (0, w.$Vc)(p));
					}
					u(g) {
						if (!(0, a.$zo)(g.newPartOptions.limit, g.oldPartOptions.limit)) {
							const p = this.j.activeGroup;
							let o;
							p.activeEditor && (o = { editor: p.activeEditor, groupId: p.id }),
								this.G(o);
						}
					}
					w(g, p, o, f) {
						const b = this.F(g, p),
							s = this.c.first;
						o || !s
							? this.c.set(b, b, s ? u.Touch.AsOld : void 0)
							: (this.c.set(b, b, u.Touch.AsOld),
								this.c.set(s, s, u.Touch.AsOld)),
							f && this.y(p, !0),
							this.g.fire();
					}
					y(g, p) {
						let o, f, b;
						if (
							(g instanceof i.$iY
								? ((o = g.primary.resource),
									(f = g.primary.typeId),
									(b = g.primary.editorId))
								: ((o = g.resource), (f = g.typeId), (b = g.editorId)),
							!o)
						)
							return;
						const s = this.h(f, b);
						if (p) {
							let l = this.f.get(o);
							l || ((l = new Map()), this.f.set(o, l)),
								l.set(s, (l.get(s) ?? 0) + 1);
						} else {
							const l = this.f.get(o);
							if (l) {
								const y = l.get(s) ?? 0;
								y > 1
									? l.set(s, y - 1)
									: (l.delete(s), l.size === 0 && this.f.delete(o));
							}
						}
					}
					z(g, p) {
						this.y(p, !1);
						const o = this.C(g, p);
						if (o) {
							this.c.delete(o);
							const f = this.b.get(g.id);
							f && f.delete(o.editor) && f.size === 0 && this.b.delete(g.id),
								this.g.fire();
						}
					}
					C(g, p) {
						const o = this.b.get(g.id);
						if (o) return o.get(p);
					}
					F(g, p) {
						let o = this.b.get(g.id);
						o || ((o = new Map()), this.b.set(g.id, o));
						let f = o.get(p);
						return f || ((f = { groupId: g.id, editor: p }), o.set(p, f)), f;
					}
					async G(g, p) {
						if (
							!this.n.partOptions.limit?.enabled ||
							typeof this.n.partOptions.limit.value != "number" ||
							this.n.partOptions.limit.value <= 0
						)
							return;
						const o = this.n.partOptions.limit.value;
						if (this.n.partOptions.limit?.perEditorGroup)
							if (typeof p == "number") {
								const f = this.j.getGroup(p);
								f &&
									(await this.H(
										o,
										f
											.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE)
											.map((b) => ({ editor: b, groupId: p })),
										g,
									));
							} else for (const f of this.j.groups) await this.G(g, f.id);
						else await this.H(o, [...this.c.values()], g);
					}
					async H(g, p, o) {
						let f;
						if (
							(this.n.partOptions.limit?.excludeDirty
								? (f = p.filter(
										({ editor: y }) =>
											!(
												(y.isDirty() && !y.isSaving()) ||
												y.hasCapability(t.EditorInputCapabilities.Scratchpad)
											),
									))
								: (f = p),
							g >= f.length)
						)
							return;
						const b = f
							.reverse()
							.filter(
								({ editor: y, groupId: $ }) =>
									!(
										(y.isDirty() && !y.isSaving()) ||
										y.hasCapability(t.EditorInputCapabilities.Scratchpad) ||
										(o && y === o.editor && $ === o.groupId) ||
										this.j.getGroup($)?.isSticky(y)
									),
							);
						let s = f.length - g;
						const l = new Map();
						for (const { groupId: y, editor: $ } of b) {
							let v = l.get(y);
							if ((v || ((v = []), l.set(y, v)), v.push($), s--, s === 0))
								break;
						}
						for (const [y, $] of l) {
							const v = this.j.getGroup(y);
							v && (await v.closeEditors($, { preserveFocus: !0 }));
						}
					}
					I() {
						this.m ||
							(this.c.isEmpty()
								? this.q.remove(h.a, E.StorageScope.WORKSPACE)
								: this.q.store(
										h.a,
										JSON.stringify(this.J()),
										E.StorageScope.WORKSPACE,
										E.StorageTarget.MACHINE,
									));
					}
					J() {
						const g = C.$Io.as(t.$a1.EditorFactory),
							p = [...this.c.values()],
							o = new Map();
						return {
							entries: (0, r.$Lb)(
								p.map(({ editor: f, groupId: b }) => {
									const s = this.j.getGroup(b);
									if (!s) return;
									let l = o.get(s);
									l ||
										((l = s
											.getEditors(t.EditorsOrder.SEQUENTIAL)
											.filter(($) =>
												g.getEditorSerializer($)?.canSerialize($),
											)),
										o.set(s, l));
									const y = l.indexOf(f);
									if (y !== -1) return { groupId: b, index: y };
								}),
							),
						};
					}
					async L() {
						(this.j === this.n.mainPart || this.j === this.n) &&
							(await this.n.whenReady);
						let g = !1;
						if (!this.m) {
							const p = this.q.get(h.a, E.StorageScope.WORKSPACE);
							p && ((g = !0), this.M(JSON.parse(p)));
						}
						if (!g) {
							const p = this.j.getGroups(m.GroupsOrder.MOST_RECENTLY_ACTIVE);
							for (let o = p.length - 1; o >= 0; o--) {
								const f = p[o],
									b = f.getEditors(t.EditorsOrder.MOST_RECENTLY_ACTIVE);
								for (let s = b.length - 1; s >= 0; s--) this.w(f, b[s], !0, !0);
							}
						}
						for (const p of this.j.groups) this.t(p);
					}
					M(g) {
						const p = [];
						for (const { groupId: o, index: f } of g.entries) {
							const b = this.j.getGroup(o);
							if (!b) continue;
							const s = b.getEditorByIndex(f);
							if (!s) continue;
							const l = this.F(b, s);
							p.push([l, l]), this.y(s, !0);
						}
						this.c.fromJSON(p);
					}
				};
				(e.$xdc = c), (e.$xdc = c = h = Ne([j(1, m.$EY), j(2, E.$lq)], c));
			},
		),
		