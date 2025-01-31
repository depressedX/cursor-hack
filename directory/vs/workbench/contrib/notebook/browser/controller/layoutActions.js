import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uri.js';
import '../../../../../nls.js';
import '../../../../../platform/action/common/actionCommonCategories.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import './coreActions.js';
import '../notebookBrowser.js';
import '../services/notebookEditorService.js';
import '../../common/notebookCommon.js';
import '../../common/notebookContextKeys.js';
import '../../common/notebookService.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/preferences/common/preferences.js';
define(
			de[3534],
			he([
				1, 0, 14, 3, 9, 4, 99, 11, 31, 10, 8, 63, 238, 108, 293, 70, 176, 161,
				18, 131,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*nls*/,
 C /*actionCommonCategories*/,
 d /*actions*/,
 m /*commands*/,
 r /*configuration*/,
 u /*contextkey*/,
 a /*quickInput*/,
 h /*coreActions*/,
 c /*notebookBrowser*/,
 n /*notebookEditorService*/,
 g /*notebookCommon*/,
 p /*notebookContextKeys*/,
 o /*notebookService*/,
 f /*editorService*/,
 b /*preferences*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.select",
									title: (0, E.localize2)(
										7946,
										"Select between Notebook Layouts",
									),
									f1: !0,
									precondition: u.$Kj.equals(
										`config.${g.$56.openGettingStarted}`,
										!0,
									),
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.EditorTitle,
											group: "notebookLayout",
											when: u.$Kj.and(
												p.$mJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
												u.$Kj.equals(`config.${g.$56.openGettingStarted}`, !0),
											),
											order: 0,
										},
										{
											id: d.$XX.NotebookToolbar,
											group: "notebookLayout",
											when: u.$Kj.and(
												u.$Kj.equals("config.notebook.globalToolbar", !0),
												u.$Kj.equals(`config.${g.$56.openGettingStarted}`, !0),
											),
											order: 0,
										},
									],
								});
							}
							run(l) {
								l.get(m.$ek).executeCommand(
									"workbench.action.openWalkthrough",
									{ category: "notebooks", step: "notebookProfile" },
									!0,
								);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.configure",
									title: (0, E.localize2)(7947, "Customize Notebook Layout"),
									f1: !0,
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.NotebookToolbar,
											group: "notebookLayout",
											when: u.$Kj.equals("config.notebook.globalToolbar", !0),
											order: 1,
										},
									],
								});
							}
							run(l) {
								l.get(b.$7Z).openSettings({
									jsonEditor: !1,
									query: "@tag:notebookLayout",
								});
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.configure.editorTitle",
									title: (0, E.localize2)(7948, "Customize Notebook Layout"),
									f1: !1,
									category: h.$p5b,
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayout",
											when: p.$mJb,
											order: 1,
										},
									],
								});
							}
							run(l) {
								l.get(b.$7Z).openSettings({
									jsonEditor: !1,
									query: "@tag:notebookLayout",
								});
							}
						},
					),
					d.$ZX.appendMenuItem(d.$XX.EditorTitle, {
						submenu: d.$XX.NotebookEditorLayoutConfigure,
						rememberDefaultAction: !1,
						title: (0, E.localize2)(7949, "Customize Notebook..."),
						icon: t.$ak.gear,
						group: "navigation",
						order: -1,
						when: p.$mJb,
					}),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.toggleLineNumbersFromEditorTitle",
									title: (0, E.localize2)(7950, "Toggle Notebook Line Numbers"),
									precondition: p.$pJb,
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 1,
											when: p.$mJb,
										},
									],
									category: h.$p5b,
									f1: !0,
									toggled: {
										condition: u.$Kj.notEquals(
											"config.notebook.lineNumbers",
											"off",
										),
										title: (0, E.localize)(7939, null),
									},
								});
							}
							async run(l) {
								return l
									.get(m.$ek)
									.executeCommand("notebook.toggleLineNumbers");
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.toggleCellToolbarPositionFromEditorTitle",
									title: (0, E.localize2)(7951, "Toggle Cell Toolbar Position"),
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 3,
										},
									],
									category: h.$p5b,
									f1: !1,
								});
							}
							async run(l, ...y) {
								return l
									.get(m.$ek)
									.executeCommand("notebook.toggleCellToolbarPosition", ...y);
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "breadcrumbs.toggleFromEditorTitle",
									title: (0, E.localize2)(7952, "Toggle Breadcrumbs"),
									menu: [
										{
											id: d.$XX.NotebookEditorLayoutConfigure,
											group: "notebookLayoutDetails",
											order: 2,
										},
									],
									f1: !1,
								});
							}
							async run(l) {
								return l.get(m.$ek).executeCommand("breadcrumbs.toggle");
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.saveMimeTypeOrder",
									title: (0, E.localize2)(7953, "Save Mimetype Display Order"),
									f1: !0,
									category: h.$p5b,
									precondition: p.$mJb,
								});
							}
							run(l) {
								const y = l.get(o.$MIb),
									$ = new i.$Zc(),
									v = $.add(l.get(a.$DJ).createQuickPick());
								(v.placeholder = (0, E.localize)(7940, null)),
									(v.items = [
										{
											target: r.ConfigurationTarget.USER,
											label: (0, E.localize)(7941, null),
										},
										{
											target: r.ConfigurationTarget.WORKSPACE,
											label: (0, E.localize)(7942, null),
										},
									]),
									$.add(
										v.onDidAccept(() => {
											const S = v.selectedItems[0]?.target;
											S !== void 0 && y.saveMimeDisplayOrder(S), v.dispose();
										}),
									),
									$.add(v.onDidHide(() => $.dispose())),
									v.show();
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "workbench.notebook.layout.webview.reset",
									title: (0, E.localize2)(7954, "Reset Notebook Webview"),
									f1: !1,
									category: h.$p5b,
								});
							}
							run(l, y) {
								const $ = l.get(f.$IY);
								if (y) {
									const v = w.URI.revive(y),
										I = l
											.get(n.$n5b)
											.listNotebookEditors()
											.filter(
												(T) =>
													T.hasModel() &&
													T.textModel.uri.toString() === v.toString(),
											);
									for (const T of I)
										T.hasModel() && T.getInnerWebview()?.reload();
								} else {
									const v = (0, c.$eJb)($.activeEditorPane);
									if (!v) return;
									v.getInnerWebview()?.reload();
								}
							}
						},
					),
					(0, d.$4X)(
						class extends d.$3X {
							constructor() {
								super({
									id: "notebook.action.toggleNotebookStickyScroll",
									title: {
										...(0, E.localize2)(7955, "Toggle Notebook Sticky Scroll"),
										mnemonicTitle: (0, E.localize)(7943, null),
									},
									category: C.$ck.View,
									toggled: {
										condition: u.$Kj.equals(
											"config.notebook.stickyScroll.enabled",
											!0,
										),
										title: (0, E.localize)(7944, null),
										mnemonicTitle: (0, E.localize)(7945, null),
									},
									menu: [
										{ id: d.$XX.CommandPalette },
										{
											id: d.$XX.NotebookStickyScrollContext,
											group: "notebookView",
											order: 2,
										},
									],
								});
							}
							async run(l) {
								const y = l.get(r.$gj),
									$ = !y.getValue("notebook.stickyScroll.enabled");
								return y.updateValue("notebook.stickyScroll.enabled", $);
							}
						},
					);
			},
		)
