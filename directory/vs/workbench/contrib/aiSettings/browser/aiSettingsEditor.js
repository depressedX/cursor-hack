import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor/editorInput.js';
import '../../../common/theme.js';
import './entrypoint.js';
import '../../aichat/browser/aichat.js';
define(
			de[1383],
			he([
				1, 0, 7, 14, 58, 23, 9, 5, 45, 21, 32, 79, 35, 217, 223, 123, 4352, 418,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*codicons*/,
 w /*constants*/,
 E /*network*/,
 C /*uri*/,
 d /*instantiation*/,
 m /*reactiveStorageService*/,
 r /*storage*/,
 u /*telemetry*/,
 a /*iconRegistry*/,
 h /*themeService*/,
 c /*editorPane*/,
 n /*editorInput*/,
 g /*theme*/,
 p /*entrypoint*/,
 o /*aichat*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SDc = e.$RDc = e.$QDc = void 0);
				const b = "workbench.editor.aisettings",
					s = (0, a.$$O)(
						"settings-editor-label-icon",
						i.$ak.settings,
						"Icon of the settings editor label.",
					);
				class l extends n.$LO {
					static {
						this.ID = "workbench.editor.aisettings.input";
					}
					get typeId() {
						return l.ID;
					}
					get resource() {
						return C.URI.from({
							scheme: E.Schemas.aiSettings,
							path: "cursor/aisettings",
						});
					}
					constructor(S, I) {
						super(), (this.openTab = S), (this.idToScrollTo = I);
					}
					matches(S) {
						return super.matches(S) ? !0 : S instanceof l;
					}
					getName() {
						return "Cursor Settings";
					}
					getIcon() {
						return s;
					}
					toJSON() {
						return { openTab: this.openTab, idToScrollTo: this.idToScrollTo };
					}
					static fromJSON(S) {
						return new l(S.openTab, S.idToScrollTo);
					}
				}
				e.$QDc = l;
				let y = class extends c.$JEb {
					static {
						f = this;
					}
					static {
						this.ID = b;
					}
					constructor(S, I, T, P, k, L, D) {
						super(f.ID, S, I, T, P), (this.c = k), (this.f = L), (this.g = D);
					}
					Y(S) {
						S.classList.add("aichat-pane"),
							(this.b = (0, t.$fhb)(S, (0, t.$)(`.${w.$bX}`))),
							(this.b.tabIndex = 0),
							(this.b.style.outline = "none"),
							this.b.setAttribute("role", "document"),
							(this.b.style.width = "100%"),
							(this.b.style.height = "100%"),
							(this.b.style.backgroundColor =
								this.n.getColorTheme().getColor(g.$cFb)?.toString() ?? ""),
							this.D(
								this.n.onDidColorThemeChange((I) => {
									this.b &&
										(this.b.style.backgroundColor =
											this.n.getColorTheme().getColor(g.$cFb)?.toString() ??
											"");
								}),
							);
					}
					m(S) {
						this.b !== void 0 &&
							(this.a && this.a.dispose(),
							(this.a = (0, p.$PDc)(this.b, this.c, void 0, {
								defaultPane: S.openTab,
								idToScrollTo: S.idToScrollTo,
								onTabChange: (I) => {
									(S.openTab = I), (S.idToScrollTo = void 0);
								},
							})));
					}
					layout(S, I) {}
					async setInput(S, I, T, P) {
						await super.setInput(S, I, T, P), this.s(S), this.m(S);
					}
					clearInput() {
						this.a?.dispose(), (this.a = void 0);
					}
					Z(S) {
						const I = this.input;
						this.s(I), S && I && this.m(I);
					}
					s(S) {
						S &&
							this.g.nonPersistentStorage.cachedSettingsOpenData &&
							((S.openTab =
								this.g.nonPersistentStorage.cachedSettingsOpenData.openTab),
							(S.idToScrollTo =
								this.g.nonPersistentStorage.cachedSettingsOpenData.idToScrollTo));
					}
					focus() {
						super.focus(), this.b?.focus();
					}
					dispose() {
						this.a?.dispose(), super.dispose();
					}
				};
				(e.$RDc = y),
					(e.$RDc =
						y =
						f =
							Ne(
								[
									j(1, u.$km),
									j(2, h.$iP),
									j(3, r.$lq),
									j(4, d.$Li),
									j(5, o.$qgc),
									j(6, m.$0zb),
								],
								y,
							));
				let $ = class {
					constructor(S) {
						this.a = S;
					}
					canSerialize(S) {
						return S instanceof l;
					}
					serialize(S) {
						return JSON.stringify(S.toJSON());
					}
					deserialize(S, I) {
						const T = JSON.parse(I);
						return l.fromJSON(T);
					}
				};
				(e.$SDc = $), (e.$SDc = $ = Ne([j(0, d.$Li)], $));
			},
		),
		