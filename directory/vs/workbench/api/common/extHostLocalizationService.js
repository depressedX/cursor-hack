import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/platform.js';
import '../../../base/common/strings.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import './extHost.protocol.js';
import './extHostInitDataService.js';
import './extHostRpcService.js';
define(
			Pe[190],
			Ne([1, 0, 13, 15, 2, 5, 14, 6, 34, 21]),
			function (we, t, e, r, S, N, P, I, l, n) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$1hd = t.$Zhd = void 0);
				let p = class {
					constructor(d, k, g) {
						(this.f = g),
							(this.d = new Map()),
							(this.a = k.getProxy(I.$lbb.MainThreadLocalization)),
							(this.b = d.environment.appLanguage),
							(this.c = this.b === e.$j);
					}
					getMessage(d, k) {
						const { message: g, args: c, comment: h } = k;
						if (this.c) return (0, r.$lf)(g, c ?? {});
						let $ = g;
						h && h.length > 0 && ($ += `/${Array.isArray(h) ? h.join("") : h}`);
						const T = this.d.get(d)?.contents[$];
						return (
							T ||
								this.f.warn(
									`Using default string since no string found in i18n bundle that has the key: ${$}`,
								),
							(0, r.$lf)(T ?? g, c ?? {})
						);
					}
					getBundle(d) {
						return this.d.get(d)?.contents;
					}
					getBundleUri(d) {
						return this.d.get(d)?.uri;
					}
					async initializeLocalizedMessages(d) {
						if (
							this.c ||
							(!d.l10n && !d.isBuiltin) ||
							this.d.has(d.identifier.value)
						)
							return;
						let k;
						const g = await this.g(d);
						if (!g) {
							this.f.error(
								`No bundle location found for extension ${d.identifier.value}`,
							);
							return;
						}
						try {
							const c = await this.a.$fetchBundleContents(g),
								h = JSON.parse(c);
							k = d.isBuiltin ? h.contents?.bundle : h;
						} catch (c) {
							this.f.error(
								`Failed to load translations for ${d.identifier.value} from ${g}: ${c.message}`,
							);
							return;
						}
						k && this.d.set(d.identifier.value, { contents: k, uri: g });
					}
					async g(d) {
						if (d.isBuiltin) {
							const k = await this.a.$fetchBuiltInBundleUri(
								d.identifier.value,
								this.b,
							);
							return S.URI.revive(k);
						}
						return d.l10n
							? S.URI.joinPath(
									d.extensionLocation,
									d.l10n,
									`bundle.l10n.${this.b}.json`,
								)
							: void 0;
					}
				};
				(t.$Zhd = p),
					(t.$Zhd = p = wt([rt(0, l.$98), rt(1, n.$08), rt(2, P.$ik)], p)),
					(t.$1hd = (0, N.$Mi)("IExtHostLocalizationService"));
			},
		),
		