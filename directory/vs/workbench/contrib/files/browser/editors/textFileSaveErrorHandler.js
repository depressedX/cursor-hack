import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/errorMessage.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/files/common/files.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../base/common/map.js';
import '../../../../common/editor/diffEditorInput.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../common/files.js';
import './fileEditorInput.js';
import '../fileConstants.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/product/common/productService.js';
import '../../../../../base/common/event.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/network.js';
import '../../../../services/preferences/common/preferences.js';
import '../../../../common/editor.js';
import '../../../../../base/common/hash.js';
import '../../../prettyDialog/browser/prettyDialog.js';
define(
			de[1882],
			he([
				1, 0, 4, 163, 19, 50, 9, 22, 85, 5, 3, 42, 59, 296, 8, 220, 844, 554,
				40, 41, 21, 62, 6, 18, 12, 23, 131, 44, 136, 559,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*errorMessage*/,
				w /*resources*/,
				E /*actions*/,
				C /*uri*/,
				d /*files*/,
				m /*textfiles*/,
				r /*instantiation*/,
				u /*lifecycle*/,
				a /*resolverService*/,
				h /*map*/,
				c /*diffEditorInput*/,
				n /*contextkey*/,
				g /*files*/,
				p /*fileEditorInput*/,
				o /*fileConstants*/,
				f /*notification*/,
				b /*opener*/,
				s /*storage*/,
				l /*productService*/,
				y /*event*/,
				$ /*editorService*/,
				v /*platform*/,
				S /*network*/,
				I /*preferences*/,
				T /*editor*/,
				P /*hash*/,
				k /*prettyDialog*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VMc = e.$UMc = e.$TMc = e.$SMc = e.$RMc = void 0),
					(e.$RMc = "saveConflictResolutionContext"),
					(e.$SMc = "conflictResolution");
				const L = "learnMoreDirtyWriteError",
					D = (0, t.localize)(6663, null);
				let M = class extends u.$1c {
					static {
						this.ID = "workbench.contrib.textFileSaveErrorHandler";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.f = X),
							(this.g = Y),
							(this.h = ie),
							(this.j = ne),
							(this.m = _),
							(this.n = te),
							(this.q = Q),
							(this.a = new h.$Gc()),
							(this.b = new n.$5j(e.$RMc, !1, !0).bindTo(this.h)),
							(this.c = void 0);
						const Z = this.D(_.createInstance(g.$TUb));
						this.D(ee.registerTextModelContentProvider(e.$SMc, Z)),
							(this.g.files.saveErrorHandler = this),
							this.r();
					}
					r() {
						this.D(this.g.files.onDidSave((X) => this.t(X.model.resource))),
							this.D(this.g.files.onDidRevert((X) => this.t(X.resource))),
							this.D(this.j.onDidActiveEditorChange(() => this.s()));
					}
					s() {
						let X = !1,
							Y;
						const ie = this.j.activeEditor;
						ie instanceof c.$GVb &&
							ie.original.resource?.scheme === e.$SMc &&
							((X = !0), (Y = ie.modified.resource)),
							this.b.set(X),
							(this.c = Y);
					}
					t(X) {
						const Y = this.a.get(X);
						Y && (Y.close(), this.a.delete(X));
					}
					onSaveError(X, Y, ie) {
						const ne = X,
							ee = Y.resource;
						let _;
						const te = [],
							Q = [];
						if (
							ne.fileOperationResult ===
							d.FileOperationResult.FILE_MODIFIED_SINCE
						)
							if (this.c && (0, w.$gh)(this.c, Y.resource)) {
								if (this.n.getBoolean(L, s.StorageScope.APPLICATION)) return;
								(_ = D),
									te.push(this.m.createInstance(R)),
									Q.push(this.m.createInstance(O));
							} else
								(_ = (0, t.localize)(6664, null, (0, w.$kh)(ee))),
									te.push(this.m.createInstance(B, Y)),
									te.push(this.m.createInstance(q, Y, ie)),
									Q.push(this.m.createInstance(V));
						else {
							const Z =
									ne.fileOperationResult ===
									d.FileOperationResult.FILE_WRITE_LOCKED,
								se = Z && ne.options?.unlock,
								re =
									ne.fileOperationResult ===
									d.FileOperationResult.FILE_PERMISSION_DENIED,
								le = ee.scheme === S.Schemas.file;
							le && (re || se)
								? te.push(this.m.createInstance(U, Y, ie, !!se))
								: Z
									? te.push(this.m.createInstance(H, Y, ie))
									: te.push(this.m.createInstance(z, Y, ie)),
								te.push(this.m.createInstance(x, Y)),
								te.push(this.m.createInstance(F, Y)),
								Z
									? se && le
										? (_ = v.$l
												? (0, t.localize)(6665, null, (0, w.$kh)(ee))
												: (0, t.localize)(6666, null, (0, w.$kh)(ee)))
										: (_ = (0, t.localize)(6667, null, (0, w.$kh)(ee)))
									: le && re
										? (_ = v.$l
												? (0, t.localize)(6668, null, (0, w.$kh)(ee))
												: (0, t.localize)(6669, null, (0, w.$kh)(ee)))
										: (_ = (0, t.localize)(
												6670,
												null,
												(0, w.$kh)(ee),
												(0, i.$xj)(X, !1),
											));
						}
						if (ie.showPrettyDialogOnError) {
							const Z =
									te.length > 0 ? { id: te[0].id, label: te[0].label } : void 0,
								se = te
									.slice(1)
									.map((le) => ({
										id: le.id,
										label: le.label,
										type: "secondary",
									})),
								re = { id: "cancel", label: "Cancel" };
							this.q
								.openDialog({
									title: "Save Error",
									message: _,
									primaryButton: Z,
									extraButtons: se,
									cancelButton: re,
								})
								.then(async (le) => {
									const oe = te.find((ae) => ae.id === le);
									oe && (await oe.run()), (0, u.$Vc)(te), (0, u.$Vc)(Q);
								});
						} else {
							const Z = { primary: te, secondary: Q },
								se = this.f.notify({
									id: `${(0, P.$Aj)(Y.resource.toString())}`,
									severity: f.Severity.Error,
									message: _,
									actions: Z,
								});
							y.Event.once(se.onDidClose)(() => {
								(0, u.$Vc)(te), (0, u.$Vc)(Q);
							}),
								this.a.set(Y.resource, se);
						}
					}
					dispose() {
						super.dispose(), this.a.clear();
					}
				};
				(e.$TMc = M),
					(e.$TMc = M =
						Ne(
							[
								j(0, f.$4N),
								j(1, m.$kZ),
								j(2, n.$6j),
								j(3, $.$IY),
								j(4, a.$MO),
								j(5, r.$Li),
								j(6, s.$lq),
								j(7, k.$hdc),
							],
							M,
						));
				const N = [];
				function A() {
					for (; N.length > 0; ) N.pop()?.close();
				}
				let R = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.resolveConflictLearnMore",
							(0, t.localize)(6671, null),
						),
							(this.a = X);
					}
					async run() {
						await this.a.open(
							C.URI.parse("https://go.microsoft.com/fwlink/?linkid=868264"),
						);
					}
				};
				R = Ne([j(0, b.$7rb)], R);
				let O = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.resolveConflictLearnMoreDoNotShowAgain",
							(0, t.localize)(6672, null),
						),
							(this.a = X);
					}
					async run(X) {
						this.a.store(
							L,
							!0,
							s.StorageScope.APPLICATION,
							s.StorageTarget.USER,
						),
							X.dispose();
					}
				};
				O = Ne([j(0, s.$lq)], O);
				let B = class extends E.$rj {
					constructor(X, Y, ie, ne, ee) {
						super(
							"workbench.files.action.resolveConflict",
							(0, t.localize)(6673, null),
						),
							(this.a = X),
							(this.b = Y),
							(this.c = ie),
							(this.f = ne),
							(this.g = ee);
					}
					async run() {
						if (!this.a.isDisposed()) {
							const X = this.a.resource,
								Y = (0, w.$kh)(X),
								ie = (0, t.localize)(6674, null, Y, Y, this.g.nameLong);
							await g.$TUb.open(X, e.$SMc, ie, this.b, { pinned: !0 });
							const ne = { primary: [this.f.createInstance(R)] },
								ee = this.c.notify({
									id: `${(0, P.$Aj)(X.toString())}`,
									severity: f.Severity.Info,
									message: D,
									actions: ne,
									neverShowAgain: { id: L, isSecondary: !0 },
								});
							y.Event.once(ee.onDidClose)(() => (0, u.$Vc)(ne.primary)),
								N.push(ee);
						}
					}
				};
				B = Ne([j(1, $.$IY), j(2, f.$4N), j(3, r.$Li), j(4, l.$Bk)], B);
				class U extends E.$rj {
					constructor(X, Y, ie) {
						super(
							"workbench.files.action.saveModelElevated",
							ie
								? v.$l
									? (0, t.localize)(6675, null)
									: (0, t.localize)(6676, null)
								: v.$l
									? (0, t.localize)(6677, null)
									: (0, t.localize)(6678, null),
						),
							(this.a = X),
							(this.b = Y),
							(this.c = ie);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								writeElevated: !0,
								writeUnlock: this.c,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				class z extends E.$rj {
					constructor(X, Y) {
						super(
							"workbench.files.action.saveModel",
							(0, t.localize)(6679, null),
						),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({ ...this.b, reason: T.SaveReason.EXPLICIT }));
					}
				}
				class F extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.revertModel",
							(0, t.localize)(6680, null),
						),
							(this.a = X);
					}
					async run() {
						this.a.isDisposed() || (await this.a.revert());
					}
				}
				let x = class extends E.$rj {
					constructor(X, Y) {
						super("workbench.files.action.saveModelAs", o.$7Ub.value),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						if (!this.a.isDisposed()) {
							const X = this.c();
							X &&
								(await this.b.save(X, {
									saveAs: !0,
									reason: T.SaveReason.EXPLICIT,
								}));
						}
					}
					c() {
						let X;
						const Y = this.b.findEditors(this.a.resource, {
							supportSideBySide: T.SideBySideEditor.PRIMARY,
						});
						for (const ie of Y)
							if (ie.editor instanceof p.$nec) {
								X = ie;
								break;
							} else X || (X = ie);
						return X;
					}
				};
				x = Ne([j(1, $.$IY)], x);
				class H extends E.$rj {
					constructor(X, Y) {
						super("workbench.files.action.unlock", (0, t.localize)(6681, null)),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								writeUnlock: !0,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				class q extends E.$rj {
					constructor(X, Y) {
						super(
							"workbench.files.action.saveIgnoreModifiedSince",
							(0, t.localize)(6682, null),
						),
							(this.a = X),
							(this.b = Y);
					}
					async run() {
						this.a.isDisposed() ||
							(await this.a.save({
								...this.b,
								ignoreModifiedSince: !0,
								reason: T.SaveReason.EXPLICIT,
							}));
					}
				}
				let V = class extends E.$rj {
					constructor(X) {
						super(
							"workbench.files.action.configureSaveConflict",
							(0, t.localize)(6683, null),
						),
							(this.a = X);
					}
					async run() {
						this.a.openSettings({ query: "files.saveConflictResolution" });
					}
				};
				V = Ne([j(0, I.$7Z)], V);
				const G = (W, X) => J(W, X, !0);
				e.$UMc = G;
				const K = (W, X) => J(W, X, !1);
				e.$VMc = K;
				async function J(W, X, Y) {
					const ie = W.get($.$IY),
						ne = ie.activeEditorPane;
					if (!ne) return;
					const ee = ne.input,
						_ = ne.group;
					if ((A(), Y)) {
						const te = {
							ignoreModifiedSince: !0,
							reason: T.SaveReason.EXPLICIT,
						};
						await ie.save({ editor: ee, groupId: _.id }, te);
					} else await ie.revert({ editor: ee, groupId: _.id });
					return await ie.openEditor({ resource: X }, _), _.closeEditor(ee);
				}
			},
		)
