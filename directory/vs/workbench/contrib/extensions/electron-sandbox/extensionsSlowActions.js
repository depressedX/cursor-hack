import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../nls.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/request/common/request.js';
import '../../../../base/common/resources.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/native/common/native.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/profiling/common/profiling.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/buffer.js';
define(
			de[1806],
			he([1, 0, 62, 50, 9, 5, 4, 33, 327, 19, 57, 41, 110, 151, 941, 22, 76]),
			function (ce /*require*/,
 e /*exports*/,
 t /*productService*/,
 i /*actions*/,
 w /*uri*/,
 E /*instantiation*/,
 C /*nls*/,
 d /*cancellation*/,
 m /*request*/,
 r /*resources*/,
 u /*dialogs*/,
 a /*opener*/,
 h /*native*/,
 c /*environmentService*/,
 n /*profiling*/,
 g /*files*/,
 p /*buffer*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wfd = void 0),
					(e.$Xfd = b);
				class o {
					static fromExtension($) {
						let v;
						if ($.bugs && typeof $.bugs.url == "string") {
							const S = w.URI.parse($.bugs.url),
								I = /\/([^/]+)\/([^/]+)\/issues\/?$/.exec($.bugs.url);
							I &&
								(v = {
									base: S.with({
										path: null,
										fragment: null,
										query: null,
									}).toString(!0),
									owner: I[1],
									repo: I[2],
								});
						}
						if (!v && $.repository && typeof $.repository.url == "string") {
							const S = w.URI.parse($.repository.url),
								I = /\/([^/]+)\/([^/]+)(\.git)?$/.exec($.repository.url);
							I &&
								(v = {
									base: S.with({
										path: null,
										fragment: null,
										query: null,
									}).toString(!0),
									owner: I[1],
									repo: I[2],
								});
						}
						return v && v.base.indexOf("github") === -1 && (v = void 0), v;
					}
				}
				let f = class extends i.$rj {
					constructor($, v, S) {
						super(
							"report.slow",
							(0, C.localize)(6619, null),
							"extension-action report-issue",
						),
							(this.extension = $),
							(this.profile = v),
							(this.a = S),
							(this.enabled = !!o.fromExtension($));
					}
					async run() {
						const $ = await this.a.invokeFunction(
							b,
							this.extension,
							this.profile,
						);
						$ && (await $.run());
					}
				};
				(e.$Wfd = f), (e.$Wfd = f = Ne([j(2, E.$Li)], f));
				async function b(y, $, v) {
					const S = o.fromExtension($);
					if (!S) return;
					const I = y.get(m.$Aq),
						T = y.get(E.$Li),
						P = `https://api.github.com/search/issues?q=is:issue+state:open+in:title+repo:${S.owner}/${S.repo}+%22Extension+causes+high+cpu+load%22`;
					let k;
					try {
						k = await I.request({ url: P }, d.CancellationToken.None);
					} catch {
						return;
					}
					const L = await (0, m.$Eq)(k);
					if (!L) return;
					const D = JSON.parse(L);
					if (!(!D || typeof D.total_count != "number"))
						return D.total_count === 0
							? T.createInstance(s, $, S, v)
							: T.createInstance(l, $, S, v);
				}
				let s = class extends i.$rj {
					constructor($, v, S, I, T, P, k, L, D) {
						super("report.slow", (0, C.localize)(6620, null)),
							(this.extension = $),
							(this.repoInfo = v),
							(this.profile = S),
							(this.a = I),
							(this.b = T),
							(this.c = P),
							(this.f = k),
							(this.g = L),
							(this.h = D);
					}
					async run() {
						const $ = n.Utils.rewriteAbsolutePaths(
								this.profile.data,
								"pii_removed",
							),
							v = (0, r.$nh)(
								this.g.tmpDir,
								`${this.extension.identifier.value}-unresponsive.cpuprofile.txt`,
							);
						await this.h.writeFile(
							v,
							p.$Te.fromString(JSON.stringify($, void 0, 4)),
						);
						const S = await this.f.getOSProperties(),
							I = encodeURIComponent("Extension causes high cpu load"),
							T = `${S.type} ${S.arch} ${S.release}`,
							P = `:warning: Make sure to **attach** this file from your *home*-directory:
:warning:\`${v}\`

Find more details here: https://github.com/microsoft/vscode/wiki/Explain-extension-causes-high-cpu-load`,
							k = encodeURIComponent(`- Issue Type: \`Performance\`
- Extension Name: \`${this.extension.name}\`
- Extension Version: \`${this.extension.version}\`
- OS Version: \`${T}\`
- Cursor version: \`${this.c.version}\`
- VS Code version: \`${this.c.vscodeVersion}\`

${P}`),
							L = `${this.repoInfo.base}/${this.repoInfo.owner}/${this.repoInfo.repo}/issues/new/?body=${k}&title=${I}`;
						this.b.open(w.URI.parse(L)),
							this.a.info(
								(0, C.localize)(6621, null),
								(0, C.localize)(6622, null, v.fsPath),
							);
					}
				};
				s = Ne(
					[
						j(3, u.$GO),
						j(4, a.$7rb),
						j(5, t.$Bk),
						j(6, h.$y7c),
						j(7, c.$ucd),
						j(8, g.$ll),
					],
					s,
				);
				let l = class extends i.$rj {
					constructor($, v, S, I, T, P, k) {
						super("show.slow", (0, C.localize)(6623, null)),
							(this.extension = $),
							(this.repoInfo = v),
							(this.profile = S),
							(this.a = I),
							(this.b = T),
							(this.c = P),
							(this.f = k);
					}
					async run() {
						const $ = n.Utils.rewriteAbsolutePaths(
								this.profile.data,
								"pii_removed",
							),
							v = (0, r.$nh)(
								this.c.tmpDir,
								`${this.extension.identifier.value}-unresponsive.cpuprofile.txt`,
							);
						await this.f.writeFile(
							v,
							p.$Te.fromString(JSON.stringify($, void 0, 4)),
						);
						const S = `${this.repoInfo.base}/${this.repoInfo.owner}/${this.repoInfo.repo}/issues?utf8=\u2713&q=is%3Aissue+state%3Aopen+%22Extension+causes+high+cpu+load%22`;
						this.b.open(w.URI.parse(S)),
							this.a.info(
								(0, C.localize)(6624, null),
								(0, C.localize)(6625, null, v.fsPath),
							);
					}
				};
				l = Ne([j(3, u.$GO), j(4, a.$7rb), j(5, c.$ucd), j(6, g.$ll)], l);
			},
		),
		