import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/iconLabel/simpleIconLabel.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/types.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/browser/touch.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3625],
			he([
				1, 0, 163, 3, 758, 31, 32, 166, 35, 98, 7, 40, 28, 114, 27, 182, 79, 94,
				159, 72,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$5b = void 0);
				let s = class extends i.$1c {
					get name() {
						return (0, h.$wg)(this.b).name;
					}
					get hasCommand() {
						return typeof this.b?.command < "u";
					}
					constructor($, v, S, I, T, P, k, L) {
						super(),
							(this.r = $),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.b = void 0),
							(this.c = this.D(new i.$2c())),
							(this.f = this.D(new i.$2c())),
							(this.g = this.D(new i.$2c())),
							(this.h = this.D(new i.$2c())),
							(this.j = this.D(new i.$2c())),
							(this.m = this.D(new i.$2c())),
							(this.n = this.D(new i.$2c())),
							(this.q = void 0),
							(this.labelContainer = document.createElement("a")),
							(this.labelContainer.tabIndex = -1),
							this.labelContainer.setAttribute("role", "button"),
							(this.labelContainer.className = "statusbar-item-label"),
							this.D(f.$Qhb.addTarget(this.labelContainer)),
							(this.a = this.D(new l(this.labelContainer))),
							this.r.appendChild(this.labelContainer),
							(this.beakContainer = document.createElement("div")),
							(this.beakContainer.className = "status-bar-item-beak-container"),
							this.r.appendChild(this.beakContainer),
							this.update(v);
					}
					update($) {
						if (
							((this.a.showProgress = $.showProgress ?? !1),
							(!this.b || $.text !== this.b.text) &&
								((this.a.text = $.text),
								$.text
									? (0, u.show)(this.labelContainer)
									: (0, u.hide)(this.labelContainer)),
							(!this.b || $.cssClass !== this.b.cssClass) &&
								(this.a.cssClass = $.cssClass),
							(!this.b || $.ariaLabel !== this.b.ariaLabel) &&
								(this.r.setAttribute("aria-label", $.ariaLabel),
								this.labelContainer.setAttribute("aria-label", $.ariaLabel)),
							(!this.b || $.role !== this.b.role) &&
								this.labelContainer.setAttribute("role", $.role || "button"),
							!this.b || !this.C(this.b, $))
						) {
							const S = (0, o.$el)($.tooltip)
								? { markdown: $.tooltip, markdownNotSupportedFallback: void 0 }
								: $.tooltip;
							this.q
								? this.q.update(S)
								: (this.q = this.D(
										this.u.setupManagedHover(this.s, this.r, S, {
											dontHideHoverOnClick: $?.dontHideHoverOnClick,
										}),
									));
							const I = $?.dontHideHoverOnClick;
							$.command !== d.$g6b &&
								((this.m.value = (0, u.$0fb)(
									this.labelContainer,
									u.$$gb.FOCUS,
									(T) => {
										u.$ahb.stop(T), I !== !0 && this.q?.show(!1);
									},
								)),
								(this.n.value = (0, u.$0fb)(
									this.labelContainer,
									u.$$gb.FOCUS_OUT,
									(T) => {
										u.$ahb.stop(T), I !== !0 && this.q?.hide();
									},
								)));
						}
						if (!this.b || $.command !== this.b.command) {
							this.g.clear(), this.h.clear(), this.j.clear();
							const S = $.command;
							S && (S !== d.$g6b || this.q)
								? ((this.g.value = (0, u.$0fb)(
										this.labelContainer,
										u.$$gb.CLICK,
										() => this.F(S),
									)),
									(this.h.value = (0, u.$0fb)(
										this.labelContainer,
										f.EventType.Tap,
										() => this.F(S),
									)),
									(this.j.value = (0, u.$0fb)(
										this.labelContainer,
										u.$$gb.KEY_DOWN,
										(I) => {
											const T = new c.$7fb(I);
											T.equals(n.KeyCode.Space) || T.equals(n.KeyCode.Enter)
												? (u.$ahb.stop(I), this.F(S))
												: (T.equals(n.KeyCode.Escape) ||
														T.equals(n.KeyCode.LeftArrow) ||
														T.equals(n.KeyCode.RightArrow)) &&
													(u.$ahb.stop(I), this.q?.hide());
										},
									)),
									this.labelContainer.classList.remove("disabled"))
								: this.labelContainer.classList.add("disabled");
						}
						(!this.b || $.showBeak !== this.b.showBeak) &&
							($.showBeak
								? this.r.classList.add("has-beak")
								: this.r.classList.remove("has-beak"));
						const v = !!$.backgroundColor || ($.kind && $.kind !== "standard");
						if (!this.b || $.kind !== this.b.kind) {
							for (const S of d.$h6b) this.r.classList.remove(`${S}-kind`);
							$.kind &&
								$.kind !== "standard" &&
								this.r.classList.add(`${$.kind}-kind`),
								this.r.classList.toggle("has-background-color", v);
						}
						(!this.b || $.color !== this.b.color) &&
							this.G(this.labelContainer, $.color),
							(!this.b || $.backgroundColor !== this.b.backgroundColor) &&
								(this.r.classList.toggle("has-background-color", v),
								this.G(this.r, $.backgroundColor, !0)),
							(this.b = $);
					}
					C({ tooltip: $ }, { tooltip: v }) {
						return $ === void 0
							? v === void 0
							: (0, o.$el)($)
								? (0, o.$el)(v) && (0, o.$fl)($, v)
								: $ === v;
					}
					async F($) {
						if ($ === d.$g6b) this.q?.show(!0);
						else {
							const v = typeof $ == "string" ? $ : $.id,
								S = typeof $ == "string" ? [] : ($.arguments ?? []);
							this.y.publicLog2("workbenchActionExecuted", {
								id: v,
								from: "status bar",
							});
							try {
								await this.t.executeCommand(v, ...S);
							} catch (I) {
								this.w.error((0, t.$xj)(I));
							}
						}
					}
					G($, v, S) {
						let I;
						if ((S ? this.f.clear() : this.c.clear(), v))
							if ((0, r.isThemeColor)(v)) {
								I = this.z.getColorTheme().getColor(v.id)?.toString();
								const T = this.z.onDidColorThemeChange((P) => {
									const k = P.getColor(v.id)?.toString();
									S
										? ($.style.backgroundColor = k ?? "")
										: ($.style.color = k ?? "");
								});
								S ? (this.f.value = T) : (this.c.value = T);
							} else I = v;
						S ? ($.style.backgroundColor = I ?? "") : ($.style.color = I ?? "");
					}
				};
				(e.$$5b = s),
					(e.$$5b = s =
						Ne(
							[
								j(3, E.$ek),
								j(4, b.$Uyb),
								j(5, a.$4N),
								j(6, C.$km),
								j(7, m.$iP),
							],
							s,
						));
				class l extends w.$Yob {
					constructor($) {
						super($),
							(this.h = $),
							(this.c = (0, g.$Tib)(p.$eP)),
							(this.d = ""),
							(this.f = !1);
					}
					set showProgress($) {
						this.f !== $ &&
							((this.f = $),
							(this.c = (0, g.$Tib)($ === "syncing" ? p.$eP : p.$fP)),
							(this.text = this.d));
					}
					set cssClass($) {
						this.g !== $ &&
							(this.g && this.h.classList.remove(this.g),
							$ && this.h.classList.add($),
							(this.g = $));
					}
					set text($) {
						if (this.f) {
							this.h.firstChild !== this.c && this.h.appendChild(this.c);
							for (const S of Array.from(this.h.childNodes))
								S !== this.c && S.remove();
							let v = $ ?? "";
							v && (v = ` ${v}`), (0, u.$fhb)(this.h, ...(0, g.$Sib)(v));
						} else super.text = $;
					}
				}
			},
		),
		