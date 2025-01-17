import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import './terminal.js';
import './terminalMenus.js';
import '../common/terminal.js';
import './terminalContextMenu.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3405],
			he([
				1, 0, 7, 50, 607, 11, 8, 49, 5, 21, 32, 35, 217, 107, 1017, 145, 616,
				18, 96, 3,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RUc = void 0),
					(t = mt(t));
				let s = class extends h.$JEb {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(c.$pIb, y, $, v, S),
							(this.u = I),
							(this.cb = T),
							(this.db = P),
							(this.eb = k),
							(this.fb = M),
							(this.gb = N),
							(this.hb = A),
							(this.ib = R),
							(this.f = void 0),
							(this.r = !1),
							(this.s = this.D(new b.$Zc())),
							(this.j = this.D(
								D.createMenu(E.$XX.TerminalNewDropdownContext, L),
							)),
							(this.m = this.D(D.createMenu(E.$XX.TerminalInstanceContext, L)));
					}
					async setInput(y, $, v, S) {
						this.f?.terminalInstance?.detachFromElement(),
							(this.f = y),
							await super.setInput(y, $, v, S),
							this.f.terminalInstance?.attachToElement(this.c),
							this.g && this.layout(this.g),
							this.f.terminalInstance?.setVisible(
								this.isVisible() &&
									this.ib.isVisible(f.Parts.EDITOR_PART, this.window),
							),
							this.f.terminalInstance &&
								(this.D(this.f.terminalInstance.onDidFocus(() => this.jb())),
								this.f.setCopyLaunchConfig(
									this.f.terminalInstance.shellLaunchConfig,
								));
					}
					clearInput() {
						super.clearInput(),
							this.c &&
								this.f?.terminalInstance?.domElement.parentElement === this.c &&
								this.f.terminalInstance?.detachFromElement(),
							(this.f = void 0);
					}
					jb() {
						this.f?.terminalInstance &&
							this.u.setActiveInstance(this.f.terminalInstance);
					}
					focus() {
						super.focus(), this.f?.terminalInstance?.focus(!0);
					}
					Y(y) {
						(this.b = y),
							(this.c = t.$(".terminal-overflow-guard.terminal-editor")),
							this.b.appendChild(this.c),
							this.lb();
					}
					lb() {
						this.b &&
							(this.D(
								t.$0fb(this.b, "mousedown", async (y) => {
									const $ = this.u.activeInstance;
									if (this.u.instances.length > 0 && $) {
										const v = await $.handleMouseEvent(y, this.m);
										typeof v == "object" &&
											v.cancelContextMenu &&
											(this.r = !0);
									}
								}),
							),
							this.D(
								t.$0fb(this.b, "contextmenu", (y) => {
									const $ = this.eb.config.rightClickBehavior;
									if ($ === "nothing" && !y.shiftKey) {
										y.preventDefault(),
											y.stopImmediatePropagation(),
											(this.r = !1);
										return;
									} else
										!this.r &&
											$ !== "copyPaste" &&
											$ !== "paste" &&
											(this.r ||
												(0, p.$zUc)(
													this.window,
													y,
													this.f?.terminalInstance,
													this.m,
													this.gb,
												),
											y.preventDefault(),
											y.stopImmediatePropagation(),
											(this.r = !1));
								}),
							));
					}
					layout(y) {
						const $ = this.f?.terminalInstance;
						$ && ($.attachToElement(this.c), $.layout(y)), (this.g = y);
					}
					setVisible(y) {
						super.setVisible(y),
							this.f?.terminalInstance?.setVisible(
								y && this.ib.isVisible(f.Parts.EDITOR_PART, this.window),
							);
					}
					getActionViewItem(y, $) {
						switch (y.id) {
							case g.TerminalCommandId.CreateTerminalEditor:
								if (y instanceof E.$2X) {
									const v = { viewColumn: o.$JY },
										S = (0, n.$QUc)(
											v,
											this.hb.availableProfiles,
											this.nb(),
											this.hb.contributedProfiles,
											this.db,
											this.j,
										);
									return (
										this.mb(S.dropdownAction, S.dropdownMenuActions),
										this.fb.createInstance(
											w.$OYb,
											y,
											S.dropdownAction,
											S.dropdownMenuActions,
											S.className,
											this.gb,
											{ hoverDelegate: $.hoverDelegate },
										)
									);
								}
						}
						return super.getActionViewItem(y, $);
					}
					mb(y, $) {
						this.s.clear(),
							y instanceof i.$rj && this.s.add(y),
							$.filter((v) => v instanceof i.$rj).forEach((v) => this.s.add(v));
					}
					nb() {
						let y;
						try {
							y = this.hb.getDefaultProfileName();
						} catch {
							y = this.cb.defaultProfileName;
						}
						return y;
					}
				};
				(e.$RUc = s),
					(e.$RUc = s =
						Ne(
							[
								j(1, u.$km),
								j(2, a.$iP),
								j(3, r.$lq),
								j(4, c.$kIb),
								j(5, g.$reb),
								j(6, c.$iIb),
								j(7, c.$jIb),
								j(8, C.$6j),
								j(9, E.$YX),
								j(10, m.$Li),
								j(11, d.$Xxb),
								j(12, g.$teb),
								j(13, f.$mEb),
							],
							s,
						));
			},
		),
		