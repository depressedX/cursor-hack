import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/browser/ui/selectBox/selectBox.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/commands/common/commands.js';
import '../common/debug.js';
import '../../../../base/common/themables.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/lifecycle.js';
import './debugCommands.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import './debugIcons.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../platform/hover/browser/hover.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(
			de[1332],
			he([
				1, 0, 4, 27, 7, 114, 596, 10, 31, 112, 26, 51, 49, 25, 3, 425, 198, 352,
				39, 106, 95, 72, 130, 417, 8,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zJc = e.$yJc = void 0),
					(t = mt(t)),
					(w = mt(w));
				const I = w.$;
				let T = class extends p.$$ib {
					static {
						S = this;
					}
					static {
						this.a = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(L, D, M),
							(this.I = L),
							(this.J = N),
							(this.L = A),
							(this.M = R),
							(this.N = O),
							(this.O = U),
							(this.P = z),
							(this.Q = F),
							(this.h = []),
							(this.r = 0),
							(this.y = []),
							(this.n = []),
							(this.g = new C.$5ib([], -1, B, b.$Fyb, {
								ariaLabel: t.localize(5398, null),
							})),
							this.g.setFocusable(!1),
							this.n.push(this.g),
							this.R();
					}
					R() {
						this.n.push(
							this.L.onDidChangeConfiguration((L) => {
								L.affectsConfiguration("launch") && this.S();
							}),
						),
							this.n.push(
								this.J.getConfigurationManager().onDidSelectConfiguration(
									() => {
										this.S();
									},
								),
							);
					}
					render(L) {
						(this.b = L),
							L.classList.add("start-debug-action-item"),
							(this.c = w.$fhb(L, I(u.ThemeIcon.asCSSSelector(o.$uKb))));
						const D = this.O.lookupKeybinding(this.action.id)?.getLabel(),
							M = D ? ` (${D})` : "",
							N = this.action.label + M;
						this.n.push(
							this.P.setupManagedHover((0, s.$cib)("mouse"), this.c, N),
						),
							this.c.setAttribute("role", "button"),
							this.U(N),
							this.n.push(
								w.$0fb(this.c, w.$$gb.CLICK, () => {
									this.c.blur(),
										this.J.state !== r.State.Initializing &&
											this.actionRunner.run(this.action, this.I);
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_DOWN, (B) => {
									this.action.enabled &&
										B.button === 0 &&
										this.c.classList.add("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_UP, () => {
									this.c.classList.remove("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.MOUSE_OUT, () => {
									this.c.classList.remove("active");
								}),
							),
							this.n.push(
								w.$0fb(this.c, w.$$gb.KEY_DOWN, (B) => {
									const U = new E.$7fb(B);
									U.equals(i.KeyCode.RightArrow) &&
										((this.c.tabIndex = -1),
										this.g.focus(),
										U.stopPropagation());
								}),
							),
							this.n.push(
								this.g.onDidSelect(async (B) => {
									const U = this.h[B.index];
									(U.handler ? await U.handler() : !1)
										? (this.r = B.index)
										: this.g.select(this.r);
								}),
							);
						const A = I(".configuration");
						this.g.render(w.$fhb(L, A)),
							this.n.push(
								w.$0fb(A, w.$$gb.KEY_DOWN, (B) => {
									const U = new E.$7fb(B);
									U.equals(i.KeyCode.LeftArrow) &&
										(this.g.setFocusable(!1),
										(this.c.tabIndex = 0),
										this.c.focus(),
										U.stopPropagation());
								}),
							),
							(this.b.style.border = `1px solid ${(0, a.$rP)(a.$bS)}`),
							(A.style.borderLeft = `1px solid ${(0, a.$rP)(a.$bS)}`),
							(this.b.style.backgroundColor = (0, a.$rP)(a.$$R));
						const R = this.J.getConfigurationManager(),
							O = () =>
								R.getDynamicProviders().then((B) => {
									B.length !== this.y.length && ((this.y = B), this.S());
								});
						this.n.push(R.onDidChangeConfigurationProviders(O)), O(), this.S();
					}
					setActionContext(L) {
						this.I = L;
					}
					isEnabled() {
						return !0;
					}
					focus(L) {
						L ? this.g.focus() : ((this.c.tabIndex = 0), this.c.focus());
					}
					blur() {
						(this.c.tabIndex = -1), this.g.blur(), this.b.blur();
					}
					setFocusable(L) {
						L
							? (this.c.tabIndex = 0)
							: ((this.c.tabIndex = -1), this.g.setFocusable(!1));
					}
					dispose() {
						(this.n = (0, n.$Vc)(this.n)), super.dispose();
					}
					S() {
						(this.r = 0), (this.h = []);
						const L = this.J.getConfigurationManager(),
							D = this.N.getWorkbenchState() === c.WorkbenchState.WORKSPACE;
						let M;
						const N = [];
						L.getAllConfigurations().forEach(
							({ launch: A, name: R, presentation: O }) => {
								M !== O?.group &&
									((M = O?.group),
									this.h.length &&
										(this.h.push({
											label: S.a,
											handler: () => Promise.resolve(!1),
										}),
										N.push(this.h.length - 1))),
									R === L.selectedConfiguration.name &&
										A === L.selectedConfiguration.launch &&
										(this.r = this.h.length);
								const B = D ? `${R} (${A.name})` : R;
								this.h.push({
									label: B,
									handler: async () => (await L.selectConfiguration(A, R), !0),
								});
							},
						),
							L.getRecentDynamicConfigurations()
								.slice(0, 3)
								.forEach(({ name: A, type: R }) => {
									R === L.selectedConfiguration.type &&
										L.selectedConfiguration.name === A &&
										(this.r = this.h.length),
										this.h.push({
											label: A,
											handler: async () => (
												await L.selectConfiguration(void 0, A, void 0, {
													type: R,
												}),
												!0
											),
										});
								}),
							this.h.length === 0 &&
								this.h.push({
									label: t.localize(5399, null),
									handler: async () => !1,
								}),
							this.h.push({ label: S.a, handler: () => Promise.resolve(!1) }),
							N.push(this.h.length - 1),
							this.y.forEach((A) => {
								this.h.push({
									label: `${A.label}...`,
									handler: async () => {
										const R = await A.pick();
										return R
											? (await L.selectConfiguration(
													R.launch,
													R.config.name,
													R.config,
													{ type: A.type },
												),
												!0)
											: !1;
									},
								});
							}),
							L.getLaunches()
								.filter((A) => !A.hidden)
								.forEach((A) => {
									const R = D
										? t.localize(5400, null, A.name)
										: t.localize(5401, null);
									this.h.push({
										label: R,
										handler: async () => (
											await this.M.executeCommand(g.$XGc, A.uri.toString()), !1
										),
									});
								}),
							this.g.setOptions(
								this.h.map((A, R) => ({
									text: A.label,
									isDisabled: N.indexOf(R) !== -1,
								})),
								this.r,
							);
					}
					U(L) {
						let D = L,
							M;
						this.L.getValue(y.AccessibilityVerbositySettingId.Debug) &&
							(M =
								this.O.lookupKeybinding(
									$.AccessibilityCommandId.OpenAccessibilityHelp,
									this.Q,
								)?.getLabel() ?? void 0),
							M
								? (D = t.localize(5402, null, D, M))
								: (D = t.localize(5403, null, D)),
							(this.c.ariaLabel = D);
					}
				};
				(e.$yJc = T),
					(e.$yJc =
						T =
						S =
							Ne(
								[
									j(3, r.$75),
									j(4, d.$gj),
									j(5, m.$ek),
									j(6, c.$Vi),
									j(7, h.$Wxb),
									j(8, f.$uZ),
									j(9, l.$Uyb),
									j(10, v.$6j),
								],
								T,
							));
				let P = class extends p.$ajb {
					constructor(L, D, M, N, A) {
						super(null, L, [], -1, N, b.$Fyb, {
							ariaLabel: t.localize(5404, null),
						}),
							(this.a = M),
							(this.y = A),
							this.D(
								this.a.getViewModel().onDidFocusSession(() => {
									const O = this.L();
									if (O) {
										const B = this.M().indexOf(O);
										this.select(B);
									}
								}),
							),
							this.D(
								this.a.onDidNewSession((O) => {
									const B = [];
									B.push(O.onDidChangeName(() => this.J())),
										B.push(O.onDidEndAdapter(() => (0, n.$Vc)(B))),
										this.J();
								}),
							),
							this.M().forEach((O) => {
								this.D(O.onDidChangeName(() => this.J()));
							}),
							this.D(this.a.onDidEndSession(() => this.J()));
						const R = D ? this.N(D) : void 0;
						this.J(R);
					}
					r(L, D) {
						return this.M()[D];
					}
					J(L) {
						L || (L = this.L());
						const D = this.M(),
							M = D.map((N) => {
								const A = N.getLabel();
								return N.parentSession ? `\xA0\xA0${A}` : A;
							});
						this.setOptions(
							M.map((N) => ({ text: N })),
							L ? D.indexOf(L) : void 0,
						);
					}
					L() {
						const L = this.a.getViewModel().focusedSession;
						return L ? this.N(L) : void 0;
					}
					M() {
						const L = this.y.getValue("debug").showSubSessionsInToolBar,
							D = this.a.getModel().getSessions();
						return L ? D : D.filter((M) => !M.parentSession);
					}
					N(L) {
						const D = this.y.getValue("debug").showSubSessionsInToolBar;
						for (; L.parentSession && !D; ) L = L.parentSession;
						return L;
					}
				};
				(e.$zJc = P),
					(e.$zJc = P = Ne([j(2, r.$75), j(3, h.$Wxb), j(4, d.$gj)], P));
			},
		),
		