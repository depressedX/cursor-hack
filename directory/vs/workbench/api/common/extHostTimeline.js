import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import '../../../base/common/lifecycle.js';
import './extHostTypes.js';
import './extHostTypeConverters.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/types.js';
define(
			Pe[588],
			Ne([1, 0, 2, 5, 6, 3, 11, 17, 25, 55, 19]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ajd = t.$_id = void 0),
					(t.$_id = (0, r.$Mi)("IExtHostTimeline"));
				class y {
					constructor(g, c) {
						(this.b = new Map()),
							(this.c = new Map()),
							(this.a = g.getProxy(S.$lbb.MainThreadTimeline)),
							c.registerArgumentProcessor({
								processArgument: (h, $) => {
									if (h && h.$mid === n.MarshalledId.TimelineActionContext)
										if (
											this.b.get(h.source) &&
											l.$Gn.equals($, this.b.get(h.source)?.extension)
										) {
											const T = h.uri === void 0 ? void 0 : e.URI.revive(h.uri);
											return this.c.get(h.source)?.get(d(T))?.get(h.handle);
										} else return;
									return h;
								},
							});
					}
					async $getTimeline(g, c, h, $) {
						return this.b
							.get(g)
							?.provider.provideTimeline(e.URI.revive(c), h, $);
					}
					registerTimelineProvider(g, c, h, $) {
						const T = new N.$Zc(),
							a = this.d(c.id, $, T).bind(this);
						let u;
						c.onDidChange &&
							(u = c.onDidChange(
								(f) =>
									this.a.$emitTimelineChangeEvent({
										uri: void 0,
										reset: !0,
										...f,
										id: c.id,
									}),
								this,
							));
						const s = this.c;
						return this.f(
							{
								...c,
								scheme: g,
								onDidChange: void 0,
								async provideTimeline(f, o, w) {
									o?.resetCache && (T.clear(), s.get(c.id)?.clear());
									const m = await c.provideTimeline(f, o, w);
									if (m == null) return;
									const E = a(f, o);
									return { ...m, source: c.id, items: m.items.map(E) };
								},
								dispose() {
									for (const f of s.values()) f.get(c.id)?.clear();
									u?.dispose(), T.dispose();
								},
							},
							h,
						);
					}
					d(g, c, h) {
						return ($, T) => {
							let a;
							if (T?.cacheResults) {
								let u = this.c.get(g);
								u === void 0 && ((u = new Map()), this.c.set(g, u));
								const s = d($);
								(a = u.get(s)), a === void 0 && ((a = new Map()), u.set(s, a));
							}
							return (u) => {
								const { iconPath: s, ...f } = u,
									o = `${g}|${u.id ?? u.timestamp}`;
								a?.set(o, u);
								let w, m, E;
								u.iconPath &&
									(s instanceof P.$mcb
										? (E = { id: s.id, color: s.color })
										: e.URI.isUri(s)
											? ((w = s), (m = s))
											: ({ light: w, dark: m } = s));
								let R;
								return (
									P.$Rbb.isMarkdownString(f.tooltip)
										? (R = I.MarkdownString.from(f.tooltip))
										: (0, p.$lg)(f.tooltip)
											? (R = f.tooltip)
											: P.$Rbb.isMarkdownString(f.detail)
												? (console.warn(
														"Using deprecated TimelineItem.detail, migrate to TimelineItem.tooltip",
													),
													(R = I.MarkdownString.from(f.detail)))
												: (0, p.$lg)(f.detail) &&
													(console.warn(
														"Using deprecated TimelineItem.detail, migrate to TimelineItem.tooltip",
													),
													(R = f.detail)),
									{
										...f,
										id: f.id ?? void 0,
										handle: o,
										source: g,
										command: u.command ? c.toInternal(u.command, h) : void 0,
										icon: w,
										iconDark: m,
										themeIcon: E,
										tooltip: R,
										accessibilityInformation: u.accessibilityInformation,
									}
								);
							};
						};
					}
					f(g, c) {
						if (this.b.get(g.id))
							throw new Error(`Timeline Provider ${g.id} already exists.`);
						return (
							this.a.$registerTimelineProvider({
								id: g.id,
								label: g.label,
								scheme: g.scheme,
							}),
							this.b.set(g.id, { provider: g, extension: c }),
							(0, N.$Yc)(() => {
								for (const $ of this.c.values()) $.get(g.id)?.clear();
								this.b.delete(g.id),
									this.a.$unregisterTimelineProvider(g.id),
									g.dispose();
							})
						);
					}
				}
				t.$ajd = y;
				function d(k) {
					return k?.toString();
				}
			},
		),
		