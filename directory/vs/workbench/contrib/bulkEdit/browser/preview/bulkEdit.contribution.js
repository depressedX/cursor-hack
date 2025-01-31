import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/registry/common/platform.js';
import '../../../../common/contributions.js';
import '../../../../../editor/browser/services/bulkEditService.js';
import './bulkEditPane.js';
import '../../../../common/views.js';
import '../../../../services/views/common/viewsService.js';
import '../../../../common/contextkeys.js';
import '../../../../../nls.js';
import '../../../../browser/parts/views/viewPaneContainer.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../services/editor/common/editorGroupsService.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../platform/list/browser/listService.js';
import '../../../../../platform/instantiation/common/descriptors.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../common/editor.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../platform/dialogs/common/dialogs.js';
import '../../../../../base/common/severity.js';
import '../../../../../base/common/codicons.js';
import '../../../../../platform/theme/common/iconRegistry.js';
import '../../../../services/panecomposite/browser/panecomposite.js';
define(
		de[4018],
		he([
			1, 0, 30, 55, 199, 3805, 60, 89, 100, 4, 239, 8, 66, 43, 27, 93, 102, 11,
			44, 33, 57, 111, 14, 79, 142,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*platform*/,
			i /*contributions*/,
			w /*bulkEditService*/,
			E /*bulkEditPane*/,
			C /*views*/,
			d /*viewsService*/,
			m /*contextkeys*/,
			r /*nls*/,
			u /*viewPaneContainer*/,
			a /*contextkey*/,
			h /*editorGroupsService*/,
			c /*keybindingsRegistry*/,
			n /*keyCodes*/,
			g /*listService*/,
			p /*descriptors*/,
			o /*actions*/,
			f /*editor*/,
			b /*cancellation*/,
			s /*dialogs*/,
			l /*severity*/,
			y /*codicons*/,
			$ /*iconRegistry*/,
			v /*panecomposite*/,
) {
			"use strict";
			var S;
			Object.defineProperty(e, "__esModule", { value: !0 }), (l = xi(l));
			async function I(M) {
				const N = await M.openView(E.$tNc.ID, !0);
				if (N instanceof E.$tNc) return N;
			}
			let T = class {
				constructor(N, A) {
					(this.b = N),
						(this.c = A),
						(this.a = N.getActivePaneComposite(
							C.ViewContainerLocation.Panel,
						)?.getId());
				}
				async restore(N, A) {
					if (
						(N &&
							(typeof this.a == "string"
								? await this.b.openPaneComposite(
										this.a,
										C.ViewContainerLocation.Panel,
									)
								: this.b.hideActivePaneComposite(
										C.ViewContainerLocation.Panel,
									)),
						A)
					)
						for (const R of this.c.groups) {
							const O = [];
							for (const B of R.editors)
								f.$A1.getCanonicalUri(B, {
									supportSideBySide: f.SideBySideEditor.PRIMARY,
								})?.scheme === E.$tNc.Schema && O.push(B);
							O.length && R.closeEditors(O, { preserveFocus: !0 });
						}
				}
			};
			T = Ne([j(0, v.$6Sb), j(1, h.$EY)], T);
			class P {
				constructor(N, A = new b.$Ce()) {
					(this.uxState = N), (this.cts = A);
				}
			}
			let k = class {
				static {
					S = this;
				}
				static {
					this.ID = "workbench.contrib.bulkEditPreview";
				}
				static {
					this.ctxEnabled = new a.$5j("refactorPreview.enabled", !1);
				}
				constructor(N, A, R, O, B, U) {
					(this.c = N),
						(this.d = A),
						(this.e = R),
						(this.f = O),
						B.setPreviewHandler((z) => this.g(z)),
						(this.a = S.ctxEnabled.bindTo(U));
				}
				async g(N) {
					this.a.set(!0);
					const A = this.b?.uxState ?? new T(this.c, this.e),
						R = await I(this.d);
					if (!R) return this.a.set(!1), N;
					if (R.hasInput()) {
						const { confirmed: B } = await this.f.confirm({
							type: l.default.Info,
							message: (0, r.localize)(4480, null),
							detail: (0, r.localize)(4481, null),
							primaryButton: (0, r.localize)(4482, null),
						});
						if (!B) return [];
					}
					let O;
					this.b
						? (await this.b.uxState.restore(!1, !0),
							this.b.cts.dispose(!0),
							(O = new P(A)))
						: (O = new P(A)),
						(this.b = O);
					try {
						return (await R.setInput(N, O.cts.token)) ?? [];
					} finally {
						this.b === O &&
							(await this.b.uxState.restore(!0, !0),
							this.b.cts.dispose(),
							this.a.set(!1),
							(this.b = void 0));
					}
				}
			};
			(k = S =
				Ne(
					[
						j(0, v.$6Sb),
						j(1, d.$HMb),
						j(2, h.$EY),
						j(3, s.$GO),
						j(4, w.$rzb),
						j(5, a.$6j),
					],
					k,
				)),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.apply",
								title: (0, r.localize2)(4484, "Apply Refactoring"),
								category: (0, r.localize2)(4485, "Refactor Preview"),
								icon: y.$ak.check,
								precondition: a.$Kj.and(
									k.ctxEnabled,
									E.$tNc.ctxHasCheckedChanges,
								),
								menu: [{ id: o.$XX.BulkEditContext, order: 1 }],
								keybinding: {
									weight: c.KeybindingWeight.EditorContrib - 10,
									when: a.$Kj.and(k.ctxEnabled, m.$zQb.isEqualTo(E.$tNc.ID)),
									primary: n.KeyMod.CtrlCmd + n.KeyCode.Enter,
								},
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.accept();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.discard",
								title: (0, r.localize2)(4486, "Discard Refactoring"),
								category: (0, r.localize2)(4487, "Refactor Preview"),
								icon: y.$ak.clearAll,
								precondition: k.ctxEnabled,
								menu: [{ id: o.$XX.BulkEditContext, order: 2 }],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.discard();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.toggleCheckedState",
								title: (0, r.localize2)(4488, "Toggle Change"),
								category: (0, r.localize2)(4489, "Refactor Preview"),
								precondition: k.ctxEnabled,
								keybinding: {
									weight: c.KeybindingWeight.WorkbenchContrib,
									when: g.$nMb,
									primary: n.KeyCode.Space,
								},
								menu: { id: o.$XX.BulkEditContext, group: "navigation" },
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.toggleChecked();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.groupByFile",
								title: (0, r.localize2)(4490, "Group Changes By File"),
								category: (0, r.localize2)(4491, "Refactor Preview"),
								icon: y.$ak.ungroupByRefType,
								precondition: a.$Kj.and(
									E.$tNc.ctxHasCategories,
									E.$tNc.ctxGroupByFile.negate(),
									k.ctxEnabled,
								),
								menu: [
									{
										id: o.$XX.BulkEditTitle,
										when: a.$Kj.and(
											E.$tNc.ctxHasCategories,
											E.$tNc.ctxGroupByFile.negate(),
										),
										group: "navigation",
										order: 3,
									},
								],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.groupByFile();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.groupByType",
								title: (0, r.localize2)(4492, "Group Changes By Type"),
								category: (0, r.localize2)(4493, "Refactor Preview"),
								icon: y.$ak.groupByRefType,
								precondition: a.$Kj.and(
									E.$tNc.ctxHasCategories,
									E.$tNc.ctxGroupByFile,
									k.ctxEnabled,
								),
								menu: [
									{
										id: o.$XX.BulkEditTitle,
										when: a.$Kj.and(
											E.$tNc.ctxHasCategories,
											E.$tNc.ctxGroupByFile,
										),
										group: "navigation",
										order: 3,
									},
								],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.groupByType();
						}
					},
				),
				(0, o.$4X)(
					class extends o.$3X {
						constructor() {
							super({
								id: "refactorPreview.toggleGrouping",
								title: (0, r.localize2)(4494, "Group Changes By Type"),
								category: (0, r.localize2)(4495, "Refactor Preview"),
								icon: y.$ak.listTree,
								toggled: E.$tNc.ctxGroupByFile.negate(),
								precondition: a.$Kj.and(E.$tNc.ctxHasCategories, k.ctxEnabled),
								menu: [{ id: o.$XX.BulkEditContext, order: 3 }],
							});
						}
						async run(N) {
							const A = N.get(d.$HMb);
							(await I(A))?.toggleGrouping();
						}
					},
				),
				(0, i.$s6)(k.ID, k, i.WorkbenchPhase.BlockRestore);
			const L = (0, $.$$O)(
					"refactor-preview-view-icon",
					y.$ak.lightbulb,
					(0, r.localize)(4483, null),
				),
				D = t.$Io
					.as(C.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: E.$tNc.ID,
							title: (0, r.localize2)(4496, "Refactor Preview"),
							hideIfEmpty: !0,
							ctorDescriptor: new p.$Ji(u.$ZSb, [
								E.$tNc.ID,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							icon: L,
							storageId: E.$tNc.ID,
						},
						C.ViewContainerLocation.Panel,
					);
			t.$Io
				.as(C.Extensions.ViewsRegistry)
				.registerViews(
					[
						{
							id: E.$tNc.ID,
							name: (0, r.localize2)(4497, "Refactor Preview"),
							when: k.ctxEnabled,
							ctorDescriptor: new p.$Ji(E.$tNc),
							containerIcon: L,
						},
					],
					D,
				);
		},
	)
