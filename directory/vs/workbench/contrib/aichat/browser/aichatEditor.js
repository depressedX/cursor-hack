import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor/editorInput.js';
import '../../../common/theme.js';
import './aichat.js';
import './chatData.js';
import './chatDataService.js';
define(
			de[1927],
			he([
				1, 0, 7, 14, 58, 3, 23, 9, 5, 21, 32, 35, 217, 223, 123, 418, 140, 337,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*codicons*/,
 w /*constants*/,
 E /*lifecycle*/,
 C /*network*/,
 d /*uri*/,
 m /*instantiation*/,
 r /*storage*/,
 u /*telemetry*/,
 a /*themeService*/,
 h /*editorPane*/,
 c /*editorInput*/,
 n /*theme*/,
 g /*aichat*/,
 p /*chatData*/,
 o /*chatDataService*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pgc = e.$ogc = e.$ngc = e.$mgc = void 0);
				const b = "workbench.editor.aichat";
				class s {
					canSerialize(S) {
						return S instanceof l;
					}
					serialize(S) {
						if (S instanceof l) return JSON.stringify({ state: "chat" });
					}
					deserialize(S, I) {
						try {
							return S.createInstance(l);
						} catch {
							return;
						}
					}
				}
				e.$mgc = s;
				class l extends c.$LO {
					static {
						this.ID = "workbench.editor.aichat.input";
					}
					get typeId() {
						return l.ID;
					}
					get resource() {
						return d.URI.from({
							scheme: C.Schemas.aiChat,
							path: "cursor/aichat",
						});
					}
					constructor() {
						super();
					}
					matches(S) {
						return super.matches(S) ? !0 : S instanceof l;
					}
					getName() {
						return "AI Chat";
					}
					getIcon() {
						return i.$ak.comment;
					}
				}
				e.$ngc = l;
				let y = class extends h.$JEb {
					static {
						f = this;
					}
					static {
						this.ID = b;
					}
					constructor(S, I, T, P, k, L, D) {
						super(f.ID, S, I, T, P),
							(this.g = k),
							(this.j = L),
							(this.m = D),
							(this.f = new p.$Sgc(() => this.m.chatData));
					}
					Y(S) {
						S.classList.add("aichat-pane"),
							(this.c = (0, t.$fhb)(S, (0, t.$)(`.${w.$bX}`))),
							(this.c.tabIndex = 0),
							(this.c.style.outline = "none"),
							this.c.setAttribute("role", "document"),
							(this.c.style.width = "100%"),
							(this.c.style.height = "100%"),
							(this.c.style.backgroundColor =
								this.n.getColorTheme().getColor(n.$wGb)?.toString() ?? ""),
							this.D(
								this.n.onDidColorThemeChange((I) => {
									this.c &&
										(this.c.style.backgroundColor =
											this.n.getColorTheme().getColor(n.$wGb)?.toString() ??
											"");
								}),
							),
							this.s();
					}
					focus(S) {
						super.focus(),
							this.Q.publicLog2("ai/chat/focus/editor"),
							this.j.focus(S);
					}
					focusFollowup() {
						super.focus(),
							this.Q.publicLog2("ai/chat/focusFollowup/editor"),
							this.f.focusFollowup();
					}
					focusBubble(S) {
						super.focus(), this.f.focusBubble(S);
					}
					isFocused(S) {
						return this.f.isFocused(S);
					}
					s() {
						this.c !== void 0 &&
							(this.b || (this.b = this.j.render(this.c, this.f, !0)));
					}
					async setInput(S, I, T, P) {
						await super.setInput(S, I, T, P), this.s();
					}
					layout(S, I) {
						this.a = S;
					}
					dispose() {
						this.b?.dispose(), super.dispose();
					}
					I() {
						this.j.saveState(), super.I();
					}
				};
				(e.$ogc = y),
					(e.$ogc =
						y =
						f =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, m.$Li),
									j(5, g.$qgc),
									j(6, o.$kgc),
								],
								y,
							));
				class $ extends E.$1c {
					static {
						this.ID = "editor.contrib.aichat";
					}
					constructor(S) {
						super(), (this.a = S);
					}
				}
				e.$pgc = $;
			},
		),
		