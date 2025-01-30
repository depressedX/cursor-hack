import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/scrollable.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './walkThroughInput.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../nls.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/types.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/keybindingLabels.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/objects.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/browser/dom.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/extensions/common/extensions.js';
import '../common/walkThroughUtils.js';
import '../../../../css!vs/workbench/contrib/welcomeWalkthrough/browser/media/walkThroughPart.js';
define(
			de[1811],
			he([
				1, 0, 203, 159, 195, 37, 9, 3, 217, 32, 1277, 41, 125, 206, 5, 39, 4,
				21, 8, 10, 28, 31, 38, 35, 592, 12, 82, 40, 7, 66, 53, 3216, 2533,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*scrollableElement*/,
				i /*touch*/,
				w /*scrollable*/,
				E /*strings*/,
				C /*uri*/,
				d /*lifecycle*/,
				m /*editorPane*/,
				r /*telemetry*/,
				u /*walkThroughInput*/,
				a /*opener*/,
				h /*textResourceConfiguration*/,
				c /*codeEditorWidget*/,
				n /*instantiation*/,
				g /*keybinding*/,
				p /*nls*/,
				o /*storage*/,
				f /*contextkey*/,
				b /*configuration*/,
				s /*types*/,
				l /*commands*/,
				y /*editorOptions*/,
				$ /*themeService*/,
				v /*keybindingLabels*/,
				S /*platform*/,
				I /*objects*/,
				T /*notification*/,
				P /*dom*/,
				k /*editorGroupsService*/,
				L /*extensions*/,
) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rYc = e.$qYc = void 0),
					(E = mt(E)),
					(e.$qYc = new f.$5j("interactivePlaygroundFocus", !1));
				const M = (0, p.localize)(11662, null),
					N = "walkThroughEditorViewState";
				let A = class extends m.$JEb {
					static {
						D = this;
					}
					static {
						this.ID = "workbench.editor.walkThroughPart";
					}
					constructor(O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(D.ID, O, B, U, q),
							(this.s = F),
							(this.u = x),
							(this.$ = H),
							(this.cb = V),
							(this.db = G),
							(this.eb = K),
							(this.fb = J),
							(this.a = new d.$Zc()),
							(this.b = []),
							(this.g = e.$qYc.bindTo(this.cb)),
							(this.r = this.ab(W, z, N));
					}
					Y(O) {
						(this.c = document.createElement("div")),
							this.c.classList.add("welcomePageFocusElement"),
							(this.c.tabIndex = 0),
							(this.c.style.outlineStyle = "none"),
							(this.f = new t.$8hb(this.c, {
								horizontal: w.ScrollbarVisibility.Auto,
								vertical: w.ScrollbarVisibility.Auto,
							})),
							this.a.add(this.f),
							O.appendChild(this.f.getDomNode()),
							this.lb(),
							this.mb(),
							this.a.add(this.f.onScroll((B) => this.hb()));
					}
					hb() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition(),
							U = O.scrollHeight;
						if (U && this.input instanceof u.$oYc) {
							const z = B.scrollTop,
								F = O.height;
							this.input.relativeScrollPosition(z / U, (z + F) / U);
						}
					}
					ib(O) {
						O.preventDefault(), O.stopPropagation();
						const B = this.f.getScrollPosition();
						this.f.setScrollPosition({
							scrollTop: B.scrollTop - O.translationY,
						});
					}
					jb(O, B, U, z) {
						return (
							O.addEventListener(B, U, z),
							(0, d.$Yc)(() => {
								O.removeEventListener(B, U, z);
							})
						);
					}
					lb() {
						this.a.add(
							this.jb(this.c, "mousedown", (O) => {
								this.focus();
							}),
						),
							this.a.add(
								this.jb(this.c, "focus", (O) => {
									this.g.set(!0);
								}),
							),
							this.a.add(
								this.jb(this.c, "blur", (O) => {
									this.g.reset();
								}),
							),
							this.a.add(
								this.jb(this.c, "focusin", (O) => {
									if (
										(0, P.$Ygb)(O.target) &&
										O.target.classList.contains("zone-widget-container")
									) {
										const B = this.f.getScrollPosition();
										(this.c.scrollTop = B.scrollTop),
											(this.c.scrollLeft = B.scrollLeft);
									}
									(0, P.$Ygb)(O.target) && (this.j = O.target);
								}),
							);
					}
					mb() {
						this.c.addEventListener("click", (O) => {
							for (let B = O.target; B; B = B.parentNode)
								if ((0, P.$Zgb)(B) && B.href) {
									const U =
										B.ownerDocument.getElementsByTagName("base")[0] ||
										this.window.location;
									if (U && B.href.indexOf(U.href) >= 0 && B.hash) {
										const z = this.c.querySelector(B.hash),
											F = this.c.firstElementChild;
										if (z && F) {
											const x = z.getBoundingClientRect().top - 20,
												H = F.getBoundingClientRect().top;
											this.f.setScrollPosition({ scrollTop: x - H });
										}
									} else this.nb(C.URI.parse(B.href));
									O.preventDefault();
									break;
								} else if ((0, P.$4gb)(B)) {
									const U = B.getAttribute("data-href");
									U && this.nb(C.URI.parse(U));
									break;
								} else if (B === O.currentTarget) break;
						});
					}
					nb(O) {
						if (
							O.scheme === "command" &&
							O.path === "git.clone" &&
							!l.$fk.getCommand("git.clone")
						) {
							this.eb.info((0, p.localize)(11663, null));
							return;
						}
						this.u.open(this.ob(O), { allowCommands: !0 });
					}
					ob(O) {
						if (O.scheme !== "command" || !(this.input instanceof u.$oYc))
							return O;
						const B = O.query ? JSON.parse(O.query) : {};
						return (
							(B.from = this.input.getTelemetryFrom()),
							O.with({ query: JSON.stringify(B) })
						);
					}
					layout(O) {
						(this.m = O),
							(0, P.size)(this.c, O.width, O.height),
							this.pb(),
							this.b.forEach((U) => {
								U instanceof c.$rwb && U.layout();
							});
						const B = this.input instanceof u.$oYc && this.input;
						B && B.layout && B.layout(O), this.f.scanDomNode();
					}
					pb() {
						const O = this.c.firstElementChild;
						this.m &&
							O &&
							O.classList.toggle("max-height-685px", this.m.height <= 685);
					}
					focus() {
						super.focus();
						let O = this.c.ownerDocument.activeElement;
						for (; O && O !== this.c; ) O = O.parentElement;
						O || (this.j || this.c).focus(), this.g.set(!0);
					}
					arrowUp() {
						const O = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: O.scrollTop - this.qb() });
					}
					arrowDown() {
						const O = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: O.scrollTop + this.qb() });
					}
					qb() {
						let O = this.db.getValue("editor.fontSize");
						return (typeof O != "number" || O < 1) && (O = 12), 3 * O;
					}
					pageUp() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: B.scrollTop - O.height });
					}
					pageDown() {
						const O = this.f.getScrollDimensions(),
							B = this.f.getScrollPosition();
						this.f.setScrollPosition({ scrollTop: B.scrollTop + O.height });
					}
					setInput(O, B, U, z) {
						const F = new d.$Zc();
						return (
							this.b.push(F),
							(this.c.innerText = ""),
							super
								.setInput(O, B, U, z)
								.then(
									async () => (
										O.resource.path.endsWith(".md") &&
											(await this.fb.whenInstalledExtensionsRegistered()),
										O.resolve()
									),
								)
								.then((x) => {
									if (z.isCancellationRequested) return;
									const H = x.main;
									if (!O.resource.path.endsWith(".md")) {
										(0, P.$Dhb)(this.c, H),
											this.pb(),
											this.tb(),
											this.b.push(
												this.$.onDidUpdateKeybindings(() => this.tb()),
											),
											O.onReady?.(this.c.firstElementChild, F),
											this.f.scanDomNode(),
											this.wb(O),
											this.hb();
										return;
									}
									const q = document.createElement("div");
									q.classList.add("walkThroughContent");
									const V = this.sb(H);
									(0, P.$Dhb)(q, V),
										this.c.appendChild(q),
										x.snippets.forEach((G, K) => {
											const J = G.textEditorModel;
											if (!J) return;
											const W = `snippet-${J.uri.fragment}`,
												X = q.querySelector(`#${W.replace(/[\\.]/g, "\\$&")}`),
												Y = this.rb(J.getLanguageId()),
												ie = {
													target:
														this.input instanceof u.$oYc
															? this.input.getTelemetryFrom()
															: void 0,
													snippet: K,
												},
												ne = this.s.createInstance(c.$rwb, X, Y, {
													telemetryData: ie,
												});
											ne.setModel(J), this.b.push(ne);
											const ee = (_) => {
												const te = ne.getOption(y.EditorOption.lineHeight),
													Q = `${Math.max(J.getLineCount() + 1, 4) * te}px`;
												X.style.height !== Q &&
													((X.style.height = Q),
													ne.layout(),
													_ || this.f.scanDomNode());
											};
											ee(!0),
												this.b.push(ne.onDidChangeModelContent(() => ee(!1))),
												this.b.push(
													ne.onDidChangeCursorPosition((_) => {
														const te = this.c.firstElementChild;
														if (te) {
															const Q = X.getBoundingClientRect().top,
																Z = te.getBoundingClientRect().top,
																se = ne.getOption(y.EditorOption.lineHeight),
																re = Q + (_.position.lineNumber - 1) * se - Z,
																le = re + se,
																oe = this.f.getScrollDimensions(),
																pe = this.f.getScrollPosition().scrollTop,
																$e = oe.height;
															pe > re
																? this.f.setScrollPosition({ scrollTop: re })
																: pe < le - $e &&
																	this.f.setScrollPosition({
																		scrollTop: le - $e,
																	});
														}
													}),
												),
												this.b.push(
													this.db.onDidChangeConfiguration((_) => {
														_.affectsConfiguration("editor") &&
															G.textEditorModel &&
															ne.updateOptions(
																this.rb(G.textEditorModel.getLanguageId()),
															);
													}),
												);
										}),
										this.pb(),
										this.ub(),
										this.b.push(
											this.db.onDidChangeConfiguration((G) => {
												G.affectsConfiguration("editor.multiCursorModifier") &&
													this.ub();
											}),
										),
										O.onReady?.(q, F),
										this.f.scanDomNode(),
										this.wb(O),
										this.hb(),
										this.b.push(i.$Qhb.addTarget(q)),
										this.b.push(
											(0, P.$0fb)(q, i.EventType.Change, (G) => this.ib(G)),
										);
								})
						);
					}
					rb(O) {
						const B = (0, I.$vo)(
							this.db.getValue("editor", { overrideIdentifier: O }),
						);
						return {
							...((0, s.$ng)(B) ? B : Object.create(null)),
							scrollBeyondLastLine: !1,
							scrollbar: {
								verticalScrollbarSize: 14,
								horizontal: "auto",
								useShadows: !0,
								verticalHasArrows: !1,
								horizontalHasArrows: !1,
								alwaysConsumeMouseWheel: !1,
							},
							overviewRulerLanes: 3,
							fixedOverflowWidgets: !1,
							lineNumbersMinChars: 1,
							minimap: { enabled: !1 },
						};
					}
					sb(O) {
						return O.replace(/kb\(([a-z.\d\-]+)\)/gi, (B, U) => {
							const z = this.$.lookupKeybinding(U),
								F = z ? z.getLabel() || "" : M;
							return `<span class="shortcut">${E.$nf(F)}</span>`;
						});
					}
					tb() {
						const O = this.c.querySelectorAll(".shortcut[data-command]");
						Array.prototype.forEach.call(O, (U) => {
							const z = U.getAttribute("data-command"),
								F = z && this.$.lookupKeybinding(z),
								x = F ? F.getLabel() || "" : M;
							for (; U.firstChild; ) U.firstChild.remove();
							U.appendChild(document.createTextNode(x));
						});
						const B = this.c.querySelectorAll(".if_shortcut[data-command]");
						Array.prototype.forEach.call(B, (U) => {
							const z = U.getAttribute("data-command"),
								F = z && this.$.lookupKeybinding(z);
							U.style.display = F ? "" : "none";
						});
					}
					ub() {
						const O = v.$2ob.modifierLabels[S.OS],
							B = this.db.getValue("editor.multiCursorModifier"),
							U =
								O[
									B === "ctrlCmd"
										? S.OS === S.OperatingSystem.Macintosh
											? "metaKey"
											: "ctrlKey"
										: "altKey"
								],
							z = this.c.querySelectorAll(".multi-cursor-modifier");
						Array.prototype.forEach.call(z, (F) => {
							for (; F.firstChild; ) F.firstChild.remove();
							F.appendChild(document.createTextNode(U));
						});
					}
					vb(O) {
						const B = this.f.getScrollPosition();
						this.r.saveEditorState(this.group, O, {
							viewState: { scrollTop: B.scrollTop, scrollLeft: B.scrollLeft },
						});
					}
					wb(O) {
						const B = this.r.loadEditorState(this.group, O);
						B && this.f.setScrollPosition(B.viewState);
					}
					clearInput() {
						this.input instanceof u.$oYc && this.vb(this.input),
							(this.b = (0, d.$Vc)(this.b)),
							super.clearInput();
					}
					I() {
						this.input instanceof u.$oYc && this.vb(this.input), super.I();
					}
					dispose() {
						this.g.reset(),
							(this.b = (0, d.$Vc)(this.b)),
							this.a.dispose(),
							super.dispose();
					}
				};
				(e.$rYc = A),
					(e.$rYc =
						A =
						D =
							Ne(
								[
									j(1, r.$km),
									j(2, $.$iP),
									j(3, h.$XO),
									j(4, n.$Li),
									j(5, a.$7rb),
									j(6, g.$uZ),
									j(7, o.$lq),
									j(8, f.$6j),
									j(9, b.$gj),
									j(10, T.$4N),
									j(11, L.$q2),
									j(12, k.$EY),
								],
								A,
							));
			},
		),
		