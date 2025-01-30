import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/touch.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/editorBrowser.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './renderInlineDiffPartialWidget.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../browser/services/inlineDiffService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../workbench/services/ai/browser/aiMiscServices.js';
import '../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/inlineDiffWidget.js';
define(
			de[3981],
			he([1, 0, 7, 159, 3, 56, 39, 31, 45, 2956, 35, 383, 10, 137, 906]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*touch*/,
 w /*lifecycle*/,
 E /*editorBrowser*/,
 C /*keybinding*/,
 d /*commands*/,
 m /*reactiveStorageService*/,
 r /*renderInlineDiffPartialWidget*/,
 u /*themeService*/,
 a /*inlineDiffService*/,
 h /*configuration*/,
 c /*aiMiscServices*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vdc = void 0),
					(t = mt(t));
				let n = class extends w.$1c {
					constructor(p, o, f, b, s, l, y, $, v, S, I, T) {
						super(),
							(this.id = p),
							(this.diffId = o),
							(this.isHidden = b),
							(this.c = s),
							(this.keybindingService = l),
							(this.commandService = y),
							(this.analyticsService = $),
							(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.m = null),
							(this.q = (k) => {
								const L = k.width < 480;
								this.b(L), this.c.layoutContentWidget(this);
							}),
							(this.id = p),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.a = t.$("div.acceptRejectPartialEditWidget")),
							(this.a.style.display = "none"),
							([this.line, this.setLine] =
								this.reactiveStorageRoot.createSignal(f)),
							([this.isEditorNarrow, this.b] =
								this.reactiveStorageRoot.createSignal(!1)),
							this.n(f),
							this.D((0, r.$udc)(this.a, this, this.g, this.j)),
							this.D(i.$Qhb.ignoreTarget(this.a)),
							this.c.addContentWidget(this),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [this.line],
								onChange: ({ deps: k }) => {
									this.n(k[0]), this.c.layoutContentWidget(this);
								},
							});
						const P = (k) => {
							if (!k.position) return;
							const L = this.h.getHandlerByDiffId(this.diffId);
							if (!L || (0, a.$47b)(L)) return;
							const D = L.findClosestChange(k.position);
							if (D) {
								const { addedRange: M } = D;
								this.line() ===
								L.inlineDiff.currentRange.startLineNumber +
									M.startLineNumber -
									1
									? (this.a.style.display = "block")
									: (this.a.style.display = "none");
							}
						};
						P({ position: this.c.getPosition(), source: "cursor" }),
							this.D(
								this.c.onMouseMove((k) => {
									P({ position: k.target.position, source: "mouse" });
								}),
							),
							this.D(
								this.c.onDidChangeCursorPosition((k) =>
									P({ position: k.position, source: "cursor" }),
								),
							),
							this.D(
								this.c.onDidChangeCursorSelection((k) =>
									P({
										position: k.selection.getStartPosition(),
										source: "cursor",
									}),
								),
							),
							this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() => this.f.nonPersistentStorage.inlineDiffs,
									() => this.f.nonPersistentStorage.promptBars,
								],
								onChange: () => {
									P({ position: this.c.getPosition(), source: "cursor" });
								},
							}),
							this.D(this.c.onDidLayoutChange(this.q)),
							this.q(this.c.getLayoutInfo());
					}
					n(p) {
						this.m = {
							position: { lineNumber: p, column: 1 },
							preference: [
								E.ContentWidgetPositionPreference.EXACT,
								E.ContentWidgetPositionPreference.BELOW,
							],
						};
					}
					dispose() {
						super.dispose(), this.c.removeContentWidget(this);
					}
					getId() {
						return this.id;
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return this.m;
					}
				};
				(e.$vdc = n),
					(e.$vdc = n =
						Ne(
							[
								j(5, C.$uZ),
								j(6, d.$ek),
								j(7, c.$ifc),
								j(8, m.$0zb),
								j(9, u.$iP),
								j(10, a.$27b),
								j(11, h.$gj),
							],
							n,
						));
			},
		),
		