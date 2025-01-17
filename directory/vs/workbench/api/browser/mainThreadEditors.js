import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/objects.js';
import '../../../base/common/uri.js';
import '../../../editor/browser/services/codeEditorService.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/editor/common/editor.js';
import '../common/extHost.protocol.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorService.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../../platform/environment/common/environment.js';
import '../../services/workingCopy/common/workingCopyService.js';
import '../../../editor/browser/editorBrowser.js';
import '../../../platform/configuration/common/configuration.js';
define(
			de[1913],
			he([1, 0, 29, 3, 82, 9, 65, 31, 116, 88, 446, 18, 66, 113, 227, 56, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hnc = void 0);
				let f = class {
					static {
						o = this;
					}
					static {
						this.a = 0;
					}
					constructor(s, l, y, $, v, S) {
						(this.i = s),
							(this.j = y),
							(this.k = $),
							(this.l = v),
							(this.m = S),
							(this.e = new i.$Zc()),
							(this.b = String(++o.a)),
							(this.c = l.getProxy(r.$mbb.ExtHostEditors)),
							(this.f = Object.create(null)),
							(this.g = null),
							this.e.add(this.k.onDidVisibleEditorsChange(() => this.n())),
							this.e.add(this.l.onDidRemoveGroup(() => this.n())),
							this.e.add(this.l.onDidMoveGroup(() => this.n())),
							(this.h = Object.create(null));
					}
					dispose() {
						Object.keys(this.f).forEach((s) => {
							(0, i.$Vc)(this.f[s]);
						}),
							(this.f = Object.create(null)),
							this.e.dispose();
						for (const s in this.h) this.j.removeDecorationType(s);
						this.h = Object.create(null);
					}
					handleTextEditorAdded(s) {
						const l = s.getId(),
							y = [];
						y.push(
							s.onPropertiesChanged(($) => {
								this.c.$acceptEditorPropertiesChanged(l, $);
							}),
						),
							(this.f[l] = y);
					}
					handleTextEditorRemoved(s) {
						(0, i.$Vc)(this.f[s]), delete this.f[s];
					}
					n() {
						const s = this.o();
						(0, w.$zo)(this.g, s) ||
							((this.g = s), this.c.$acceptEditorPositionData(this.g));
					}
					o() {
						const s = Object.create(null);
						for (const l of this.k.visibleEditorPanes) {
							const y = this.i.findTextEditorIdFor(l);
							y && (s[y] = (0, u.$b8)(this.l, l.group));
						}
						return s;
					}
					async $tryShowTextDocument(s, l) {
						const y = E.URI.revive(s),
							$ = {
								preserveFocus: l.preserveFocus,
								pinned: l.pinned,
								selection: l.selection,
								activation: l.preserveFocus
									? m.EditorActivation.RESTORE
									: void 0,
								override: m.EditorResolution.EXCLUSIVE_ONLY,
							},
							v = { resource: y, options: $ },
							S = await this.k.openEditor(
								v,
								(0, u.$a8)(this.l, this.m, l.position),
							);
						if (!S) return;
						const I = S.getControl(),
							T = (0, g.$btb)(I);
						return T ? this.i.getIdOfCodeEditor(T) : void 0;
					}
					async $tryShowEditor(s, l) {
						const y = this.i.getEditor(s);
						if (y) {
							const $ = y.getModel();
							await this.k.openEditor(
								{ resource: $.uri, options: { preserveFocus: !1 } },
								(0, u.$a8)(this.l, this.m, l),
							);
							return;
						}
					}
					async $tryHideEditor(s) {
						const l = this.i.getEditor(s);
						if (l) {
							const y = this.k.visibleEditorPanes;
							for (const $ of y)
								if (l.matches($)) {
									await $.group.closeEditor($.input);
									return;
								}
						}
					}
					$trySetSelections(s, l) {
						const y = this.i.getEditor(s);
						return y
							? (y.setSelections(l), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetDecorations(s, l, y) {
						l = `${this.b}-${l}`;
						const $ = this.i.getEditor(s);
						return $
							? ($.setDecorations(l, y), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetDecorationsFast(s, l, y) {
						l = `${this.b}-${l}`;
						const $ = this.i.getEditor(s);
						return $
							? ($.setDecorationsFast(l, y), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryRevealRange(s, l, y) {
						const $ = this.i.getEditor(s);
						return $
							? ($.revealRange(l, y), Promise.resolve())
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$trySetOptions(s, l) {
						const y = this.i.getEditor(s);
						return y
							? (y.setConfiguration(l), Promise.resolve(void 0))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryApplyEdits(s, l, y, $) {
						const v = this.i.getEditor(s);
						return v
							? Promise.resolve(v.applyEdits(l, y, $))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$tryInsertSnippet(s, l, y, $, v) {
						const S = this.i.getEditor(s);
						return S
							? Promise.resolve(S.insertSnippet(l, y, $, v))
							: Promise.reject((0, t.$$)(`TextEditor(${s})`));
					}
					$registerTextEditorDecorationType(s, l, y) {
						(l = `${this.b}-${l}`),
							(this.h[l] = !0),
							this.j.registerDecorationType(`exthost-api-${s}`, l, y);
					}
					$removeTextEditorDecorationType(s) {
						(s = `${this.b}-${s}`),
							delete this.h[s],
							this.j.removeDecorationType(s);
					}
					$getDiffInformation(s) {
						const l = this.i.getEditor(s);
						if (!l) return Promise.reject(new Error("No such TextEditor"));
						const y = l.getCodeEditor();
						if (!y) return Promise.reject(new Error("No such CodeEditor"));
						const $ = y.getId(),
							v = this.j.listDiffEditors(),
							[S] = v.filter(
								(T) =>
									T.getOriginalEditor().getId() === $ ||
									T.getModifiedEditor().getId() === $,
							);
						if (S) return Promise.resolve(S.getLineChanges() || []);
						const I = y.getContribution("editor.contrib.dirtydiff");
						return I ? Promise.resolve(I.getChanges()) : Promise.resolve([]);
					}
				};
				(e.$hnc = f),
					(e.$hnc =
						f =
						o =
							Ne([j(2, C.$dtb), j(3, a.$IY), j(4, h.$EY), j(5, p.$gj)], f)),
					d.$fk.registerCommand(
						"_workbench.revertAllDirty",
						async function (b) {
							if (!b.get(c.$Ti).extensionTestsLocationURI)
								throw new Error(
									"Command is only available when running extension tests.",
								);
							const l = b.get(n.$gY);
							for (const y of l.dirtyWorkingCopies)
								await y.revert({ soft: !0 });
						},
					);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	