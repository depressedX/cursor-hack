import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../base/browser/window.js';
define(
		de[806],
		he([1, 0, 14, 6, 3, 111, 10, 117, 51, 79, 26, 75]),
		function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*severity*/,
 C /*configuration*/,
 d /*terminal*/,
 m /*colorRegistry*/,
 r /*iconRegistry*/,
 u /*themables*/,
 a /*window*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fHb = e.TerminalStatus = void 0),
				(e.$gHb = n),
				(E = xi(E));
			var h;
			(function (g) {
				(g.Bell = "bell"),
					(g.Disconnected = "disconnected"),
					(g.RelaunchNeeded = "relaunch-needed"),
					(g.EnvironmentVariableInfoChangesActive =
						"env-var-info-changes-active"),
					(g.ShellIntegrationAttentionNeeded =
						"shell-integration-attention-needed");
			})(h || (e.TerminalStatus = h = {}));
			let c = class extends w.$1c {
				get onDidAddStatus() {
					return this.c.event;
				}
				get onDidRemoveStatus() {
					return this.f.event;
				}
				get onDidChangePrimaryStatus() {
					return this.g.event;
				}
				constructor(p) {
					super(),
						(this.h = p),
						(this.a = new Map()),
						(this.b = new Map()),
						(this.c = this.D(new i.$re())),
						(this.f = this.D(new i.$re())),
						(this.g = this.D(new i.$re()));
				}
				get primary() {
					let p;
					for (const o of this.a.values())
						(!p || o.severity >= p.severity) && (o.icon || !p?.icon) && (p = o);
					return p;
				}
				get statuses() {
					return Array.from(this.a.values());
				}
				add(p, o) {
					p = this.j(p);
					const f = this.b.get(p.id);
					if (
						(f && (a.$Bfb.clearTimeout(f), this.b.delete(p.id)), o && o > 0)
					) {
						const s = a.$Bfb.setTimeout(() => this.remove(p), o);
						this.b.set(p.id, s);
					}
					const b = this.a.get(p.id);
					if (
						(b && b !== p && (this.f.fire(b), this.a.delete(b.id)),
						!this.a.has(p.id))
					) {
						const s = this.primary;
						this.a.set(p.id, p), this.c.fire(p);
						const l = this.primary;
						s !== l && this.g.fire(l);
					}
				}
				remove(p) {
					const o = typeof p == "string" ? this.a.get(p) : p;
					if (o && this.a.get(o.id)) {
						const f = this.primary?.id === o.id;
						this.a.delete(o.id), this.f.fire(o), f && this.g.fire(this.primary);
					}
				}
				toggle(p, o) {
					o ? this.add(p) : this.remove(p);
				}
				j(p) {
					if (
						!p.icon ||
						u.ThemeIcon.getModifier(p.icon) !== "spin" ||
						this.h.getValue(d.TerminalSettingId.TabsEnableAnimation)
					)
						return p;
					let o;
					return (
						p.icon.id === r.$fP.id
							? (o = t.$ak.play)
							: (o = u.ThemeIcon.modify(p.icon, void 0)),
						{ ...p, icon: o }
					);
				}
			};
			(e.$fHb = c), (e.$fHb = c = Ne([j(0, C.$gj)], c));
			function n(g) {
				switch (g) {
					case E.default.Error:
						return m.$TS;
					case E.default.Warning:
						return m.$US;
					default:
						return "";
				}
			}
		},
	),
		