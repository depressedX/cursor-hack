import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../search/common/queryBuilder.js';
import '../../search/common/search.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/async.js';
define(
			de[1315],
			he([1, 0, 19, 9, 33, 29, 5, 361, 186, 25, 15]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6oc = h),
					(e.$7oc = g),
					(t = mt(t)),
					(E = mt(E));
				const a = 7e3;
				function h(p, o) {
					const f = o.activationEvents;
					if (!f) return Promise.resolve(void 0);
					const b = [],
						s = [];
					for (const I of f)
						if (/^workspaceContains:/.test(I)) {
							const T = I.substr(18);
							T.indexOf("*") >= 0 || T.indexOf("?") >= 0 || p.forceUsingSearch
								? s.push(T)
								: b.push(T);
						}
					if (b.length === 0 && s.length === 0) return Promise.resolve(void 0);
					const { promise: l, resolve: y } = (0, u.$Fh)(),
						$ = (I) => y({ activationEvent: I }),
						v = Promise.all(b.map((I) => c(p, I, $))).then(() => {}),
						S = n(p, o.identifier, s, $);
					return (
						Promise.all([v, S]).then(() => {
							y(void 0);
						}),
						l
					);
				}
				async function c(p, o, f) {
					for (const b of p.folders)
						if (await p.exists(t.$nh(i.URI.revive(b), o))) {
							f(`workspaceContains:${o}`);
							return;
						}
				}
				async function n(p, o, f, b) {
					if (f.length === 0) return Promise.resolve(void 0);
					const s = new w.$Ce(),
						l = p.checkExists(p.folders, f, s.token),
						y = setTimeout(async () => {
							s.cancel(),
								p.logService.info(
									`Not activating extension '${o.value}': Timed out while searching for 'workspaceContains' pattern ${f.join(",")}`,
								);
						}, a);
					let $ = !1;
					try {
						$ = await l;
					} catch (v) {
						E.$8(v) || E.$4(v);
					}
					s.dispose(),
						clearTimeout(y),
						$ && b(`workspaceContains:${f.join(",")}`);
				}
				function g(p, o, f, b) {
					const s = p.get(C.$Li),
						l = p.get(m.$p7),
						$ = s.createInstance(d.$M8).file(
							o.map((v) => (0, r.$8i)(i.URI.revive(v))),
							{ _reason: "checkExists", includePattern: f, exists: !0 },
						);
					return l.fileSearch($, b).then(
						(v) => !!v.limitHit,
						(v) => (E.$8(v) ? !1 : Promise.reject(v)),
					);
				}
			},
		),
		