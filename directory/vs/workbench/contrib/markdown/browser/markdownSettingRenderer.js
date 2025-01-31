import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/preferences/common/preferences.js';
import '../../preferences/browser/settingsTreeModels.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../base/common/network.js';
define(
			de[3759],
			he([1, 0, 4, 131, 1042, 10, 49, 198, 32, 121, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*preferences*/,
 w /*settingsTreeModels*/,
 E /*configuration*/,
 C /*contextView*/,
 d /*actionViewItems*/,
 m /*telemetry*/,
 r /*clipboardService*/,
 u /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Xc = void 0),
					(t = mt(t));
				let a = class {
					constructor(c, n, g, p, o) {
						(this.e = c),
							(this.f = n),
							(this.g = g),
							(this.h = p),
							(this.i = o),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.a = new RegExp(
								'^<a (href)=".*code.*://settings/([^\\s"]+)"(?:\\s*codesetting="([^"]+)")?>',
							));
					}
					get featuredSettingStates() {
						const c = new Map();
						for (const [n, g] of this.d) c.set(n, this.e.getValue(n) === g);
						return c;
					}
					getHtmlRenderer() {
						return ({ raw: c }) => {
							const n = this.a.exec(c);
							if (n && n.length === 4) {
								const g = n[2],
									p = this.k(g, n[3]);
								p && (c = c.replace(this.a, p));
							}
							return c;
						};
					}
					settingToUriString(c, n) {
						return `${u.Schemas.codeSetting}://${c}${n ? `/${n}` : ""}`;
					}
					j(c) {
						return this.c.has(c) ? this.c.get(c) : this.g.getSetting(c);
					}
					parseValue(c, n) {
						if (n === "undefined" || n === "") return;
						const g = this.j(c);
						if (!g) return n;
						switch (g.type) {
							case "boolean":
								return n === "true";
							case "number":
								return parseInt(n, 10);
							case "string":
							default:
								return n;
						}
					}
					k(c, n) {
						const g = this.j(c);
						return g ? this.q(g, n) : "";
					}
					l(c, n) {
						if (n) return t.localize(7439, null);
						{
							const g = (0, w.$ECc)(c);
							return t.localize(7440, null, g.category, g.label);
						}
					}
					m(c) {
						const n = (0, w.$ECc)(c);
						return t.localize(7441, null, n.category, n.label);
					}
					n(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return n
							? t.localize(7442, null, p.category, p.label)
							: t.localize(7443, null, p.category, p.label);
					}
					o(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return t.localize(7444, null, p.category, p.label, n);
					}
					p(c, n) {
						const g = this.e.getValue(c.key);
						if (g === n || (g === void 0 && c.value === n)) return;
						const p = (0, w.$ECc)(c.key);
						return t.localize(7445, null, p.category, p.label, n);
					}
					q(c, n) {
						const g = this.settingToUriString(c.key, n),
							p = t.localize(7446, null);
						return `<code tabindex="0"><a href="${g}" class="codesetting" title="${p}" aria-role="button"><svg width="14" height="14" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.1 4.4L8.6 2H7.4l-.5 2.4-.7.3-2-1.3-.9.8 1.3 2-.2.7-2.4.5v1.2l2.4.5.3.8-1.3 2 .8.8 2-1.3.8.3.4 2.3h1.2l.5-2.4.8-.3 2 1.3.8-.8-1.3-2 .3-.8 2.3-.4V7.4l-2.4-.5-.3-.8 1.3-2-.8-.8-2 1.3-.7-.2zM9.4 1l.5 2.4L12 2.1l2 2-1.4 2.1 2.4.4v2.8l-2.4.5L14 12l-2 2-2.1-1.4-.5 2.4H6.6l-.5-2.4L4 13.9l-2-2 1.4-2.1L1 9.4V6.6l2.4-.5L2.1 4l2-2 2.1 1.4.4-2.4h2.8zm.6 7c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z"/></svg>
			<span class="separator"></span>
			<span class="setting-name">${c.key}</span>
		</a></code>`;
					}
					r(c, n) {
						if (c.type === "boolean") return this.n(c, n);
						if (c.type === "string") return this.o(c, n);
						if (c.type === "number") return this.p(c, n);
					}
					async restoreSetting(c) {
						const n = this.b.get(c);
						return (
							this.b.delete(c),
							this.e.updateValue(c, n, E.ConfigurationTarget.USER)
						);
					}
					async setSetting(c, n, g) {
						return (
							this.b.set(c, n),
							this.e.updateValue(c, g, E.ConfigurationTarget.USER)
						);
					}
					getActions(c) {
						if (c.scheme !== u.Schemas.codeSetting) return;
						const n = [],
							g = c.authority,
							p = this.parseValue(c.authority, c.path.substring(1)),
							o = this.e.inspect(g).userValue;
						if (p !== void 0 && p === o && this.b.has(g)) {
							const b = this.m(g);
							n.push({
								class: void 0,
								id: "restoreSetting",
								enabled: !0,
								tooltip: b,
								label: b,
								run: () => this.restoreSetting(g),
							});
						} else if (p !== void 0) {
							const b = this.j(g),
								s = b ? this.r(b, p) : void 0;
							b &&
								s &&
								n.push({
									class: void 0,
									id: "trySetting",
									enabled: o !== p,
									tooltip: s,
									label: s,
									run: () => {
										this.setSetting(g, o, p);
									},
								});
						}
						const f = this.l(g, n.length > 0);
						return (
							n.push({
								class: void 0,
								enabled: !0,
								id: "viewInSettings",
								tooltip: f,
								label: f,
								run: () =>
									this.g.openApplicationSettings({ query: `@id:${g}` }),
							}),
							n.push({
								class: void 0,
								enabled: !0,
								id: "copySettingId",
								tooltip: t.localize(7447, null),
								label: t.localize(7448, null),
								run: () => {
									this.i.writeText(g);
								},
							}),
							n
						);
					}
					s(c, n, g) {
						const p = this.getActions(c);
						p &&
							this.f.showContextMenu({
								getAnchor: () => ({ x: n, y: g }),
								getActions: () => p,
								getActionViewItem: (o) => new d.$_ib(o, o, { label: !0 }),
							});
					}
					async updateSetting(c, n, g) {
						if (c.scheme === u.Schemas.codeSetting)
							return (
								this.h.publicLog2("releaseNotesSettingAction", {
									settingId: c.authority,
								}),
								this.s(c, n, g)
							);
					}
				};
				(e.$$Xc = a),
					(e.$$Xc = a =
						Ne(
							[
								j(0, E.$gj),
								j(1, C.$Xxb),
								j(2, i.$7Z),
								j(3, m.$km),
								j(4, r.$Vxb),
							],
							a,
						));
			},
		)
