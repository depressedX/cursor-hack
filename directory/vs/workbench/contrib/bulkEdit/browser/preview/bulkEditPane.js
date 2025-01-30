import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/button/button.js';
import '../../../../../base/common/cache.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../platform/hover/browser/hover.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/opener/common/opener.js';
import '../../../../../platform/storage/common/storage.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/browser/defaultStyles.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../browser/labels.js';
import '../../../../browser/parts/views/viewPane.js';
import '../../../../common/views.js';
import './bulkEditPreview.js';
import './bulkEditTree.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../css!vs/workbench/contrib/bulkEdit/browser/preview/bulkEdit.js';
define(
			de[3805],
			he([
				1, 0, 183, 744, 3, 9, 42, 4, 11, 10, 8, 49, 57, 72, 5, 39, 73, 93, 41,
				21, 32, 106, 35, 233, 146, 60, 1843, 3486, 18, 2388,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*button*/,
				i /*cache*/,
				w /*lifecycle*/,
				E /*uri*/,
				C /*resolverService*/,
				d /*nls*/,
				m /*actions*/,
				r /*configuration*/,
				u /*contextkey*/,
				a /*contextView*/,
				h /*dialogs*/,
				c /*hover*/,
				n /*instantiation*/,
				g /*keybinding*/,
				p /*label*/,
				o /*listService*/,
				f /*opener*/,
				b /*storage*/,
				s /*telemetry*/,
				l /*defaultStyles*/,
				y /*themeService*/,
				$ /*labels*/,
				v /*viewPane*/,
				S /*views*/,
				I /*bulkEditPreview*/,
				T /*bulkEditTree*/,
				P /*editorService*/,
) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tNc = void 0);
				var L;
				(function (M) {
					(M.Data = "data"), (M.Message = "message");
				})(L || (L = {}));
				let D = class extends v.$TMb {
					static {
						k = this;
					}
					static {
						this.ID = "refactorPreview";
					}
					static {
						this.Schema = "vscode-bulkeditpreview-multieditor";
					}
					static {
						this.ctxHasCategories = new u.$5j(
							"refactorPreview.hasCategories",
							!1,
						);
					}
					static {
						this.ctxGroupByFile = new u.$5j("refactorPreview.groupByFile", !0);
					}
					static {
						this.ctxHasCheckedChanges = new u.$5j(
							"refactorPreview.hasCheckedChanges",
							!0,
						);
					}
					static {
						this.a = `${this.ID}.groupByFile`;
					}
					constructor(N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W, X) {
						super(
							{ ...N, titleMenuId: m.$XX.BulkEditTitle },
							q,
							V,
							G,
							x,
							H,
							A,
							K,
							J,
							W,
							X,
						),
							(this.ab = A),
							(this.sb = R),
							(this.cc = O),
							(this.dc = B),
							(this.ec = U),
							(this.fc = z),
							(this.gc = F),
							(this.f = new Map()),
							(this.n = new w.$Zc()),
							(this.r = new w.$Zc()),
							(this.nc = new i.$ff(async (Y) => {
								const ie = new i.$gf(async (te) => {
										const Q = te.uri,
											Z = this.L.asPreviewUri(Q);
										if (te.type & I.BulkFileOperationType.Delete)
											return {
												original: { resource: E.URI.revive(Z) },
												modified: { resource: void 0 },
												goToFileResource: te.uri,
											};
										{
											let se;
											try {
												(await this.dc.createModelReference(Q)).dispose(),
													(se = Q);
											} catch {
												se = I.$fNc.emptyPreview;
											}
											return {
												original: { resource: E.URI.revive(se) },
												modified: { resource: E.URI.revive(Z) },
												goToFileResource: se,
											};
										}
									}),
									ne = Y.slice().sort(T.$lNc),
									ee = [];
								for (const te of ne) ee.push(await ie.get(te));
								return {
									resources: ee,
									getResourceDiffEditorInputIdOfOperation: async (te) => {
										const Q = await ie.get(te);
										return {
											original: Q.original.resource,
											modified: Q.modified.resource,
										};
									},
								};
							})),
							this.element.classList.add("bulk-edit-panel", "show-file-icons"),
							(this.h = k.ctxHasCategories.bindTo(x)),
							(this.j = k.ctxGroupByFile.bindTo(x)),
							(this.m = k.ctxHasCheckedChanges.bindTo(x)),
							this.Gb.publicLog2("views.bulkEditPane");
					}
					dispose() {
						this.b.dispose(), this.n.dispose(), super.dispose();
					}
					W(N) {
						super.W(N);
						const A = this.ab.createInstance($.$uPb, {
							onDidChangeVisibility: this.onDidChangeBodyVisibility,
						});
						this.n.add(A);
						const R = document.createElement("div");
						(R.className = "content"), N.appendChild(R);
						const O = document.createElement("div");
						R.appendChild(O),
							(this.c = this.ab.createInstance(T.$jNc)),
							(this.c.groupByFile = this.gc.getBoolean(
								k.a,
								b.StorageScope.PROFILE,
								!0,
							)),
							this.j.set(this.c.groupByFile),
							(this.b = this.ab.createInstance(
								o.$FMb,
								this.id,
								O,
								new T.$rNc(),
								[
									this.ab.createInstance(T.$qNc),
									this.ab.createInstance(T.$pNc, A),
									this.ab.createInstance(T.$oNc),
								],
								this.c,
								{
									accessibilityProvider: this.ab.createInstance(T.$mNc),
									identityProvider: new T.$nNc(),
									expandOnlyOnTwistieClick: !0,
									multipleSelectionSupport: !1,
									keyboardNavigationLabelProvider: new T.$sNc(),
									sorter: new T.$kNc(),
									selectionNavigation: !0,
								},
							)),
							this.n.add(this.b.onContextMenu(this.oc, this)),
							this.n.add(this.b.onDidOpen((x) => this.mc(x)));
						const B = document.createElement("div");
						(B.className = "buttons"), R.appendChild(B);
						const U = new t.$rob(B);
						this.n.add(U);
						const z = U.addButton({ supportIcons: !0, ...l.$lyb });
						(z.label = (0, d.localize)(4498, null)),
							z.onDidClick(() => this.accept(), this, this.n);
						const F = U.addButton({ ...l.$lyb, secondary: !0 });
						(F.label = (0, d.localize)(4499, null)),
							F.onDidClick(() => this.discard(), this, this.n),
							(this.g = document.createElement("span")),
							(this.g.className = "message"),
							(this.g.innerText = (0, d.localize)(4500, null)),
							N.appendChild(this.g),
							this.jc(L.Message);
					}
					X(N, A) {
						super.X(N, A);
						const R = N - 50;
						(this.b.getHTMLElement().parentElement.style.height = `${R}px`),
							this.b.layout(R, A);
					}
					jc(N) {
						this.element.dataset.state = N;
					}
					async setInput(N, A) {
						this.jc(L.Data),
							this.r.clear(),
							this.f.clear(),
							this.s && (this.s(void 0), (this.s = void 0));
						const R = await this.ab.invokeFunction(I.$eNc.create, N);
						(this.L = this.ab.createInstance(I.$fNc, R)),
							this.r.add(this.L),
							this.r.add(R);
						const O = R.categories.length > 1;
						return (
							this.h.set(O),
							(this.c.groupByFile = !O || this.c.groupByFile),
							this.m.set(R.checked.checkedCount > 0),
							(this.t = R),
							new Promise((B) => {
								A.onCancellationRequested(() => B(void 0)),
									(this.s = B),
									this.kc(R),
									this.r.add(
										R.checked.onDidChange(() => {
											this.b.updateChildren(),
												this.m.set(R.checked.checkedCount > 0);
										}),
									);
							})
						);
					}
					hasInput() {
						return !!this.t;
					}
					async kc(N) {
						const A = this.f.get(this.c.groupByFile);
						if ((await this.b.setInput(N, A), this.b.domFocus(), A)) return;
						const R = [...this.b.getNode(N).children].slice(0, 10);
						for (; R.length > 0; ) {
							const { element: O } = R.shift();
							O instanceof T.$hNc && (await this.b.expand(O, !0)),
								O instanceof T.$gNc &&
									(await this.b.expand(O, !0),
									R.push(...this.b.getNode(O).children));
						}
					}
					accept() {
						const N = this.t?.conflicts.list();
						if (!N || N.length === 0) {
							this.lc(!0);
							return;
						}
						let A;
						N.length === 1
							? (A = (0, d.localize)(
									4501,
									null,
									this.cc.getUriLabel(N[0], { relative: !0 }),
								))
							: (A = (0, d.localize)(4502, null, N.length)),
							this.ec.warn(A).finally(() => this.lc(!1));
					}
					discard() {
						this.lc(!1);
					}
					lc(N) {
						this.s?.(N ? this.t?.getWorkspaceEdit() : void 0),
							(this.t = void 0),
							this.jc(L.Message),
							this.r.clear();
					}
					toggleChecked() {
						const [N] = this.b.getFocus();
						(((N instanceof T.$hNc || N instanceof T.$iNc) &&
							!N.isDisabled()) ||
							N instanceof T.$gNc) &&
							N.setChecked(!N.isChecked());
					}
					groupByFile() {
						this.c.groupByFile || this.toggleGrouping();
					}
					groupByType() {
						this.c.groupByFile && this.toggleGrouping();
					}
					toggleGrouping() {
						const N = this.b.getInput();
						if (N) {
							const A = this.b.getViewState();
							this.f.set(this.c.groupByFile, A),
								(this.c.groupByFile = !this.c.groupByFile),
								this.kc(N),
								this.gc.store(
									k.a,
									this.c.groupByFile,
									b.StorageScope.PROFILE,
									b.StorageTarget.USER,
								),
								this.j.set(this.c.groupByFile);
						}
					}
					async mc(N) {
						const A = this.t?.fileOperations;
						if (!A) return;
						let R, O;
						if (N.element instanceof T.$iNc)
							(O = N.element.parent),
								(R = N.element.edit.textEdit.textEdit.range);
						else if (N.element instanceof T.$hNc)
							(O = N.element),
								(R = N.element.edit.textEdits[0]?.textEdit.textEdit.range);
						else return;
						const B = await this.nc.get(A),
							U = await B.getResourceDiffEditorInputIdOfOperation(O.edit),
							z = {
								...N.editorOptions,
								viewState: { revealData: { resource: U, range: R } },
							},
							F = E.URI.from({ scheme: k.Schema }),
							x = "Refactor Preview";
						this.sb.openEditor(
							{
								multiDiffSource: F,
								label: x,
								options: z,
								isTransient: !0,
								description: x,
								resources: B.resources,
							},
							N.sideBySide ? P.$KY : P.$JY,
						);
					}
					oc(N) {
						this.fc.showContextMenu({
							menuId: m.$XX.BulkEditContext,
							contextKeyService: this.Bb,
							getAnchor: () => N.anchor,
						});
					}
				};
				(e.$tNc = D),
					(e.$tNc =
						D =
						k =
							Ne(
								[
									j(1, n.$Li),
									j(2, P.$IY),
									j(3, p.$3N),
									j(4, C.$MO),
									j(5, h.$GO),
									j(6, a.$Xxb),
									j(7, b.$lq),
									j(8, u.$6j),
									j(9, S.$K1),
									j(10, g.$uZ),
									j(11, a.$Xxb),
									j(12, r.$gj),
									j(13, f.$7rb),
									j(14, y.$iP),
									j(15, s.$km),
									j(16, c.$Uyb),
								],
								D,
							));
			},
		),
		