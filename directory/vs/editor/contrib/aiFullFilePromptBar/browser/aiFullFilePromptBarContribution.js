import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../browser/editorExtensions.js';
import '../../../../base/common/lazy.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/event.js';
import './aiFullFilePromptBar.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../workbench/services/editor/common/editorService.js';
import '../../peekView/browser/peekView.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[1983],
			he([1, 0, 46, 149, 3, 56, 5, 45, 7, 159, 6, 4220, 25, 18, 255, 8]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rlc = e.$qlc = void 0),
					(m = mt(m));
				let o = class extends w.$1c {
					static {
						p = this;
					}
					static {
						this.ID = "aiFullFilePromptBar";
					}
					static get(s) {
						return s.getContribution(p.ID);
					}
					constructor(s, l, y, $, v) {
						super(),
							(this.c = l),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.a = s),
							(this.reactiveStorageRoot = this.D(this.f.createScoped(this))),
							(this.b = new i.$Y(() => {
								const D = this.D(l.createInstance(f, this.a));
								return this.D(D.onClick((M) => {})), D;
							}));
						const S = n.PeekContext.inPeekEditor.getValue(this.h),
							I = this.a.getDomNode(),
							T = Array.from(I?.classList.values() ?? []).find((D) =>
								D.includes("monaco-diff-editor"),
							),
							k = I?.getAttribute("data-uri")?.startsWith("output:");
						!S &&
							!T &&
							!k &&
							(this.reactiveStorageRoot.onChangeEffect({
								deps: [
									() =>
										this.f.applicationUserPersistentStorage.hideChatEditTooltip,
									() => this.f.nonPersistentStorage.inlineDiffs,
								],
								onChange: () => {
									this.j();
								},
							}),
							this.D(
								this.a.onDidChangeModelContent(() => {
									this.j();
								}),
							),
							this.b.value.update(this.g.activeTextEditorControl === this.a),
							this.D(
								this.g.onDidActiveEditorChange(() => {
									this.j();
								}),
							));
					}
					j() {
						const l = this.f.nonPersistentStorage.inlineDiffs.length > 0,
							y = this.g.activeTextEditorControl === this.a;
						l
							? (this.b.value.show(), this.b.value.update(y))
							: this.b.value.hide();
					}
				};
				(e.$qlc = o),
					(e.$qlc =
						o =
						p =
							Ne([j(1, C.$Li), j(2, d.$0zb), j(3, c.$IY), j(4, g.$6j)], o));
				let f = class extends w.$1c {
					constructor(s, l, y, $) {
						super(),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.allowEditorOverflow = !0),
							(this.c = this.D(new u.$re())),
							(this.onClick = this.c.event),
							(this.isWordWrap = !1),
							(this.isActiveEditor = !1),
							(this.a = m.$("div.aiFullFilePromptBarWidget")),
							(this.a.style.width = "100%"),
							(this.a.style.pointerEvents = "none"),
							(this.a.style.display = "flex"),
							(this.a.style.justifyContent = "center"),
							(this.b = m.$("div")),
							(this.b.style.position = "relative"),
							(this.b.style.zIndex = "2530"),
							this.a.appendChild(this.b),
							this.D(r.$Qhb.ignoreTarget(this.a)),
							this.f.addOverlayWidget(this),
							(this.disposeRender = this.D(
								(0, a.$plc)(this.b, this, this.j, this.f),
							)),
							this.D(
								this.f.onDidChangeModelContent(() => {
									this.f.layoutOverlayWidget(this);
								}),
							),
							this.D(
								this.f.onDidChangeModel(() => {
									this.rerender();
								}),
							),
							this.D(
								this.f.onDidLayoutChange(() => {
									this.rerender();
								}),
							);
					}
					rerender() {
						this.disposeRender?.dispose(),
							(this.disposeRender = this.D(
								(0, a.$plc)(this.b, this, this.j, this.f),
							));
					}
					getId() {
						return "aiFullFilePromptBarWidget";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						return {
							preference: E.OverlayWidgetPositionPreference.BOTTOM_CENTER,
						};
					}
					getURI() {
						const s = this.f.getModel()?.uri.path;
						if (s) return this.h.resolveRelativePath(s);
					}
					show() {
						this.a.style.display = "block";
					}
					hide() {
						this.a.style.display = "none";
					}
					update(s) {
						(this.isActiveEditor = s), this.rerender();
					}
				};
				(e.$rlc = f),
					(e.$rlc = f = Ne([j(1, d.$0zb), j(2, h.$Vi), j(3, C.$Li)], f)),
					(0, t.$qtb)(o.ID, o, t.EditorContributionInstantiation.Eventually);
			},
		),
		