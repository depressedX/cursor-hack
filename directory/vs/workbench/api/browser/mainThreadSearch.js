import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/search/common/search.js';
import '../common/extHost.protocol.js';
import '../../../base/common/marshalling.js';
import '../../contrib/search/common/constants.js';
import '../../../platform/contextkey/common/contextkey.js';
define(
			de[3594],
			he([1, 0, 33, 3, 9, 10, 32, 101, 186, 88, 197, 377, 8]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*configuration*/,
 C /*telemetry*/,
 d /*extHostCustomers*/,
 m /*search*/,
 r /*extHost.protocol*/,
 u /*marshalling*/,
 a /*constants*/,
 h /*contextkey*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$poc = void 0),
					(a = mt(a));
				let c = class {
					constructor(o, f, b, s, l) {
						(this.c = f),
							(this.d = b),
							(this.e = l),
							(this.b = new Map()),
							(this.a = o.getProxy(r.$mbb.ExtHostSearch)),
							this.a.$enableExtensionHostSearch();
					}
					dispose() {
						this.b.forEach((o) => o.dispose()), this.b.clear();
					}
					$registerTextSearchProvider(o, f) {
						this.b.set(
							o,
							new g(this.c, m.SearchProviderType.text, f, o, this.a),
						);
					}
					$registerAITextSearchProvider(o, f) {
						a.$ooc.hasAIResultProvider.bindTo(this.e).set(!0),
							this.b.set(
								o,
								new g(this.c, m.SearchProviderType.aiText, f, o, this.a),
							);
					}
					$registerFileSearchProvider(o, f) {
						this.b.set(
							o,
							new g(this.c, m.SearchProviderType.file, f, o, this.a),
						);
					}
					$unregisterProvider(o) {
						(0, i.$Vc)(this.b.get(o)), this.b.delete(o);
					}
					$handleFileMatch(o, f, b) {
						const s = this.b.get(o);
						if (!s) throw new Error("Got result for unknown provider");
						s.handleFindMatch(f, b);
					}
					$handleTextMatch(o, f, b) {
						const s = this.b.get(o);
						if (!s) throw new Error("Got result for unknown provider");
						s.handleFindMatch(f, b);
					}
					$handleTelemetry(o, f) {
						this.d.publicLog(o, f);
					}
				};
				(e.$poc = c),
					(e.$poc = c =
						Ne(
							[
								(0, d.$tmc)(r.$lbb.MainThreadSearch),
								j(1, m.$p7),
								j(2, C.$km),
								j(3, E.$gj),
								j(4, h.$6j),
							],
							c,
						));
				class n {
					static {
						this.a = 0;
					}
					constructor(o, f = ++n.a, b = new Map()) {
						(this.progress = o), (this.id = f), (this.matches = b);
					}
					addMatch(o) {
						const f = this.matches.get(o.resource.toString());
						f
							? f.results && o.results && f.results.push(...o.results)
							: this.matches.set(o.resource.toString(), o),
							this.progress?.(o);
					}
				}
				class g {
					constructor(o, f, b, s, l) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.a = new i.$Zc()),
							(this.b = new Map()),
							this.a.add(o.registerSearchResultProvider(this.c, f, this));
					}
					dispose() {
						this.a.dispose();
					}
					fileSearch(o, f = t.CancellationToken.None) {
						return this.doSearch(o, void 0, f);
					}
					textSearch(o, f, b = t.CancellationToken.None) {
						return this.doSearch(o, f, b);
					}
					doSearch(o, f, b = t.CancellationToken.None) {
						if (!o.folderQueries.length) throw new Error("Empty folderQueries");
						const s = new n(f);
						this.b.set(s.id, s);
						const l = this.f(o, s.id, b);
						return Promise.resolve(l).then(
							(y) => (
								this.b.delete(s.id),
								{
									results: Array.from(s.matches.values()),
									stats: y.stats,
									limitHit: y.limitHit,
									messages: y.messages,
								}
							),
							(y) => (this.b.delete(s.id), Promise.reject(y)),
						);
					}
					clearCache(o) {
						return Promise.resolve(this.e.$clearCache(o));
					}
					handleFindMatch(o, f) {
						const b = this.b.get(o);
						b &&
							f.forEach((s) => {
								s.results
									? b.addMatch((0, u.$ji)(s))
									: b.addMatch({ resource: w.URI.revive(s) });
							});
					}
					f(o, f, b) {
						switch (o.type) {
							case m.QueryType.File:
								return this.e.$provideFileSearchResults(this.d, f, o, b);
							case m.QueryType.Text:
								return this.e.$provideTextSearchResults(this.d, f, o, b);
							default:
								return this.e.$provideAITextSearchResults(this.d, f, o, b);
						}
					}
				}
			},
		),
		