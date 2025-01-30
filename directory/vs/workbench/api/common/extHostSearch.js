import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../services/search/common/fileSearchManager.js';
import './extHostRpcService.js';
import './extHostUriTransformerService.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/uri.js';
import '../../services/search/common/textSearchManager.js';
import '../../../base/common/marshalling.js';
import '../../services/search/common/searchExtConversionTypes.js';
define(
			Pe[150],
			Ne([1, 0, 3, 6, 5, 610, 21, 112, 14, 2, 308, 50, 197]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Fid = t.$Eid = void 0),
					(t.$Gid = g),
					(t.$Eid = (0, S.$Mi)("IExtHostSearch"));
				let k = class {
					constructor($, T, a) {
						(this.n = $),
							(this.o = T),
							(this.q = a),
							(this.c = this.n.getProxy(r.$lbb.MainThreadSearch)),
							(this.d = 0),
							(this.e = new Map()),
							(this.g = new Set()),
							(this.h = new Map()),
							(this.i = new Set()),
							(this.j = new Map()),
							(this.k = new Set()),
							(this.l = new N.$Aid());
					}
					s($) {
						return this.o.transformOutgoingScheme($);
					}
					registerTextSearchProviderOld($, T) {
						if (this.g.has($))
							throw new Error(
								`a text search provider for the scheme '${$}' is already registered`,
							);
						this.g.add($);
						const a = this.d++;
						return (
							this.e.set(a, new d.$xid(T)),
							this.c.$registerTextSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.g.delete($),
									this.e.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					registerTextSearchProvider($, T) {
						if (this.g.has($))
							throw new Error(
								`a text search provider for the scheme '${$}' is already registered`,
							);
						this.g.add($);
						const a = this.d++;
						return (
							this.e.set(a, T),
							this.c.$registerTextSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.g.delete($),
									this.e.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					registerAITextSearchProviderOld($, T) {
						if (this.i.has($))
							throw new Error(
								`an AI text search provider for the scheme '${$}'is already registered`,
							);
						this.i.add($);
						const a = this.d++;
						return (
							this.h.set(a, new d.$yid(T)),
							this.c.$registerAITextSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.i.delete($),
									this.h.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					registerAITextSearchProvider($, T) {
						if (this.i.has($))
							throw new Error(
								`an AI text search provider for the scheme '${$}'is already registered`,
							);
						this.i.add($);
						const a = this.d++;
						return (
							this.h.set(a, T),
							this.c.$registerAITextSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.i.delete($),
									this.h.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					registerFileSearchProviderOld($, T) {
						if (this.k.has($))
							throw new Error(
								`a file search provider for the scheme '${$}' is already registered`,
							);
						this.k.add($);
						const a = this.d++;
						return (
							this.j.set(a, new d.$uid(T)),
							this.c.$registerFileSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.k.delete($),
									this.j.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					registerFileSearchProvider($, T) {
						if (this.k.has($))
							throw new Error(
								`a file search provider for the scheme '${$}' is already registered`,
							);
						this.k.add($);
						const a = this.d++;
						return (
							this.j.set(a, T),
							this.c.$registerFileSearchProvider(a, this.s($)),
							(0, e.$Yc)(() => {
								this.k.delete($),
									this.j.delete(a),
									this.c.$unregisterProvider(a);
							})
						);
					}
					$provideFileSearchResults($, T, a, u) {
						const s = g(a),
							f = this.j.get($);
						if (f)
							return this.l.fileSearch(
								s,
								f,
								(o) => {
									this.c.$handleFileMatch(
										$,
										T,
										o.map((w) => w.resource),
									);
								},
								u,
							);
						throw new Error("unknown provider: " + $);
					}
					async doInternalFileSearchWithCustomCallback($, T, a) {
						return { messages: [] };
					}
					$clearCache($) {
						return this.l.clearCache($), Promise.resolve(void 0);
					}
					$provideTextSearchResults($, T, a, u) {
						const s = this.e.get($);
						if (!s || !s.provideTextSearchResults)
							throw new Error(`Unknown Text Search Provider ${$}`);
						const f = g(a);
						return this.t(f, s).search(
							(w) => this.c.$handleTextMatch($, T, w),
							u,
						);
					}
					$provideAITextSearchResults($, T, a, u) {
						const s = this.h.get($);
						if (!s || !s.provideAITextSearchResults)
							throw new Error(`Unknown AI Text Search Provider ${$}`);
						const f = g(a);
						return this.v(f, s).search(
							(w) => this.c.$handleTextMatch($, T, w),
							u,
						);
					}
					$enableExtensionHostSearch() {}
					t($, T) {
						return new p.$Bid(
							{ query: $, provider: T },
							{
								readdir: (a) => Promise.resolve([]),
								toCanonicalName: (a) => a,
							},
							"textSearchProvider",
						);
					}
					v($, T) {
						return new p.$Bid(
							{ query: $, provider: T },
							{
								readdir: (a) => Promise.resolve([]),
								toCanonicalName: (a) => a,
							},
							"aiTextSearchProvider",
						);
					}
				};
				(t.$Fid = k),
					(t.$Fid = k = wt([rt(0, P.$08), rt(1, I.$j9), rt(2, l.$ik)], k));
				function g(h) {
					return {
						...h,
						folderQueries: h.folderQueries && h.folderQueries.map(c),
						extraFileResources:
							h.extraFileResources &&
							h.extraFileResources.map(($) => n.URI.revive($)),
					};
				}
				function c(h) {
					return (0, y.$ji)(h);
				}
			},
		);
	var On =
		(this && this.__importDefault) ||
		function (we) {
			return we && we.__esModule ? we : { default: we };
		};
	