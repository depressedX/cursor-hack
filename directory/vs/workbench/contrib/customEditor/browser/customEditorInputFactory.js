import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './customEditorInput.js';
import '../common/customEditor.js';
import '../../notebook/common/notebookEditorInput.js';
import '../../webview/browser/webview.js';
import '../../webviewPanel/browser/webviewEditorInputSerializer.js';
import '../../webviewPanel/browser/webviewWorkbenchService.js';
import '../../../services/workingCopy/common/workingCopyBackup.js';
import '../../../services/workingCopy/common/workingCopyEditorService.js';
define(
			de[3877],
			he([1, 0, 3, 23, 19, 9, 5, 849, 625, 360, 355, 1831, 623, 335, 403]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yoc = e.$Xoc = void 0);
				let g = class extends a.$Toc {
					static {
						this.ID = d.$tnc.typeId;
					}
					constructor(b, s, l) {
						super(b), (this.d = s), (this.e = l);
					}
					serialize(b) {
						const s = b.isDirty(),
							l = {
								...this.c(b),
								editorResource: b.resource.toJSON(),
								dirty: s,
								backupId: s ? b.backupId : void 0,
							};
						try {
							return JSON.stringify(l);
						} catch {
							return;
						}
					}
					b(b) {
						return {
							...super.b(b),
							editorResource: E.URI.from(b.editorResource),
							dirty: b.dirty,
						};
					}
					deserialize(b, s) {
						const l = this.b(JSON.parse(s)),
							y = p(this.e, l),
							$ = this.d.createInstance(
								d.$tnc,
								{ resource: l.editorResource, viewType: l.viewType },
								y,
								{ startsDirty: l.dirty, backupId: l.backupId },
							);
						return typeof l.group == "number" && $.updateGroup(l.group), $;
					}
				};
				(e.$Xoc = g),
					(e.$Xoc = g = Ne([j(0, h.$qnc), j(1, C.$Li), j(2, u.$3Ib)], g));
				function p(f, b) {
					const s = f.createWebviewOverlay({
						providedViewType: b.viewType,
						origin: b.origin,
						title: void 0,
						options: {
							purpose: u.WebviewContentPurpose.CustomEditor,
							enableFindWidget: b.webviewOptions.enableFindWidget,
							retainContextWhenHidden: b.webviewOptions.retainContextWhenHidden,
						},
						contentOptions: b.contentOptions,
						extension: b.extension,
					});
					return (s.state = b.state), s;
				}
				let o = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.complexCustomWorkingCopyEditorHandler";
					}
					constructor(b, s, l, y, $) {
						super(),
							(this.a = b),
							(this.b = l),
							(this.c = y),
							this.D(s.registerHandler(this));
					}
					handles(b) {
						return b.resource.scheme === i.Schemas.vscodeCustomEditor;
					}
					isOpen(b, s) {
						if (!this.handles(b)) return !1;
						if (
							b.resource.authority === "jupyter-notebook-ipynb" &&
							s instanceof r.$TIb
						)
							try {
								const l = JSON.parse(b.resource.query),
									y = E.URI.from(l);
								return (0, w.$gh)(y, s.resource);
							} catch {
								return !1;
							}
						if (
							!(s instanceof d.$tnc) ||
							b.resource.authority !==
								s.viewType.replace(/[^a-z0-9\-_]/gi, "-").toLowerCase()
						)
							return !1;
						try {
							const l = JSON.parse(b.resource.query),
								y = E.URI.from(l);
							return (0, w.$gh)(y, s.resource);
						} catch {
							return !1;
						}
					}
					async createEditor(b) {
						const s = await this.b.resolve(b);
						if (!s?.meta)
							throw new Error(
								`No backup found for custom editor: ${b.resource}`,
							);
						const l = s.meta,
							y = (0, a.$Uoc)(l.extension?.id, l.extension?.location),
							$ = p(this.c, {
								viewType: l.viewType,
								origin: l.webview.origin,
								webviewOptions: (0, a.$Voc)(l.webview.options),
								contentOptions: (0, a.$Woc)(l.webview.options),
								state: l.webview.state,
								extension: y,
							}),
							v = this.a.createInstance(
								d.$tnc,
								{
									resource: E.URI.revive(l.editorResource),
									viewType: l.viewType,
								},
								$,
								{ backupId: l.backupId },
							);
						return v.updateGroup(0), v;
					}
				};
				(e.$Yoc = o),
					(e.$Yoc = o =
						Ne(
							[
								j(0, C.$Li),
								j(1, n.$bZ),
								j(2, c.$WO),
								j(3, u.$3Ib),
								j(4, m.$jnc),
							],
							o,
						));
			},
		),
		