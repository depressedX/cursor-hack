import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/uri.js';
import '../../../base/node/pfs.js';
import '../../../platform/log/common/log.js';
import '../common/extHostConfiguration.js';
import '../common/extHostInitDataService.js';
import '../common/extHostRpcService.js';
import '../common/extHostSearch.js';
import '../common/extHostUriTransformerService.js';
import '../../services/search/common/search.js';
import '../../services/search/node/rawSearchService.js';
import '../../services/search/node/ripgrepSearchProvider.js';
import '../../services/search/node/ripgrepSearchUtils.js';
import '../../services/search/node/textSearchManager.js';
define(
			Pe[621],
			Ne([
				1, 0, 3, 16, 2, 43, 14, 56, 34, 21, 150, 112, 41, 620, 618, 198, 309,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Tjd = void 0),
					(N = tt(N));
				let $ = class extends p.$Fid {
					constructor(a, u, s, f, o) {
						super(a, s, o),
							(this.D = f),
							(this.w = N),
							(this.x = -1),
							(this.y = null),
							(this.z = !1),
							(this.B = new e.$Zc()),
							(this.C = !1),
							(this.getNumThreads = this.getNumThreads.bind(this)),
							(this.getNumThreadsCached = this.getNumThreadsCached.bind(this)),
							(this.E = this.E.bind(this));
						const w = new c.$Cjd("RipgrepSearchUD", this.q);
						this.B.add(
							this.registerTextSearchProvider(
								r.Schemas.vscodeUserData,
								new g.$Sjd(w, this.getNumThreadsCached),
							),
						),
							u.remote.isRemote && u.remote.authority && this.F(),
							f.getConfigProvider().then((m) => {
								this.C || this.B.add(m.onDidChangeConfiguration(this.E));
							});
					}
					E(a) {
						a.affectsConfiguration("search") && (this.A = void 0);
					}
					async getNumThreads() {
						return (await this.D.getConfigProvider())
							.getConfiguration("search")
							.get("ripgrep.maxThreads");
					}
					async getNumThreadsCached() {
						return this.A || (this.A = this.getNumThreads()), this.A;
					}
					dispose() {
						(this.C = !0), this.B.dispose();
					}
					$enableExtensionHostSearch() {
						this.F();
					}
					F() {
						if (this.z) return;
						this.z = !0;
						const a = new c.$Cjd("RipgrepSearchEH", this.q);
						this.B.add(
							this.registerTextSearchProvider(
								r.Schemas.file,
								new g.$Sjd(a, this.getNumThreadsCached),
							),
						),
							this.B.add(
								this.G(
									r.Schemas.file,
									new k.$Rjd("fileSearchProvider", this.getNumThreadsCached),
								),
							);
					}
					G(a, u) {
						const s = this.d++;
						return (
							(this.y = u),
							(this.x = s),
							this.c.$registerFileSearchProvider(s, this.s(a)),
							(0, e.$Yc)(() => {
								(this.y = null), this.c.$unregisterProvider(s);
							})
						);
					}
					$provideFileSearchResults(a, u, s, f) {
						const o = (0, p.$Gid)(s);
						if (a === this.x) {
							const w = Date.now();
							return this.H(a, u, o, f).then((m) => {
								const E = Date.now() - w;
								return this.q.debug(`Ext host file search time: ${E}ms`), m;
							});
						}
						return super.$provideFileSearchResults(a, u, s, f);
					}
					async doInternalFileSearchWithCustomCallback(a, u, s) {
						const f = (w) => {
							if (((0, d.$E7)(w) && (w = [w]), Array.isArray(w))) {
								s(w.map((m) => S.URI.file(m.path)));
								return;
							}
							w.message && this.q.debug("ExtHostSearch", w.message);
						};
						if (!this.y) throw new Error("No internal file search handler");
						const o = await this.getNumThreadsCached();
						return this.y.doFileSearch(a, o, f, u);
					}
					async H(a, u, s, f) {
						return this.doInternalFileSearchWithCustomCallback(s, f, (o) => {
							this.c.$handleFileMatch(a, u, o);
						});
					}
					$clearCache(a) {
						return this.y?.clearCache(a), super.$clearCache(a);
					}
					t(a, u) {
						return new h.$Pjd(a, u, void 0, "textSearchProvider");
					}
				};
				(t.$Tjd = $),
					(t.$Tjd = $ =
						wt(
							[
								rt(0, n.$08),
								rt(1, l.$98),
								rt(2, y.$j9),
								rt(3, I.$phd),
								rt(4, P.$ik),
							],
							$,
						));
			},
		),
		