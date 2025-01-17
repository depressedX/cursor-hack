import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/linkedList.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/languages.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './configuration.js';
import '../../url/common/urlGlob.js';
import '../../../services/preferences/common/preferences.js';
define(
			de[1034],
			he([
				1, 0, 24, 103, 3, 273, 12, 9, 74, 4, 10, 5, 34, 41, 63, 1033, 1783, 131,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalUriOpenerService = e.IExternalUriOpenerService = void 0),
					(m = mt(m)),
					(r = mt(r)),
					(e.IExternalUriOpenerService = (0, a.$Mi)(
						"externalUriOpenerService",
					));
				let f = class extends w.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.configurationService = l),
							(this.logService = y),
							(this.preferencesService = $),
							(this.quickInputService = v),
							(this._providers = new E.$$c()),
							this.D(s.registerExternalOpener(this));
					}
					registerExternalOpenerProvider(s) {
						return { dispose: this._providers.push(s) };
					}
					async getOpeners(s, l, y, $) {
						const v = await this.getAllOpenersForUri(s);
						if (v.size === 0) return [];
						if (y.preferredOpenerId) {
							if (y.preferredOpenerId === g.defaultExternalUriOpenerId)
								return [];
							const P = v.get(y.preferredOpenerId);
							if (P) return [P];
						}
						const S = this.getConfiguredOpenerForUri(v, s);
						if (S) return S === g.defaultExternalUriOpenerId ? [] : [S];
						const I = [];
						if (
							(await Promise.all(
								Array.from(v.values()).map(async (P) => {
									let k;
									try {
										k = await P.canOpen(y.sourceUri, $);
									} catch (L) {
										this.logService.error(L);
										return;
									}
									switch (k) {
										case m.ExternalUriOpenerPriority.Option:
										case m.ExternalUriOpenerPriority.Default:
										case m.ExternalUriOpenerPriority.Preferred:
											I.push({ opener: P, priority: k });
											break;
									}
								}),
							),
							I.length === 0)
						)
							return [];
						const T = (0, t.$Sb)(
							I.filter(
								(P) => P.priority === m.ExternalUriOpenerPriority.Preferred,
							),
						);
						return T
							? [T.opener]
							: !l &&
									I.every(
										(P) => P.priority === m.ExternalUriOpenerPriority.Option,
									)
								? []
								: I.map((P) => P.opener);
					}
					async openExternal(s, l, y) {
						const $ = typeof s == "string" ? d.URI.parse(s) : s,
							v = await this.getOpeners($, !1, l, y);
						return v.length === 0
							? !1
							: v.length === 1
								? v[0].openExternalUri($, l, y)
								: this.showOpenerPrompt(v, $, l, y);
					}
					async getOpener(s, l, y) {
						const $ = await this.getOpeners(s, !0, l, y);
						if ($.length >= 1) return $[0];
					}
					async getAllOpenersForUri(s) {
						const l = new Map();
						return (
							await Promise.all(
								i.Iterable.map(this._providers, async (y) => {
									for await (const $ of y.getOpeners(s)) l.set($.id, $);
								}),
							),
							l
						);
					}
					getConfiguredOpenerForUri(s, l) {
						const y =
							this.configurationService.getValue(
								g.externalUriOpenersSettingId,
							) || {};
						for (const [$, v] of Object.entries(y))
							if ((0, p.$YXb)(l, $)) {
								if (v === g.defaultExternalUriOpenerId) return "default";
								const S = s.get(v);
								if (S) return S;
							}
					}
					async showOpenerPrompt(s, l, y, $) {
						const v = s.map((I) => ({ label: I.label, opener: I }));
						v.push(
							{
								label: C.$r ? r.localize(6650, null) : r.localize(6651, null),
								opener: void 0,
							},
							{ type: "separator" },
							{ label: r.localize(6652, null), opener: "configureDefault" },
						);
						const S = await this.quickInputService.pick(v, {
							placeHolder: r.localize(6653, null, l.toString()),
						});
						return S
							? typeof S.opener > "u"
								? !1
								: S.opener === "configureDefault"
									? (await this.preferencesService.openUserSettings({
											jsonEditor: !0,
											revealSetting: {
												key: g.externalUriOpenersSettingId,
												edit: !0,
											},
										}),
										!0)
									: S.opener.openExternalUri(l, y, $)
							: !0;
					}
				};
				(e.ExternalUriOpenerService = f),
					(e.ExternalUriOpenerService = f =
						Ne(
							[
								j(0, c.$7rb),
								j(1, u.$gj),
								j(2, h.$ik),
								j(3, o.$7Z),
								j(4, n.$DJ),
							],
							f,
						));
			},
		),
		