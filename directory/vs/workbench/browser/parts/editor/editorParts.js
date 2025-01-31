import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import './editorPart.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/arrays.js';
import './auxiliaryEditorPart.js';
import '../../part.js';
import '../../../../base/common/async.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../services/auxiliaryWindow/browser/auxiliaryWindowService.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../services/editor/common/editorService.js';
define(
			de[4226],
			he([
				1, 0, 4, 66, 6, 3, 1985, 20, 5, 24, 4225, 550, 15, 21, 35, 703, 47, 8,
				7, 128, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*editorGroupsService*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*editorPart*/,
				d /*extensions*/,
				m /*instantiation*/,
				r /*arrays*/,
				u /*auxiliaryEditorPart*/,
				a /*part*/,
				h /*async*/,
				c /*storage*/,
				n /*themeService*/,
				g /*auxiliaryWindowService*/,
				p /*uuid*/,
				o /*contextkey*/,
				f /*dom*/,
				b /*serviceCollection*/,
				s /*editorService*/,
) {
				"use strict";
				var l;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Juc = void 0);
				let y = class extends a.$lEb {
					static {
						l = this;
					}
					constructor(v, S, I, T, P) {
						super("workbench.editorParts", I, S),
							(this.b = v),
							(this.m = S),
							(this.r = T),
							(this.s = P),
							(this.mainPart = this.D(this.u())),
							(this.a = [this.mainPart]),
							(this.y = new Map()),
							(this.J = this.D(new w.$re())),
							(this.onDidCreateAuxiliaryEditorPart = this.J.event),
							(this.Q = this.F(c.StorageScope.WORKSPACE, c.StorageTarget.USER)),
							(this.R = !1),
							(this.S = new h.$0h()),
							(this.whenReady = this.S.p),
							(this.U = new h.$0h()),
							(this.whenRestored = this.U.p),
							(this.db = (() => {
								const k = this.m.get(l.cb, c.StorageScope.WORKSPACE);
								return k ? JSON.parse(k) : [];
							})()),
							(this.gb = this.D(new w.$re())),
							(this.onDidChangeActiveGroup = this.gb.event),
							(this.hb = this.D(new w.$re())),
							(this.onDidAddGroup = this.hb.event),
							(this.ib = this.D(new w.$re())),
							(this.onDidRemoveGroup = this.ib.event),
							(this.jb = this.D(new w.$re())),
							(this.onDidMoveGroup = this.jb.event),
							(this.kb = this.D(new w.$re())),
							(this.onDidActivateGroup = this.kb.event),
							(this.lb = this.D(new w.$re())),
							(this.onDidChangeGroupIndex = this.lb.event),
							(this.mb = this.D(new w.$re())),
							(this.onDidChangeGroupLocked = this.mb.event),
							(this.nb = this.D(new w.$re())),
							(this.onDidChangeGroupMaximized = this.nb.event),
							(this.pb = new Map()),
							(this.qb = new Map()),
							(this.tb = new Map()),
							(this.ub = new Map()),
							(this.vb = this.D(new E.$0c())),
							this.D(this.registerPart(this.mainPart)),
							this.W(),
							this.t();
					}
					t() {
						this.D(this.H(c.StorageScope.WORKSPACE, this.B)((v) => this.ab(v))),
							this.whenReady.then(() => this.rb());
					}
					u() {
						return this.b.createInstance(C.$Huc, this);
					}
					getScopedInstantiationService(v) {
						return (
							v === this.mainPart &&
								(this.y.has(v.windowId) ||
									this.b.invokeFunction((S) => {
										const I = S.get(s.$IY);
										this.y.set(
											v.windowId,
											this.D(
												this.b.createChild(
													new b.$Ki([s.$IY, I.createScoped("main", this.B)]),
												),
											),
										);
									})),
							this.y.get(v.windowId) ?? this.b
						);
					}
					async createAuxiliaryEditorPart(v) {
						const {
							part: S,
							instantiationService: I,
							disposables: T,
						} = await this.b
							.createInstance(u.$Iuc, this)
							.create(this.O(this.f.size), v);
						return (
							this.y.set(S.windowId, I),
							T.add((0, E.$Yc)(() => this.y.delete(S.windowId))),
							this.hb.fire(S.activeGroup),
							this.J.fire(S),
							S
						);
					}
					registerPart(v) {
						const S = this.D(new E.$Zc());
						return S.add(super.registerPart(v)), this.M(v, S), S;
					}
					g(v) {
						super.g(v),
							this.parts.forEach((S, I) => {
								S !== this.mainPart && S.notifyGroupsLabelChange(this.O(I));
							});
					}
					M(v, S) {
						S.add(
							v.onDidFocus(() => {
								this.N(v, !0),
									this.f.size > 1 && this.gb.fire(this.activeGroup);
							}),
						),
							S.add((0, E.$Yc)(() => this.N(v))),
							S.add(v.onDidChangeActiveGroup((I) => this.gb.fire(I))),
							S.add(v.onDidAddGroup((I) => this.hb.fire(I))),
							S.add(v.onDidRemoveGroup((I) => this.ib.fire(I))),
							S.add(v.onDidMoveGroup((I) => this.jb.fire(I))),
							S.add(v.onDidActivateGroup((I) => this.kb.fire(I))),
							S.add(v.onDidChangeGroupMaximized((I) => this.nb.fire(I))),
							S.add(v.onDidChangeGroupIndex((I) => this.lb.fire(I))),
							S.add(v.onDidChangeGroupLocked((I) => this.mb.fire(I)));
					}
					N(v, S) {
						const I = this.a.indexOf(v);
						I !== -1 && this.a.splice(I, 1), S && this.a.unshift(v);
					}
					O(v) {
						return (0, t.localize)(3468, null, v + 1);
					}
					getPart(v) {
						if (this.f.size > 1)
							if ((0, f.$Ygb)(v)) {
								const S = v;
								return this.j(S.ownerDocument);
							} else {
								const S = v;
								let I;
								typeof S == "number" ? (I = S) : (I = S.id);
								for (const T of this.f) if (T.hasGroup(I)) return T;
							}
						return this.mainPart;
					}
					static {
						this.P = "editorparts.state";
					}
					get isReady() {
						return this.R;
					}
					async W() {
						if (
							(await this.mainPart.whenReady, this.mainPart.willRestoreState)
						) {
							const S = this.X();
							S && (await this.$(S));
						}
						(0, r.$Sb)(this.a)?.activeGroup.focus(),
							(this.R = !0),
							this.S.complete(),
							await Promise.allSettled(this.parts.map((S) => S.whenRestored)),
							this.U.complete();
					}
					X() {
						return this.Q[l.P];
					}
					I() {
						const v = this.Z();
						v.auxiliary.length === 0 ? delete this.Q[l.P] : (this.Q[l.P] = v);
					}
					Z() {
						return {
							auxiliary: this.parts
								.filter((v) => v !== this.mainPart)
								.map((v) => {
									const S = this.r.getWindow(v.windowId);
									return { state: v.createState(), ...S?.createState() };
								}),
							mru: this.a.map((v) => this.parts.indexOf(v)),
						};
					}
					async $(v) {
						if (v.auxiliary.length) {
							const S = [];
							for (const I of v.auxiliary)
								S.push(this.createAuxiliaryEditorPart(I));
							await Promise.allSettled(S),
								v.mru.length === this.parts.length
									? (this.a = v.mru.map((I) => this.parts[I]))
									: (this.a = [...this.parts]),
								await Promise.allSettled(this.parts.map((I) => I.whenReady));
						}
					}
					get hasRestorableState() {
						return this.parts.some((v) => v.hasRestorableState);
					}
					ab(v) {
						if (v.external && v.scope === c.StorageScope.WORKSPACE) {
							this.G(v.scope);
							const S = this.X();
							S && this.bb(S);
						}
					}
					async bb(v) {
						for (const S of this.parts) {
							if (S === this.mainPart) continue;
							for (const T of S.getGroups(i.GroupsOrder.MOST_RECENTLY_ACTIVE))
								await T.closeAllEditors({ excludeConfirming: !0 });
							if (!S.close()) return !1;
						}
						return v !== "empty" && (await this.$(v)), !0;
					}
					static {
						this.cb = "editor.workingSets";
					}
					saveWorkingSet(v) {
						const S = {
							id: (0, p.$9g)(),
							name: v,
							main: this.mainPart.createState(),
							auxiliary: this.Z(),
						};
						return this.db.push(S), this.fb(), { id: S.id, name: S.name };
					}
					getWorkingSets() {
						return this.db.map((v) => ({ id: v.id, name: v.name }));
					}
					deleteWorkingSet(v) {
						const S = this.eb(v);
						typeof S == "number" && (this.db.splice(S, 1), this.fb());
					}
					async applyWorkingSet(v, S) {
						let I;
						if (
							(v === "empty" ? (I = "empty") : (I = this.db[this.eb(v) ?? -1]),
							!I || !(await this.bb(I === "empty" ? I : I.auxiliary)))
						)
							return !1;
						if (
							(await this.mainPart.applyState(I === "empty" ? I : I.main, S),
							!S?.preserveFocus)
						) {
							const P = (0, r.$Sb)(this.a);
							P && (await P.whenReady, P.activeGroup.focus());
						}
						return !0;
					}
					eb(v) {
						for (let S = 0; S < this.db.length; S++)
							if (this.db[S].id === v.id) return S;
					}
					fb() {
						this.m.store(
							l.cb,
							JSON.stringify(this.db),
							c.StorageScope.WORKSPACE,
							c.StorageTarget.MACHINE,
						);
					}
					get activeGroup() {
						return this.activePart.activeGroup;
					}
					get sideGroup() {
						return this.activePart.sideGroup;
					}
					get groups() {
						return this.getGroups();
					}
					get count() {
						return this.groups.length;
					}
					getGroups(v = i.GroupsOrder.CREATION_TIME) {
						if (this.f.size > 1) {
							let S;
							switch (v) {
								case i.GroupsOrder.GRID_APPEARANCE:
								case i.GroupsOrder.CREATION_TIME:
									S = this.parts;
									break;
								case i.GroupsOrder.MOST_RECENTLY_ACTIVE:
									S = (0, r.$Qb)([...this.a, ...this.parts]);
									break;
							}
							return S.map((I) => I.getGroups(v)).flat();
						}
						return this.mainPart.getGroups(v);
					}
					getGroup(v) {
						if (this.f.size > 1)
							for (const S of this.f) {
								const I = S.getGroup(v);
								if (I) return I;
							}
						return this.mainPart.getGroup(v);
					}
					ob(v) {
						let S;
						if ((typeof v == "number" ? (S = this.getGroup(v)) : (S = v), !S))
							throw new Error("Invalid editor group provided!");
						return S;
					}
					activateGroup(v) {
						return this.getPart(v).activateGroup(v);
					}
					getSize(v) {
						return this.getPart(v).getSize(v);
					}
					setSize(v, S) {
						this.getPart(v).setSize(v, S);
					}
					arrangeGroups(v, S = this.activePart.activeGroup) {
						this.getPart(S).arrangeGroups(v, S);
					}
					toggleMaximizeGroup(v = this.activePart.activeGroup) {
						this.getPart(v).toggleMaximizeGroup(v);
					}
					toggleExpandGroup(v = this.activePart.activeGroup) {
						this.getPart(v).toggleExpandGroup(v);
					}
					restoreGroup(v) {
						return this.getPart(v).restoreGroup(v);
					}
					applyLayout(v) {
						this.activePart.applyLayout(v);
					}
					getLayout() {
						return this.activePart.getLayout();
					}
					get orientation() {
						return this.activePart.orientation;
					}
					setGroupOrientation(v) {
						this.activePart.setGroupOrientation(v);
					}
					findGroup(v, S = this.activeGroup, I) {
						const T = this.getPart(S);
						if (this.f.size > 1) {
							const P = this.getGroups(i.GroupsOrder.GRID_APPEARANCE);
							if (
								v.location === i.GroupLocation.FIRST ||
								v.location === i.GroupLocation.LAST
							)
								return v.location === i.GroupLocation.FIRST
									? P[0]
									: P[P.length - 1];
							const k = T.findGroup(v, S, !1);
							if (k) return k;
							if (
								v.location === i.GroupLocation.NEXT ||
								v.location === i.GroupLocation.PREVIOUS
							) {
								const L = this.ob(S),
									D = P.indexOf(L);
								if (v.location === i.GroupLocation.NEXT) {
									let M = P[D + 1];
									return !M && I && (M = P[0]), M;
								} else {
									let M = P[D - 1];
									return !M && I && (M = P[P.length - 1]), M;
								}
							}
						}
						return T.findGroup(v, S, I);
					}
					addGroup(v, S) {
						return this.getPart(v).addGroup(v, S);
					}
					removeGroup(v) {
						this.getPart(v).removeGroup(v);
					}
					moveGroup(v, S, I) {
						return this.getPart(v).moveGroup(v, S, I);
					}
					mergeGroup(v, S, I) {
						return this.getPart(v).mergeGroup(v, S, I);
					}
					mergeAllGroups(v) {
						return this.activePart.mergeAllGroups(v);
					}
					copyGroup(v, S, I) {
						return this.getPart(v).copyGroup(v, S, I);
					}
					createEditorDropTarget(v, S) {
						return this.getPart(v).createEditorDropTarget(v, S);
					}
					rb() {
						this.D(this.onDidChangeActiveGroup(() => this.sb())),
							this.groups.forEach((v) => this.wb(v)),
							this.D(this.onDidAddGroup((v) => this.wb(v))),
							this.D(
								this.onDidRemoveGroup((v) => {
									this.qb.delete(v.id),
										this.ub.delete(v.id),
										this.vb.deleteAndDispose(v.id);
								}),
							);
					}
					sb() {
						const v = this.qb.get(this.activeGroup.id);
						if (v)
							for (const [S, I] of this.pb) {
								const T = v.get(S);
								T ? I.set(T.get()) : I.reset();
							}
					}
					bind(v, S) {
						let I = this.pb.get(v.key);
						I || ((I = v.bindTo(this.s)), this.pb.set(v.key, I));
						let T = this.qb.get(S.id);
						T || ((T = new Map()), this.qb.set(S.id, T));
						let P = T.get(v.key);
						P || ((P = v.bindTo(S.scopedContextKeyService)), T.set(v.key, P));
						const k = this;
						return {
							get() {
								return P.get();
							},
							set(L) {
								k.activeGroup === S && I.set(L), P.set(L);
							},
							reset() {
								k.activeGroup === S && I.reset(), P.reset();
							},
						};
					}
					registerContextKeyProvider(v) {
						if (this.tb.has(v.contextKey.key) || this.pb.has(v.contextKey.key))
							throw new Error(
								`A context key provider for key ${v.contextKey.key} already exists.`,
							);
						this.tb.set(v.contextKey.key, v);
						const S = () => {
							for (const T of this.groups) this.xb(T, v);
						};
						S();
						const I = v.onDidChange?.(() => S());
						return (0, E.$Yc)(() => {
							I?.dispose(),
								this.pb.delete(v.contextKey.key),
								this.qb.forEach((T) => T.delete(v.contextKey.key)),
								this.tb.delete(v.contextKey.key),
								this.ub.forEach((T) => T.delete(v.contextKey.key));
						});
					}
					wb(v) {
						const S = v.onDidActiveEditorChange(() => {
							for (const I of this.tb.values()) this.xb(v, I);
						});
						this.vb.set(v.id, S);
					}
					xb(v, S) {
						let I = this.ub.get(v.id);
						I || ((I = new Map()), this.ub.set(v.id, I));
						let T = I.get(S.contextKey.key);
						T || ((T = this.bind(S.contextKey, v)), I.set(S.contextKey.key, T)),
							T.set(S.getGroupContextKeyValue(v));
					}
					get partOptions() {
						return this.mainPart.partOptions;
					}
					get onDidChangeEditorPartOptions() {
						return this.mainPart.onDidChangeEditorPartOptions;
					}
				};
				(e.$Juc = y),
					(e.$Juc =
						y =
						l =
							Ne(
								[
									j(0, m.$Li),
									j(1, c.$lq),
									j(2, n.$iP),
									j(3, g.$AEb),
									j(4, o.$6j),
								],
								y,
							)),
					(0, d.$lK)(i.$EY, y, d.InstantiationType.Eager);
			},
		)
