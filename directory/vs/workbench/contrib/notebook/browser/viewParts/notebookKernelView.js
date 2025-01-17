import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../../base/common/actions.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/extensions/common/extensions.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/common/themables.js';
import '../controller/coreActions.js';
import '../notebookBrowser.js';
import '../notebookIcons.js';
import './notebookKernelQuickPickStrategy.js';
import '../../common/notebookContextKeys.js';
import '../../common/notebookKernelService.js';
import '../../../../services/editor/common/editorService.js';
define(
			de[1855],
			he([
				1, 0, 198, 50, 4, 11, 8, 109, 5, 26, 238, 108, 284, 1308, 176, 243, 18,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c4b = void 0);
				function o(b, s) {
					let l;
					if (s !== void 0 && "notebookEditorId" in s) {
						const y = s.notebookEditorId,
							$ = b.visibleEditorPanes.find(
								(v) => (0, a.$eJb)(v)?.getId() === y,
							);
						l = (0, a.$eJb)($);
					} else
						s !== void 0 && "notebookEditor" in s
							? (l = s?.notebookEditor)
							: (l = (0, a.$eJb)(b.activeEditorPane));
					return l;
				}
				(0, E.$4X)(
					class extends E.$3X {
						constructor() {
							super({
								id: u.$o5b,
								category: u.$p5b,
								title: (0, w.localize2)(8233, "Select Notebook Kernel"),
								icon: h.$6Nb,
								f1: !0,
								precondition: n.$mJb,
								menu: [
									{
										id: E.$XX.EditorTitle,
										when: C.$Kj.and(
											n.$mJb,
											C.$Kj.notEquals("config.notebook.globalToolbar", !0),
										),
										group: "navigation",
										order: -10,
									},
									{
										id: E.$XX.NotebookToolbar,
										when: C.$Kj.equals("config.notebook.globalToolbar", !0),
										group: "status",
										order: -10,
									},
									{
										id: E.$XX.InteractiveToolbar,
										when: n.$TJb.notEqualsTo(0),
										group: "status",
										order: -10,
									},
								],
								metadata: {
									description: (0, w.localize)(8232, null),
									args: [
										{
											name: "kernelInfo",
											description: "The kernel info",
											schema: {
												type: "object",
												required: ["id", "extension"],
												properties: {
													id: { type: "string" },
													extension: { type: "string" },
													notebookEditorId: { type: "string" },
												},
											},
										},
									],
								},
							});
						}
						async run(b, s) {
							const l = b.get(m.$Li),
								y = b.get(p.$IY),
								$ = o(y, s);
							if (!$ || !$.hasModel()) return !1;
							let v = s && "id" in s ? s.id : void 0,
								S = s && "extension" in s ? s.extension : void 0;
							v &&
								(typeof v != "string" || typeof S != "string") &&
								((v = void 0), (S = void 0));
							const I = $.textModel,
								P = b.get(g.$f6).getMatchingKernel(I),
								{ selected: k } = P;
							if (k && v && k.id === v && d.$Gn.equals(k.extension, S))
								return !0;
							const L = v ? `${S}/${v}` : void 0;
							return l.createInstance(c.$b4b).showQuickPick($, L);
						}
					},
				);
				let f = class extends t.$_ib {
					constructor(s, l, y, $, v) {
						super(
							void 0,
							new i.$rj(
								"fakeAction",
								void 0,
								r.ThemeIcon.asClassName(h.$6Nb),
								!0,
								(S) => s.run(S),
							),
							{ ...y, label: !1, icon: !0 },
						),
							(this.b = l),
							(this.c = $),
							(this.g = v),
							this.D(l.onDidChangeModel(this.n, this)),
							this.D($.onDidAddKernel(this.n, this)),
							this.D($.onDidRemoveKernel(this.n, this)),
							this.D($.onDidChangeNotebookAffinity(this.n, this)),
							this.D($.onDidChangeSelectedNotebooks(this.n, this)),
							this.D($.onDidChangeSourceActions(this.n, this)),
							this.D($.onDidChangeKernelDetectionTasks(this.n, this));
					}
					render(s) {
						this.n(),
							super.render(s),
							s.classList.add("kernel-action-view-item"),
							(this.a = document.createElement("a")),
							s.appendChild(this.a),
							this.u();
					}
					u() {
						this.a &&
							(this.a.classList.add("kernel-label"),
							(this.a.innerText = this._action.label));
					}
					n() {
						const s = this.b.textModel;
						if (!s) {
							this.r();
							return;
						}
						c.$b4b.updateKernelStatusAction(s, this._action, this.c, this.g),
							this.G();
					}
					r() {
						(this._action.enabled = !1),
							(this._action.label = ""),
							(this._action.class = "");
					}
				};
				(e.$c4b = f), (e.$c4b = f = Ne([j(3, g.$f6), j(4, g.$g6)], f));
			},
		),
		