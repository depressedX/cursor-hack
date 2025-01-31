import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/config/editorConfigurationSchema.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/registry/common/platform.js';
define(
			de[3017],
			he([1, 0, 6, 318, 3, 602, 69, 393, 291, 4, 81, 39, 30]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*hierarchicalKind*/,
 w /*lifecycle*/,
 E /*editorConfigurationSchema*/,
 C /*languageFeatures*/,
 d /*codeAction*/,
 m /*types*/,
 r /*nls*/,
 u /*configurationRegistry*/,
 a /*keybinding*/,
 h /*platform*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$21c = e.$11c = e.$Z1c = void 0),
					(r = mt(r));
				const c = (f) => ({
						type: "string",
						enum: ["always", "explicit", "never", !0, !1],
						enumDescriptions: [
							r.localize(4814, null),
							r.localize(4815, null),
							r.localize(4816, null),
							r.localize(4817, null),
							r.localize(4818, null),
						],
						default: "explicit",
						description: f,
					}),
					n = (f) => ({
						type: ["string", "boolean"],
						enum: ["explicit", "never", !0, !1],
						enumDescriptions: [
							r.localize(4819, null),
							r.localize(4820, null),
							r.localize(4821, null),
							r.localize(4822, null),
						],
						default: "explicit",
						description: f,
					}),
					g = {
						oneOf: [
							{ type: "object", additionalProperties: { type: "string" } },
							{ type: "array", items: { type: "string" } },
						],
						markdownDescription: r.localize(4823, null),
						type: ["object", "array"],
						additionalProperties: {
							type: "string",
							enum: ["always", "explicit", "never", !0, !1],
						},
						default: {},
						scope: u.ConfigurationScope.LANGUAGE_OVERRIDABLE,
					};
				e.$Z1c = Object.freeze({
					...E.$DAb,
					properties: { "editor.codeActionsOnSave": g },
				});
				const p = {
					oneOf: [
						{ type: "object", additionalProperties: { type: "string" } },
						{ type: "array", items: { type: "string" } },
					],
					markdownDescription: r.localize(4824, null),
					type: "object",
					additionalProperties: {
						type: ["string", "boolean"],
						enum: ["explicit", "never", !0, !1],
					},
					default: {},
				};
				e.$11c = Object.freeze({
					...E.$DAb,
					properties: { "notebook.codeActionsOnSave": p },
				});
				let o = class extends w.$1c {
					constructor(b, s, l) {
						super(),
							(this.f = l),
							(this.a = []),
							(this.b = new Set()),
							(this.c = this.D(new t.$re())),
							l.codeActionProvider.onDidChange(() => {
								this.g(), this.j();
							}, 2e3),
							b.setHandler((y) => {
								(this.a = y
									.flatMap(($) => $.value)
									.filter(($) => Array.isArray($.actions))),
									this.h(this.a),
									this.c.fire();
							}),
							s.registerSchemaContribution({
								getSchemaAdditions: () => this.n(),
								onDidChange: this.c.event,
							});
					}
					g() {
						this.f.codeActionProvider.allNoModel().forEach((s) => {
							s.providedCodeActionKinds &&
								s.providedCodeActionKinds.forEach((l) => {
									!this.b.has(l) &&
										m.$GAb.Source.contains(new i.$1L(l)) &&
										this.b.add(l);
								});
						});
					}
					h(b) {
						const s = {},
							l = {};
						for (const [y, $] of this.m(b))
							this.b.add(y),
								(s[y] = c(r.localize(4825, null, $.title))),
								(l[y] = n(r.localize(4826, null, $.title)));
						(g.properties = s),
							(p.properties = l),
							h.$Io
								.as(u.$No.Configuration)
								.notifyConfigurationSchemaUpdated(e.$Z1c);
					}
					j() {
						const b = { ...g.properties },
							s = { ...p.properties };
						for (const l of this.b)
							b[l] ||
								((b[l] = c(r.localize(4827, null, l))),
								(s[l] = n(r.localize(4828, null, l))));
						(g.properties = b),
							(p.properties = s),
							h.$Io
								.as(u.$No.Configuration)
								.notifyConfigurationSchemaUpdated(e.$Z1c);
					}
					m(b) {
						const s = new Map();
						for (const l of b)
							for (const y of l.actions) {
								const $ = new i.$1L(y.kind);
								m.$GAb.Source.contains($) && s.set($.value, y);
							}
						return s;
					}
					n() {
						const b = (l, y) => ({
								if: {
									required: ["command"],
									properties: { command: { const: l } },
								},
								then: {
									properties: {
										args: {
											required: ["kind"],
											properties: {
												kind: {
													anyOf: [
														{
															enum: y.map(($) => $.kind),
															enumDescriptions: y.map(
																($) => $.description ?? $.title,
															),
														},
														{ type: "string" },
													],
												},
											},
										},
									},
								},
							}),
							s = (l) => {
								const y = this.a.flatMap((v) => v.actions),
									$ = new Map();
								for (const v of y)
									!$.has(v.kind) &&
										l.contains(new i.$1L(v.kind)) &&
										$.set(v.kind, v);
								return Array.from($.values());
							};
						return [
							b(d.$LAb, s(i.$1L.Empty)),
							b(d.$OAb, s(m.$GAb.Refactor)),
							b(d.$QAb, s(m.$GAb.Source)),
						];
					}
				};
				(e.$21c = o), (e.$21c = o = Ne([j(1, a.$uZ), j(2, C.$k3)], o));
			},
		)
