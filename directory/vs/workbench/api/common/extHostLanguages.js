import '../../../../require.js';
import '../../../../exports.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../../base/common/severity.js';
import '../../../base/common/async.js';
import '../../../base/common/lifecycle.js';
import '../../services/extensions/common/extensions.js';
define(
		Pe[573],
		Ne([1, 0, 6, 17, 11, 58, 9, 3, 29]),
		function (we, t, e, r, S, N, P, I, l) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Lid = void 0),
				(r = tt(r)),
				(N = On(N));
			class n {
				constructor(y, d, k, g) {
					(this.c = d),
						(this.d = k),
						(this.e = g),
						(this.b = []),
						(this.f = 0),
						(this.g = new Set()),
						(this.a = y.getProxy(e.$lbb.MainThreadLanguages));
				}
				$acceptLanguageIds(y) {
					this.b = y;
				}
				async getLanguages() {
					return this.b.slice(0);
				}
				async changeLanguage(y, d) {
					await this.a.$changeLanguage(y, d);
					const k = this.c.getDocumentData(y);
					if (!k) throw new Error(`document '${y.toString()}' NOT found`);
					return k.document;
				}
				async tokenAtPosition(y, d) {
					const k = y.version,
						g = r.Position.from(d),
						c = await this.a.$tokensAtPosition(y.uri, g),
						h = {
							type: S.StandardTokenType.Other,
							range:
								y.getWordRangeAtPosition(d) ??
								new S.$pbb(d.line, d.character, d.line, d.character),
						};
					if (!c) return h;
					const $ = {
						range: r.Range.to(c.range),
						type: r.TokenType.to(c.type),
					};
					return !$.range.contains(d) || k !== y.version ? h : $;
				}
				createLanguageStatusItem(y, d, k) {
					const g = this.f++,
						c = this.a,
						h = this.g,
						$ = `${y.identifier.value}/${d}`;
					if (h.has($))
						throw new Error(`LanguageStatusItem with id '${d}' ALREADY exists`);
					h.add($);
					const T = {
						selector: k,
						id: d,
						name: y.displayName ?? y.name,
						severity: S.LanguageStatusSeverity.Information,
						command: void 0,
						text: "",
						detail: "",
						busy: !1,
					};
					let a;
					const u = new I.$Zc(),
						s = () => {
							if ((a?.dispose(), !h.has($))) {
								console.warn(
									`LanguageStatusItem (${d}) from ${y.identifier.value} has been disposed and CANNOT be updated anymore`,
								);
								return;
							}
							a = (0, P.$Oh)(() => {
								u.clear(),
									this.a.$setLanguageStatus(g, {
										id: $,
										name: T.name ?? y.displayName ?? y.name,
										source: y.displayName ?? y.name,
										selector: r.DocumentSelector.from(T.selector, this.e),
										label: T.text,
										detail: T.detail ?? "",
										severity:
											T.severity === S.LanguageStatusSeverity.Error
												? N.default.Error
												: T.severity === S.LanguageStatusSeverity.Warning
													? N.default.Warning
													: N.default.Info,
										command: T.command && this.d.toInternal(T.command, u),
										accessibilityInfo: T.accessibilityInformation,
										busy: T.busy,
									});
							}, 0);
						},
						f = {
							dispose() {
								u.dispose(),
									a?.dispose(),
									c.$removeLanguageStatus(g),
									h.delete($);
							},
							get id() {
								return T.id;
							},
							get name() {
								return T.name;
							},
							set name(o) {
								(T.name = o), s();
							},
							get selector() {
								return T.selector;
							},
							set selector(o) {
								(T.selector = o), s();
							},
							get text() {
								return T.text;
							},
							set text(o) {
								(T.text = o), s();
							},
							set text2(o) {
								(0, l.$u2)(y, "languageStatusText"), (T.text = o), s();
							},
							get text2() {
								return (0, l.$u2)(y, "languageStatusText"), T.text;
							},
							get detail() {
								return T.detail;
							},
							set detail(o) {
								(T.detail = o), s();
							},
							get severity() {
								return T.severity;
							},
							set severity(o) {
								(T.severity = o), s();
							},
							get accessibilityInformation() {
								return T.accessibilityInformation;
							},
							set accessibilityInformation(o) {
								(T.accessibilityInformation = o), s();
							},
							get command() {
								return T.command;
							},
							set command(o) {
								(T.command = o), s();
							},
							get busy() {
								return T.busy;
							},
							set busy(o) {
								(T.busy = o), s();
							},
						};
					return s(), f;
				}
			}
			t.$Lid = n;
		},
	),
		