import '../../../require.js';
import '../../../exports.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
import '../../platform/contextkey/common/contextkey.js';
import '../../platform/contextkey/common/contextkeys.js';
import '../common/contextkeys.js';
import '../../base/browser/dom.js';
import '../services/editor/common/editorGroupsService.js';
import '../../platform/configuration/common/configuration.js';
import '../services/environment/common/environmentService.js';
import '../../platform/workspace/common/workspace.js';
import '../services/layout/browser/layoutService.js';
import '../../platform/remote/common/remoteHosts.js';
import '../../platform/workspace/common/virtualWorkspace.js';
import '../services/workingCopy/common/workingCopyService.js';
import '../../base/common/platform.js';
import '../services/panecomposite/browser/panecomposite.js';
import '../../platform/files/browser/webFileSystemAccess.js';
import '../../platform/product/common/productService.js';
import '../../platform/window/common/window.js';
import '../../base/browser/window.js';
import '../../base/browser/browser.js';
import '../services/editor/common/editorService.js';
define(
			de[3858],
			he([
				1, 0, 6, 3, 8, 179, 100, 7, 66, 10, 78, 25, 96, 438, 349, 227, 12, 142,
				762, 62, 253, 75, 139, 18,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*lifecycle*/,
				w /*contextkey*/,
				E /*contextkeys*/,
				C /*contextkeys*/,
				d /*dom*/,
				m /*editorGroupsService*/,
				r /*configuration*/,
				u /*environmentService*/,
				a /*workspace*/,
				h /*layoutService*/,
				c /*remoteHosts*/,
				n /*virtualWorkspace*/,
				g /*workingCopyService*/,
				p /*platform*/,
				o /*panecomposite*/,
				f /*webFileSystemAccess*/,
				b /*productService*/,
				s /*window*/,
				l /*window*/,
				y /*browser*/,
				$ /*editorService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$l3c = void 0);
				let v = class extends i.$1c {
					constructor(I, T, P, k, L, D, M, N, A, R) {
						super(),
							(this.S = I),
							(this.U = T),
							(this.W = P),
							(this.X = k),
							(this.Y = L),
							(this.Z = D),
							(this.$ = M),
							(this.ab = N),
							(this.bb = A),
							(this.cb = R),
							E.$4Lb.bindTo(this.S),
							E.$5Lb.bindTo(this.S),
							E.$6Lb.bindTo(this.S),
							E.$7Lb.bindTo(this.S),
							E.$8Lb.bindTo(this.S),
							E.$9Lb.bindTo(this.S),
							E.$0Lb.bindTo(this.S),
							C.$CPb
								.bindTo(this.S)
								.set((0, c.$xn)(this.X.remoteAuthority) || ""),
							(this.w = C.$DPb.bindTo(this.S)),
							(this.y = C.$EPb.bindTo(this.S)),
							this.pb(),
							C.$HPb
								.bindTo(this.S)
								.set(f.WebFileSystemAccess.supported(l.$Bfb));
						const O = !this.X.isBuilt || this.X.isExtensionDevelopment;
						E.$$Lb.bindTo(this.S).set(O),
							(0, w.$Ij)(E.$$Lb.key, O),
							E.$_Lb.bindTo(this.S).set(this.Y.quality || ""),
							C.$IPb.bindTo(this.S).set(L.embedderIdentifier),
							(this.c = C.$ZPb.bindTo(this.S)),
							(this.f = C.$1Pb.bindTo(this.S)),
							(this.g = C.$2Pb.bindTo(this.S)),
							(this.h = C.$3Pb.bindTo(this.S)),
							(this.j = C.$4Pb.bindTo(this.S)),
							(this.m = C.$aQb.bindTo(this.S)),
							(this.b = C.$BPb.bindTo(this.S)),
							this.b.set(this.cb.hasDirty),
							(this.a = E.$bMb.bindTo(this.S)),
							(this.q = C.$wPb.bindTo(this.S)),
							this.jb(),
							(this.r = C.$xPb.bindTo(this.S)),
							this.kb(),
							(this.s = C.$yPb.bindTo(this.S)),
							this.s.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.u = C.$APb.bindTo(this.S)),
							this.u.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.t = C.$zPb.bindTo(this.S)),
							this.t.set(p.$p || typeof this.X.remoteAuthority == "string"),
							(this.n = C.$dQb.bindTo(this.S)),
							this.lb(),
							(this.C = C.$FPb.bindTo(this.S)),
							(this.F = C.$GPb.bindTo(this.S)),
							(this.z = C.$bQb.bindTo(this.S)),
							(this.G = C.$cQb.bindTo(this.S)),
							(this.I = C.$eQb.bindTo(this.S)),
							(this.P = C.$fQb.bindTo(this.S)),
							(this.H = C.$gQb.bindTo(this.S)),
							(this.Q = C.$lQb.bindTo(this.S)),
							(this.R = C.$kQb.bindTo(this.S)),
							this.ob(),
							(this.J = C.$vQb.bindTo(this.S)),
							this.J.set((0, h.$oEb)(this.ab.getPanelPosition())),
							(this.L = C.$xQb.bindTo(this.S)),
							this.L.set(this.ab.isVisible(h.Parts.PANEL_PART)),
							(this.N = C.$yQb.bindTo(this.S)),
							this.N.set(this.ab.isPanelMaximized()),
							(this.M = C.$wQb.bindTo(this.S)),
							this.M.set(this.ab.getPanelAlignment()),
							(this.O = C.$sQb.bindTo(this.S)),
							this.O.set(this.ab.isVisible(h.Parts.AUXILIARYBAR_PART)),
							this.db();
					}
					db() {
						this.Z.whenReady.then(() => {
							this.hb(), this.fb(), this.eb();
						}),
							this.D(this.$.onDidActiveEditorChange(() => this.fb())),
							this.D(this.$.onDidVisibleEditorsChange(() => this.eb())),
							this.D(this.Z.onDidAddGroup(() => this.gb())),
							this.D(this.Z.onDidRemoveGroup(() => this.gb())),
							this.D(this.Z.onDidChangeGroupIndex(() => this.fb())),
							this.D(this.Z.onDidChangeGroupLocked(() => this.fb())),
							this.D(this.Z.onDidChangeEditorPartOptions(() => this.hb())),
							this.D(
								t.Event.runAndSubscribe(
									d.onDidRegisterWindow,
									({ window: I, disposables: T }) =>
										T.add(
											(0, d.$0fb)(
												I,
												d.$$gb.FOCUS_IN,
												() => this.ib(I.document),
												!0,
											),
										),
									{ window: l.$Bfb, disposables: this.B },
								),
							),
							this.D(this.U.onDidChangeWorkbenchState(() => this.jb())),
							this.D(
								this.U.onDidChangeWorkspaceFolders(() => {
									this.kb(), this.pb();
								}),
							),
							this.D(
								this.W.onDidChangeConfiguration((I) => {
									I.affectsConfiguration(
										"workbench.editor.openSideBySideDirection",
									) && this.lb();
								}),
							),
							this.D(this.ab.onDidChangeZenMode((I) => this.z.set(I))),
							this.D(
								this.ab.onDidChangeActiveContainer(() =>
									this.F.set(this.ab.activeContainer !== this.ab.mainContainer),
								),
							),
							this.D(
								(0, y.$Nfb)((I) => {
									I === l.$Bfb.vscodeWindowId &&
										this.C.set((0, y.$Mfb)(l.$Bfb));
								}),
							),
							this.D(
								this.ab.onDidChangeMainEditorCenteredLayout((I) =>
									this.G.set(I),
								),
							),
							this.D(this.ab.onDidChangePanelPosition((I) => this.J.set(I))),
							this.D(this.ab.onDidChangePanelAlignment((I) => this.M.set(I))),
							this.D(this.bb.onDidPaneCompositeClose(() => this.nb())),
							this.D(this.bb.onDidPaneCompositeOpen(() => this.nb())),
							this.D(
								this.ab.onDidChangePartVisibility(() => {
									this.I.set(this.ab.isVisible(h.Parts.EDITOR_PART, l.$Bfb)),
										this.L.set(this.ab.isVisible(h.Parts.PANEL_PART)),
										this.N.set(this.ab.isPanelMaximized()),
										this.O.set(this.ab.isVisible(h.Parts.AUXILIARYBAR_PART)),
										this.ob();
								}),
							),
							this.D(
								this.cb.onDidChangeDirty((I) =>
									this.b.set(I.isDirty() || this.cb.hasDirty),
								),
							);
					}
					eb() {
						this.$.visibleEditorPanes.length > 0
							? this.m.set(!0)
							: this.m.reset();
					}
					fb() {
						this.$.activeEditor ? this.c.reset() : this.c.set(!0);
						const I = this.Z.activeGroup;
						this.f.set(I.index + 1), this.h.set(I.isLocked), this.gb();
					}
					gb() {
						const I = this.Z.count;
						I > 1 ? this.j.set(!0) : this.j.reset();
						const T = this.Z.activeGroup;
						this.g.set(T.index === I - 1);
					}
					hb() {
						this.P.set(this.Z.partOptions.showTabs === "multiple");
					}
					ib(I) {
						function T() {
							return (
								!!I.activeElement &&
								(I.activeElement.tagName === "INPUT" ||
									I.activeElement.tagName === "TEXTAREA")
							);
						}
						const P = T();
						if ((this.a.set(P), P)) {
							const k = (0, d.$dhb)(I.activeElement);
							t.Event.once(k.onDidBlur)(() => {
								(0, d.$Ogb)().document === I && this.a.set(T()), k.dispose();
							});
						}
					}
					jb() {
						this.q.set(this.mb());
					}
					kb() {
						this.r.set(this.U.getWorkspace().folders.length);
					}
					lb() {
						const I = (0, m.$HY)(this.W);
						this.n.set(I === m.GroupDirection.DOWN);
					}
					mb() {
						switch (this.U.getWorkbenchState()) {
							case a.WorkbenchState.EMPTY:
								return "empty";
							case a.WorkbenchState.FOLDER:
								return "folder";
							case a.WorkbenchState.WORKSPACE:
								return "workspace";
						}
					}
					nb() {
						this.H.set(this.ab.isVisible(h.Parts.SIDEBAR_PART));
					}
					ob() {
						this.Q.set(this.ab.isVisible(h.Parts.TITLEBAR_PART, l.$Bfb)),
							this.R.set((0, s.$zY)(this.W));
					}
					pb() {
						this.w.set((0, n.$F8)(this.U.getWorkspace()) || ""),
							this.y.set((0, a.$bj)(this.U.getWorkspace()));
					}
				};
				(e.$l3c = v),
					(e.$l3c = v =
						Ne(
							[
								j(0, w.$6j),
								j(1, a.$Vi),
								j(2, r.$gj),
								j(3, u.$r8),
								j(4, b.$Bk),
								j(5, m.$EY),
								j(6, $.$IY),
								j(7, h.$mEb),
								j(8, o.$6Sb),
								j(9, g.$gY),
							],
							v,
						));
			},
		),
		