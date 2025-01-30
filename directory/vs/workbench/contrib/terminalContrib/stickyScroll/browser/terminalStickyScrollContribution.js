import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../terminal/browser/terminalInstance.js';
import '../common/terminalStickyScrollConfiguration.js';
import './terminalStickyScrollOverlay.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/stickyScroll/browser/media/stickyScroll.js';
define(
			de[2004],
			he([1, 0, 6, 3, 10, 8, 5, 39, 189, 1074, 808, 3172, 1144]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*configuration*/,
 E /*contextkey*/,
 C /*instantiation*/,
 d /*keybinding*/,
 m /*capabilities*/,
 r /*terminalInstance*/,
 u /*terminalStickyScrollConfiguration*/,
 a /*terminalStickyScrollOverlay*/) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Vc = void 0);
				let c = class extends i.$1c {
					static {
						h = this;
					}
					static {
						this.ID = "terminal.stickyScroll";
					}
					static get(g) {
						return g.getContribution(h.ID);
					}
					constructor(g, p, o, f, b, s, l) {
						super(),
							(this.g = g),
							(this.h = f),
							(this.j = b),
							(this.m = s),
							(this.n = l),
							(this.b = this.D(new i.$2c())),
							(this.c = this.D(new i.$2c())),
							(this.f = this.D(new i.$2c())),
							this.D(
								t.Event.runAndSubscribe(
									this.h.onDidChangeConfiguration,
									(y) => {
										(!y ||
											y.affectsConfiguration(
												u.TerminalStickyScrollSettingId.Enabled,
											)) &&
											this.q();
									},
								),
							);
					}
					xtermReady(g) {
						(this.a = g), this.q();
					}
					xtermOpen(g) {
						this.q();
					}
					hideLock() {
						this.b.value?.lockHide();
					}
					hideUnlock() {
						this.b.value?.unlockHide();
					}
					q() {
						this.b.value ? this.s() : this.r(),
							this.b.value
								? (this.c.clear(),
									this.f.value ||
										(this.f.value = this.g.capabilities.onDidRemoveCapability(
											(g) => {
												g.id === m.TerminalCapability.CommandDetection &&
													this.q();
											},
										)))
								: (this.f.clear(),
									this.c.value ||
										(this.c.value = this.g.capabilities.onDidAddCapability(
											(g) => {
												g.id === m.TerminalCapability.CommandDetection &&
													this.q();
											},
										)));
					}
					r() {
						if (this.t()) {
							const g = r.$oVc.getXtermConstructor(this.n, this.j);
							this.b.value = this.m.createInstance(
								a.$1Vc,
								this.g,
								this.a,
								this.m.createInstance(r.$rVc, this.g),
								this.g.capabilities.get(m.TerminalCapability.CommandDetection),
								g,
							);
						}
					}
					s() {
						this.t() || this.b.clear();
					}
					t() {
						if (this.g.shellLaunchConfig.hideFromUser) return !1;
						const g = this.g.capabilities.get(
							m.TerminalCapability.CommandDetection,
						);
						return !!(
							this.h.getValue(u.TerminalStickyScrollSettingId.Enabled) &&
							g &&
							this.a?.raw?.element
						);
					}
				};
				(e.$2Vc = c),
					(e.$2Vc =
						c =
						h =
							Ne([j(3, w.$gj), j(4, E.$6j), j(5, C.$Li), j(6, d.$uZ)], c));
			},
		),
		