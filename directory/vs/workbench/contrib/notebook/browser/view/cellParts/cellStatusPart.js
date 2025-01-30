import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/keyboardEvent.js';
import '../../../../../../base/browser/ui/iconLabel/simpleIconLabel.js';
import '../../../../../../base/common/errorMessage.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/iconLabels.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/marshallingIds.js';
import '../../../../../../editor/common/editorCommon.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/notification/common/notification.js';
import '../../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../notebookBrowser.js';
import '../cellPart.js';
import './cellWidgets.js';
import '../../viewModel/codeCellViewModel.js';
import '../../../common/notebookCommon.js';
import '../../../../../../platform/hover/browser/hover.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../base/browser/ui/hover/hoverWidget.js';
define(
			de[4095],
			he([
				1, 0, 7, 114, 758, 163, 6, 274, 27, 3, 221, 98, 31, 5, 40, 32, 35, 108,
				294, 3099, 482, 70, 72, 10, 160,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*keyboardEvent*/,
				w /*simpleIconLabel*/,
				E /*errorMessage*/,
				C /*event*/,
				d /*iconLabels*/,
				m /*keyCodes*/,
				r /*lifecycle*/,
				u /*marshallingIds*/,
				a /*editorCommon*/,
				h /*commands*/,
				c /*instantiation*/,
				n /*notification*/,
				g /*telemetry*/,
				p /*themeService*/,
				o /*notebookBrowser*/,
				f /*cellPart*/,
				b /*cellWidgets*/,
				s /*codeCellViewModel*/,
				l /*notebookCommon*/,
				y /*hover*/,
				$ /*configuration*/,
				v /*hoverWidget*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U3b = void 0),
					(t = mt(t));
				const S = t.$;
				let I = class extends f.$A1b {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.s = k),
							(this.t = L),
							(this.u = M),
							(this.w = N),
							(this.y = O),
							(this.h = []),
							(this.j = []),
							(this.m = 0),
							(this.q = this.D(new C.$re())),
							(this.onDidClick = this.q.event),
							(this.statusBarContainer = t.$fhb(
								D,
								S(".cell-statusbar-container"),
							)),
							(this.statusBarContainer.tabIndex = -1);
						const B = t.$fhb(this.statusBarContainer, S(".cell-status-left")),
							U = t.$fhb(this.statusBarContainer, S(".cell-status-right"));
						(this.a = t.$fhb(
							B,
							S(".cell-contributed-items.cell-contributed-items-left"),
						)),
							(this.b = t.$fhb(
								U,
								S(".cell-contributed-items.cell-contributed-items-right"),
							)),
							(this.g = this.D(new r.$Zc())),
							(this.r = new (class {
								constructor() {
									(this.a = 0),
										(this.showHover = (z) => (
											(z.position = z.position ?? {}),
											(z.position.hoverPosition = v.HoverPosition.ABOVE),
											A.showHover(z)
										)),
										(this.placement = "element");
								}
								get delay() {
									return Date.now() - this.a < 200
										? 0
										: R.getValue("workbench.hover.delay");
								}
								onDidHideHover() {
									this.a = Date.now();
								}
							})()),
							this.D(
								this.y.onDidColorThemeChange(
									() => this.n && this.updateContext(this.n),
								),
							),
							this.D(
								t.$0fb(this.statusBarContainer, t.$$gb.CLICK, (z) => {
									z.target === B ||
									z.target === U ||
									z.target === this.statusBarContainer
										? this.q.fire({
												type: b.ClickTargetType.Container,
												event: z,
											})
										: z.target.classList.contains(
													"cell-status-item-has-command",
												)
											? this.q.fire({
													type: b.ClickTargetType.ContributedCommandItem,
													event: z,
												})
											: this.q.fire({
													type: b.ClickTargetType.ContributedTextItem,
													event: z,
												});
								}),
							);
					}
					didRenderCell(k) {
						if (this.s.hasModel()) {
							const L = {
								ui: !0,
								cell: k,
								notebookEditor: this.s,
								$mid: u.MarshalledId.NotebookCellActionContext,
							};
							this.updateContext(L);
						}
						if (this.u) {
							const L = () => {
								if (
									this.u &&
									(this.u.hasWidgetFocus() ||
										(this.statusBarContainer.ownerDocument.activeElement &&
											this.statusBarContainer.contains(
												this.statusBarContainer.ownerDocument.activeElement,
											)))
								)
									k.focusMode = o.CellFocusMode.Editor;
								else {
									const D = k.focusMode;
									D === o.CellFocusMode.ChatInput
										? (k.focusMode = o.CellFocusMode.ChatInput)
										: D === o.CellFocusMode.Output && this.s.hasWebviewFocus()
											? (k.focusMode = o.CellFocusMode.Output)
											: (k.focusMode = o.CellFocusMode.Container);
								}
							};
							this.f.add(
								this.u.onDidFocusEditorWidget(() => {
									L();
								}),
							),
								this.f.add(
									this.u.onDidBlurEditorWidget(() => {
										this.s.hasEditorFocus() &&
											!(
												this.statusBarContainer.ownerDocument.activeElement &&
												this.statusBarContainer.contains(
													this.statusBarContainer.ownerDocument.activeElement,
												)
											) &&
											L();
									}),
								),
								this.f.add(
									this.onDidClick((D) => {
										if (
											this.c instanceof s.$31b &&
											D.type !== b.ClickTargetType.ContributedCommandItem &&
											this.u
										) {
											const M = this.u.getTargetAtClientPoint(
												D.event.clientX,
												D.event.clientY -
													this.s.notebookOptions.computeEditorStatusbarHeight(
														this.c.internalMetadata,
														this.c.uri,
													),
											);
											M?.position &&
												(this.u.setPosition(M.position), this.u.focus());
										}
									}),
								);
						}
					}
					updateInternalLayoutNow(k) {
						this.t.classList.toggle(
							"cell-statusbar-hidden",
							this.s.notebookOptions.computeEditorStatusbarHeight(
								k.internalMetadata,
								k.uri,
							) === 0,
						);
						const D = k.layoutInfo.editorWidth;
						if (!D) return;
						(this.m = D), (this.statusBarContainer.style.width = `${D}px`);
						const M = this.z();
						this.h.forEach((N) => (N.maxWidth = M)),
							this.j.forEach((N) => (N.maxWidth = M));
					}
					z() {
						return this.m / 2;
					}
					updateContext(k) {
						(this.n = k),
							this.g.clear(),
							this.n &&
								(this.g.add(
									this.n.cell.onDidChangeLayout(() => {
										this.n && this.updateInternalLayoutNow(this.n.cell);
									}),
								),
								this.g.add(
									this.n.cell.onDidChangeCellStatusBarItems(() => this.F()),
								),
								this.g.add(
									this.n.notebookEditor.onDidChangeActiveCell(() => this.C()),
								),
								this.updateInternalLayoutNow(this.n.cell),
								this.C(),
								this.F());
					}
					C() {
						const k = this.n.notebookEditor.getActiveCell() === this.n?.cell;
						this.statusBarContainer.classList.toggle("is-active-cell", k);
					}
					F() {
						const k = this.n.cell.getCellStatusBarItems();
						k.sort((A, R) => (R.priority ?? 0) - (A.priority ?? 0));
						const L = this.z(),
							D = k.filter(
								(A) => A.alignment === l.CellStatusbarAlignment.Left,
							),
							M = k
								.filter((A) => A.alignment === l.CellStatusbarAlignment.Right)
								.reverse(),
							N = (A, R, O) => {
								if (A.length > R.length) {
									const B = A.splice(R.length, A.length - R.length);
									for (const U of B) U.container.remove(), U.dispose();
								}
								R.forEach((B, U) => {
									const z = A[U];
									if (z) z.updateItem(B, L);
									else {
										const F = this.w.createInstance(
											T,
											this.n,
											this.r,
											this.u,
											B,
											L,
										);
										A.push(F), O.appendChild(F.container);
									}
								});
							};
						N(this.h, D, this.a), N(this.j, M, this.b);
					}
					dispose() {
						super.dispose(), (0, r.$Vc)(this.h), (0, r.$Vc)(this.j);
					}
				};
				(e.$U3b = I),
					(e.$U3b = I =
						Ne([j(4, c.$Li), j(5, y.$Uyb), j(6, $.$gj), j(7, p.$iP)], I));
				let T = class extends r.$1c {
					set maxWidth(k) {
						this.container.style.maxWidth = k + "px";
					}
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.c = k),
							(this.f = L),
							(this.g = D),
							(this.h = A),
							(this.j = R),
							(this.m = O),
							(this.n = B),
							(this.q = U),
							(this.container = S(".cell-status-item")),
							(this.b = this.D(new r.$Zc())),
							this.updateItem(M, N);
					}
					updateItem(k, L) {
						this.b.clear(),
							(!this.a || this.a.text !== k.text) &&
								(this.b.add(new w.$Yob(this.container)).text = k.text.replace(
									/\n/g,
									" ",
								));
						const D = (A) =>
							(0, a.isThemeColor)(A)
								? this.n.getColorTheme().getColor(A.id)?.toString() || ""
								: A;
						(this.container.style.color = k.color ? D(k.color) : ""),
							(this.container.style.backgroundColor = k.backgroundColor
								? D(k.backgroundColor)
								: ""),
							(this.container.style.opacity = k.opacity ? k.opacity : ""),
							this.container.classList.toggle(
								"cell-status-item-show-when-active",
								!!k.onlyShowWhenActive,
							),
							typeof L == "number" && (this.maxWidth = L);
						let M, N;
						if (
							(k.accessibilityInformation
								? ((M = k.accessibilityInformation.label),
									(N = k.accessibilityInformation.role))
								: (M = k.text ? (0, d.$$k)(k.text).trim() : ""),
							this.container.setAttribute("aria-label", M),
							this.container.setAttribute("role", N || ""),
							k.tooltip)
						) {
							const A =
								typeof k.tooltip == "string"
									? k.tooltip
									: {
											markdown: k.tooltip,
											markdownNotSupportedFallback: void 0,
										};
							this.b.add(this.q.setupManagedHover(this.f, this.container, A));
						}
						this.container.classList.toggle(
							"cell-status-item-has-command",
							!!k.command,
						),
							k.command
								? ((this.container.tabIndex = 0),
									this.b.add(
										t.$0fb(this.container, t.$$gb.CLICK, (A) => {
											this.r();
										}),
									),
									this.b.add(
										t.$0fb(this.container, t.$$gb.KEY_DOWN, (A) => {
											const R = new i.$7fb(A);
											(R.equals(m.KeyCode.Space) ||
												R.equals(m.KeyCode.Enter)) &&
												this.r();
										}),
									))
								: this.container.removeAttribute("tabIndex"),
							(this.a = k);
					}
					async r() {
						const k = this.a.command;
						if (!k) return;
						const L = typeof k == "string" ? k : k.id,
							D = typeof k == "string" ? [] : (k.arguments ?? []);
						(typeof k == "string" ||
							!k.arguments ||
							!Array.isArray(k.arguments) ||
							k.arguments.length === 0) &&
							D.unshift(this.c),
							this.h.publicLog2("workbenchActionExecuted", {
								id: L,
								from: "cell status bar",
							});
						try {
							this.g?.focus(), await this.j.executeCommand(L, ...D);
						} catch (M) {
							this.m.error((0, E.$xj)(M));
						}
					}
				};
				T = Ne(
					[j(5, g.$km), j(6, h.$ek), j(7, n.$4N), j(8, p.$iP), j(9, y.$Uyb)],
					T,
				);
			},
		),
		