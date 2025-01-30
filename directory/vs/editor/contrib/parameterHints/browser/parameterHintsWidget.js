import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/types.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/languages/language.js';
import '../../../browser/widget/markdownRenderer/browser/markdownRenderer.js';
import './provideSignatureHelp.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/stopwatch.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../css!vs/editor/contrib/parameterHints/browser/parameterHints.js';
define(
			de[2837],
			he([
				1, 0, 7, 127, 203, 14, 6, 3, 37, 28, 56, 38, 61, 251, 1182, 4, 8, 41,
				51, 79, 26, 162, 32, 2315,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*aria*/,
				w /*scrollableElement*/,
				E /*codicons*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*strings*/,
				r /*types*/,
				u /*editorBrowser*/,
				a /*editorOptions*/,
				h /*language*/,
				c /*markdownRenderer*/,
				n /*provideSignatureHelp*/,
				g /*nls*/,
				p /*contextkey*/,
				o /*opener*/,
				f /*colorRegistry*/,
				b /*iconRegistry*/,
				s /*themables*/,
				l /*stopwatch*/,
				y /*telemetry*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8jc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(g = mt(g));
				const v = t.$,
					S = (0, b.$$O)(
						"parameter-hints-next",
						E.$ak.chevronDown,
						g.localize(1339, null),
					),
					I = (0, b.$$O)(
						"parameter-hints-previous",
						E.$ak.chevronUp,
						g.localize(1340, null),
					);
				let T = class extends d.$1c {
					static {
						$ = this;
					}
					static {
						this.a = "editor.widget.parameterHintsWidget";
					}
					constructor(k, L, D, M, N, A) {
						super(),
							(this.n = k),
							(this.q = L),
							(this.r = A),
							(this.c = this.D(new d.$Zc())),
							(this.j = !1),
							(this.m = null),
							(this.allowEditorOverflow = !0),
							(this.b = this.D(new c.$Qzb({ editor: k }, N, M))),
							(this.f = n.$5jc.Visible.bindTo(D)),
							(this.g = n.$5jc.MultipleSignatures.bindTo(D));
					}
					s() {
						const k = v(".editor-widget.parameter-hints-widget"),
							L = t.$fhb(k, v(".phwrapper"));
						L.tabIndex = -1;
						const D = t.$fhb(L, v(".controls")),
							M = t.$fhb(D, v(".button" + s.ThemeIcon.asCSSSelector(I))),
							N = t.$fhb(D, v(".overloads")),
							A = t.$fhb(D, v(".button" + s.ThemeIcon.asCSSSelector(S)));
						this.D(
							t.$0fb(M, "click", (F) => {
								t.$ahb.stop(F), this.previous();
							}),
						),
							this.D(
								t.$0fb(A, "click", (F) => {
									t.$ahb.stop(F), this.next();
								}),
							);
						const R = v(".body"),
							O = new w.$8hb(R, { alwaysConsumeMouseWheel: !0 });
						this.D(O), L.appendChild(O.getDomNode());
						const B = t.$fhb(R, v(".signature")),
							U = t.$fhb(R, v(".docs"));
						(k.style.userSelect = "text"),
							(this.h = {
								element: k,
								signature: B,
								overloads: N,
								docs: U,
								scrollbar: O,
							}),
							this.n.addContentWidget(this),
							this.hide(),
							this.D(
								this.n.onDidChangeCursorSelection((F) => {
									this.j && this.n.layoutContentWidget(this);
								}),
							);
						const z = () => {
							if (!this.h) return;
							const F = this.n.getOption(a.EditorOption.fontInfo),
								x = this.h.element;
							(x.style.fontSize = `${F.fontSize}px`),
								(x.style.lineHeight = `${F.lineHeight / F.fontSize}`),
								x.style.setProperty(
									"--vscode-parameterHintsWidget-editorFontFamily",
									F.fontFamily,
								),
								x.style.setProperty(
									"--vscode-parameterHintsWidget-editorFontFamilyDefault",
									a.EDITOR_FONT_DEFAULTS.fontFamily,
								);
						};
						z(),
							this.D(
								C.Event.chain(
									this.n.onDidChangeConfiguration.bind(this.n),
									(F) => F.filter((x) => x.hasChanged(a.EditorOption.fontInfo)),
								)(z),
							),
							this.D(this.n.onDidLayoutChange((F) => this.z())),
							this.z();
					}
					show() {
						this.j ||
							(this.h || this.s(),
							this.f.set(!0),
							(this.j = !0),
							setTimeout(() => {
								this.h?.element.classList.add("visible");
							}, 100),
							this.n.layoutContentWidget(this));
					}
					hide() {
						this.c.clear(),
							this.j &&
								(this.f.reset(),
								(this.j = !1),
								(this.m = null),
								this.h?.element.classList.remove("visible"),
								this.n.layoutContentWidget(this));
					}
					getPosition() {
						return this.j
							? {
									position: this.n.getPosition(),
									preference: [
										u.ContentWidgetPositionPreference.ABOVE,
										u.ContentWidgetPositionPreference.BELOW,
									],
								}
							: null;
					}
					render(k) {
						if ((this.c.clear(), !this.h)) return;
						const L = k.signatures.length > 1;
						this.h.element.classList.toggle("multiple", L),
							this.g.set(L),
							(this.h.signature.innerText = ""),
							(this.h.docs.innerText = "");
						const D = k.signatures[k.activeSignature];
						if (!D) return;
						const M = t.$fhb(this.h.signature, v(".code")),
							N = D.parameters.length > 0,
							A = D.activeParameter ?? k.activeParameter;
						if (N) this.w(M, D, A);
						else {
							const B = t.$fhb(M, v("span"));
							B.textContent = D.label;
						}
						const R = D.parameters[A];
						if (R?.documentation) {
							const B = v("span.documentation");
							if (typeof R.documentation == "string")
								B.textContent = R.documentation;
							else {
								const U = this.t(R.documentation);
								B.appendChild(U.element);
							}
							t.$fhb(this.h.docs, v("p", {}, B));
						}
						if (D.documentation !== void 0)
							if (typeof D.documentation == "string")
								t.$fhb(this.h.docs, v("p", {}, D.documentation));
							else {
								const B = this.t(D.documentation);
								t.$fhb(this.h.docs, B.element);
							}
						const O = this.u(D, R);
						if (
							(this.h.signature.classList.toggle("has-docs", O),
							this.h.docs.classList.toggle("empty", !O),
							(this.h.overloads.textContent =
								String(k.activeSignature + 1).padStart(
									k.signatures.length.toString().length,
									"0",
								) +
								"/" +
								k.signatures.length),
							R)
						) {
							let B = "";
							const U = D.parameters[A];
							Array.isArray(U.label)
								? (B = D.label.substring(U.label[0], U.label[1]))
								: (B = U.label),
								U.documentation &&
									(B +=
										typeof U.documentation == "string"
											? `, ${U.documentation}`
											: `, ${U.documentation.value}`),
								D.documentation &&
									(B +=
										typeof D.documentation == "string"
											? `, ${D.documentation}`
											: `, ${D.documentation.value}`),
								this.m !== B &&
									(i.$oib(g.localize(1341, null, B)), (this.m = B));
						}
						this.n.layoutContentWidget(this), this.h.scrollbar.scanDomNode();
					}
					t(k) {
						const L = new l.$le(),
							D = this.c.add(
								this.b.render(k, {
									asyncRenderCallback: () => {
										this.h?.scrollbar.scanDomNode();
									},
								}),
							);
						D.element.classList.add("markdown-docs");
						const M = L.elapsed();
						return (
							M > 300 &&
								this.r.publicLog2("parameterHints.parseMarkdown", {
									renderDuration: M,
								}),
							D
						);
					}
					u(k, L) {
						return !!(
							(L &&
								typeof L.documentation == "string" &&
								(0, r.$wg)(L.documentation).length > 0) ||
							(L &&
								typeof L.documentation == "object" &&
								(0, r.$wg)(L.documentation).value.length > 0) ||
							(k.documentation &&
								typeof k.documentation == "string" &&
								(0, r.$wg)(k.documentation).length > 0) ||
							(k.documentation &&
								typeof k.documentation == "object" &&
								(0, r.$wg)(k.documentation.value).length > 0)
						);
					}
					w(k, L, D) {
						const [M, N] = this.y(L, D),
							A = document.createElement("span");
						A.textContent = L.label.substring(0, M);
						const R = document.createElement("span");
						(R.textContent = L.label.substring(M, N)),
							(R.className = "parameter active");
						const O = document.createElement("span");
						(O.textContent = L.label.substring(N)), t.$fhb(k, A, R, O);
					}
					y(k, L) {
						const D = k.parameters[L];
						if (D) {
							if (Array.isArray(D.label)) return D.label;
							if (D.label.length) {
								const M = new RegExp(
									`(\\W|^)${(0, m.$of)(D.label)}(?=\\W|$)`,
									"g",
								);
								M.test(k.label);
								const N = M.lastIndex - D.label.length;
								return N >= 0 ? [N, M.lastIndex] : [0, 0];
							} else return [0, 0];
						} else return [0, 0];
					}
					next() {
						this.n.focus(), this.q.next();
					}
					previous() {
						this.n.focus(), this.q.previous();
					}
					getDomNode() {
						return this.h || this.s(), this.h.element;
					}
					getId() {
						return $.a;
					}
					z() {
						if (!this.h) return;
						const L = `${Math.max(this.n.getLayoutInfo().height / 4, 250)}px`;
						this.h.element.style.maxHeight = L;
						const D = this.h.element.getElementsByClassName("phwrapper");
						D.length && (D[0].style.maxHeight = L);
					}
				};
				(e.$8jc = T),
					(e.$8jc =
						T =
						$ =
							Ne([j(2, p.$6j), j(3, o.$7rb), j(4, h.$nM), j(5, y.$km)], T)),
					(0, f.$wP)(
						"editorHoverWidget.highlightForeground",
						f.$QS,
						g.localize(1342, null),
					);
			},
		),
		