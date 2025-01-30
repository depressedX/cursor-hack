import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/terminal/common/terminal.js';
import './terminal.js';
import './terminalEditorInput.js';
import './terminalUri.js';
import '../common/terminalContextKey.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/lifecycle/common/lifecycle.js';
define(
			de[3438],
			he([1, 0, 6, 3, 9, 8, 116, 5, 117, 107, 833, 690, 237, 66, 18, 52]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*contextkey*/,
 C /*editor*/,
 d /*instantiation*/,
 m /*terminal*/,
 r /*terminal*/,
 u /*terminalEditorInput*/,
 a /*terminalUri*/,
 h /*terminalContextKey*/,
 c /*editorGroupsService*/,
 n /*editorService*/,
 g /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XUc = void 0);
				let p = class extends i.$1c {
					constructor(f, b, s, l, y, $) {
						super(),
							(this.s = f),
							(this.t = b),
							(this.u = s),
							(this.w = l),
							(this.instances = []),
							(this.a = -1),
							(this.b = !1),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = this.D(new t.$re())),
							(this.onDidDisposeInstance = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidFocusInstance = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeInstanceCapability = this.n.event),
							(this.q = this.D(new t.$re())),
							(this.onDidChangeActiveInstance = this.q.event),
							(this.r = this.D(new t.$re())),
							(this.onDidChangeInstances = this.r.event),
							(this.f = h.TerminalContextKeys.terminalEditorActive.bindTo($)),
							this.D(
								(0, i.$Yc)(() => {
									for (const v of this.h.values()) (0, i.$Vc)(v);
								}),
							),
							this.D(y.onWillShutdown(() => (this.b = !0))),
							this.D(
								this.s.onDidActiveEditorChange(() => {
									const v = this.s.activeEditor,
										S = v instanceof u.$Unc ? v?.terminalInstance : void 0,
										I = !!S && v instanceof u.$Unc;
									if ((this.f.set(I), I))
										v?.setGroup(this.s.activeEditorPane?.group),
											this.setActiveInstance(S);
									else for (const T of this.instances) T.resetFocusContextKey();
								}),
							),
							this.D(
								this.s.onDidVisibleEditorsChange(() => {
									const v = this.instances.map((T) => T.instanceId),
										I = this.y().find((T) => {
											const P =
												T instanceof u.$Unc
													? T.terminalInstance?.instanceId
													: void 0;
											return P === void 0 ? !1 : !v.includes(P);
										});
									I instanceof u.$Unc &&
										I.terminalInstance &&
										(this.g.set(I.terminalInstance.resource.path, I),
										this.instances.push(I.terminalInstance));
								}),
							),
							this.D(
								this.s.onDidCloseEditor((v) => {
									const S =
										v.editor instanceof u.$Unc
											? v.editor.terminalInstance
											: void 0;
									if (S) {
										const I = this.instances.findIndex((T) => T === S);
										if (I !== -1) {
											const T = this.instances[I] === this.activeInstance;
											this.C(S), T && this.setActiveInstance(void 0);
										}
									}
								}),
							);
					}
					y() {
						return this.s.visibleEditors.filter(
							(f) => f instanceof u.$Unc && f.terminalInstance?.instanceId,
						);
					}
					get activeInstance() {
						if (!(this.instances.length === 0 || this.a === -1))
							return this.instances[this.a];
					}
					setActiveInstance(f) {
						(this.a = f ? this.instances.findIndex((b) => b === f) : -1),
							this.q.fire(this.activeInstance);
					}
					async focusInstance(f) {
						return f.focusWhenReady(!0);
					}
					async focusActiveInstance() {
						return this.activeInstance?.focusWhenReady(!0);
					}
					async openEditor(f, b) {
						const s = this.resolveResource(f);
						s &&
							(await this.c?.promise,
							(this.c = {
								instanceId: f.instanceId,
								promise: this.s.openEditor(
									{
										resource: s,
										description: f.description || f.shellLaunchConfig.type,
										options: {
											pinned: !0,
											forceReload: !0,
											preserveFocus: b?.preserveFocus,
										},
									},
									b?.viewColumn ?? n.$JY,
								),
							}),
							await this.c?.promise,
							(this.c = void 0));
					}
					resolveResource(f) {
						const b = f.resource,
							s = b.path,
							l = this.g.get(s);
						if (l) return l.resource;
						f.target = m.TerminalLocation.Editor;
						const y = this.w.createInstance(u.$Unc, b, f);
						return this.z(s, y, f), y.resource;
					}
					getInputFromResource(f) {
						const b = this.g.get(f.path);
						if (!b)
							throw new Error(`Could not get input from resource: ${f.path}`);
						return b;
					}
					z(f, b, s) {
						this.g.set(f, b),
							this.h.set(f, [
								s.onDidFocus(this.m.fire, this.m),
								s.onDisposed(this.j.fire, this.j),
								s.capabilities.onDidAddCapabilityType(() => this.n.fire(s)),
								s.capabilities.onDidRemoveCapabilityType(() => this.n.fire(s)),
							]),
							this.instances.push(s),
							this.r.fire();
					}
					C(f) {
						const b = f.resource.path;
						this.g.delete(b);
						const s = this.instances.findIndex((y) => y === f);
						s !== -1 && this.instances.splice(s, 1);
						const l = this.h.get(b);
						this.h.delete(b), l && (0, i.$Vc)(l), this.r.fire();
					}
					getInstanceFromResource(f) {
						return (0, a.$WUc)(this.instances, f);
					}
					splitInstance(f, b = {}) {
						if (f.target === m.TerminalLocation.Editor) {
							const y = this.g.get(f.resource.path)?.group;
							y && this.t.activateGroup(y);
						}
						const s = this.u.createInstance(b, m.TerminalLocation.Editor),
							l = this.resolveResource(s);
						return (
							l &&
								this.s.openEditor(
									{
										resource: w.URI.revive(l),
										description: s.description,
										options: { pinned: !0, forceReload: !0 },
									},
									n.$KY,
								),
							s
						);
					}
					reviveInput(f) {
						if ("pid" in f) {
							const b = { ...f, findRevivedId: !0 },
								s = this.u.createInstance(
									{ attachPersistentProcess: b },
									m.TerminalLocation.Editor,
								),
								l = this.w.createInstance(u.$Unc, s.resource, s);
							return this.z(s.resource.path, l, s), l;
						} else
							throw new Error(`Could not revive terminal editor input, ${f}`);
					}
					detachInstance(f) {
						const b = f.resource.path,
							s = this.g.get(b);
						s?.detachInstance(), this.C(f), this.b || s?.dispose();
					}
					async revealActiveEditor(f) {
						const b = this.activeInstance;
						if (!b || this.c?.instanceId === b.instanceId) return;
						const s = this.g.get(b.resource.path);
						this.s.openEditor(s, {
							pinned: !0,
							forceReload: !0,
							preserveFocus: f,
							activation: C.EditorActivation.PRESERVE,
						});
					}
				};
				(e.$XUc = p),
					(e.$XUc = p =
						Ne(
							[
								j(0, n.$IY),
								j(1, c.$EY),
								j(2, r.$mIb),
								j(3, d.$Li),
								j(4, g.$n6),
								j(5, E.$6j),
							],
							p,
						));
			},
		),
		