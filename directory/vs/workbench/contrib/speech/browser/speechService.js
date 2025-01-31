import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/log/common/log.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/async.js';
import '../common/speechService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import '../../../services/extensions/common/extensions.js';
define(
			de[3389],
			he([1, 0, 4, 24, 33, 6, 3, 8, 34, 87, 15, 511, 32, 10, 175, 53]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*arrays*/,
 w /*cancellation*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*contextkey*/,
 m /*log*/,
 r /*host*/,
 u /*async*/,
 a /*speechService*/,
 h /*telemetry*/,
 c /*configuration*/,
 n /*extensionsRegistry*/,
 g /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uIc = void 0);
				const p = n.$n2.registerExtensionPoint({
					extensionPoint: "speechProviders",
					jsonSchema: {
						description: (0, t.localize)(9488, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["name"],
							properties: {
								name: {
									description: (0, t.localize)(9489, null),
									type: "string",
								},
								description: {
									description: (0, t.localize)(9490, null),
									type: "string",
								},
							},
						},
					},
				});
				let o = class extends C.$1c {
					get hasSpeechProvider() {
						return this.c.size > 0 || this.b.size > 0;
					}
					constructor(b, s, l, y, $, v) {
						super(),
							(this.g = b),
							(this.h = s),
							(this.j = l),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeHasSpeechProvider = this.a.event),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.f = a.$W7.bindTo(this.h)),
							(this.t = this.D(new E.$re())),
							(this.onDidStartSpeechToTextSession = this.t.event),
							(this.u = this.D(new E.$re())),
							(this.onDidEndSpeechToTextSession = this.u.event),
							(this.w = 0),
							(this.y = a.$X7.bindTo(this.h)),
							(this.C = this.D(new E.$re())),
							(this.onDidStartTextToSpeechSession = this.C.event),
							(this.F = this.D(new E.$re())),
							(this.onDidEndTextToSpeechSession = this.F.event),
							(this.G = 0),
							(this.H = a.$Y7.bindTo(this.h)),
							(this.I = this.D(new E.$re())),
							(this.onDidStartKeywordRecognition = this.I.event),
							(this.J = this.D(new E.$re())),
							(this.onDidEndKeywordRecognition = this.J.event),
							(this.L = 0),
							this.r();
					}
					r() {
						p.setHandler((b, s) => {
							const l = this.hasSpeechProvider;
							for (const y of s.removed)
								for (const $ of y.value) this.c.delete($.name);
							for (const y of s.added)
								for (const $ of y.value) this.c.set($.name, $);
							l !== this.hasSpeechProvider && this.s();
						});
					}
					registerSpeechProvider(b, s) {
						if (this.b.has(b))
							throw new Error(
								`Speech provider with identifier ${b} is already registered.`,
							);
						const l = this.hasSpeechProvider;
						return (
							this.b.set(b, s),
							l !== this.hasSpeechProvider && this.s(),
							(0, C.$Yc)(() => {
								const y = this.hasSpeechProvider;
								this.b.delete(b), y !== this.hasSpeechProvider && this.s();
							})
						);
					}
					s() {
						this.f.set(this.hasSpeechProvider), this.a.fire();
					}
					get hasActiveSpeechToTextSession() {
						return this.w > 0;
					}
					async createSpeechToTextSession(b, s = "speech") {
						const l = await this.z(),
							y = (0, a.$27)(this.n.getValue(a.$Z7)),
							$ = l.createSpeechToTextSession(
								b,
								typeof y == "string" ? { language: y } : void 0,
							),
							v = Date.now();
						let S = !1,
							I = !1,
							T = 0;
						const P = new C.$Zc(),
							k = () => {
								(this.w = Math.max(0, this.w - 1)),
									this.hasActiveSpeechToTextSession || this.y.reset(),
									this.u.fire(),
									this.m.publicLog2("speechToTextSession", {
										context: s,
										sessionDuration: Date.now() - v,
										sessionRecognized: S,
										sessionError: I,
										sessionContentLength: T,
										sessionLanguage: y,
									}),
									P.dispose();
							};
						return (
							P.add(b.onCancellationRequested(() => k())),
							b.isCancellationRequested && k(),
							P.add(
								$.onDidChange((L) => {
									switch (L.status) {
										case a.SpeechToTextStatus.Started:
											this.w++, this.y.set(!0), this.t.fire();
											break;
										case a.SpeechToTextStatus.Recognizing:
											S = !0;
											break;
										case a.SpeechToTextStatus.Recognized:
											typeof L.text == "string" && (T += L.text.length);
											break;
										case a.SpeechToTextStatus.Stopped:
											k();
											break;
										case a.SpeechToTextStatus.Error:
											this.g.error(
												`Speech provider error in speech to text session: ${L.text}`,
											),
												(I = !0);
											break;
									}
								}),
							),
							$
						);
					}
					async z() {
						await this.q.activateByEvent("onSpeech");
						const b = (0, i.$Sb)(Array.from(this.b.values()));
						if (b)
							this.b.size > 1 &&
								this.g.warn(
									`Multiple speech providers registered. Picking first one: ${b.metadata.displayName}`,
								);
						else throw new Error("No Speech provider is registered.");
						return b;
					}
					get hasActiveTextToSpeechSession() {
						return this.G > 0;
					}
					async createTextToSpeechSession(b, s = "speech") {
						const l = await this.z(),
							y = (0, a.$27)(this.n.getValue(a.$Z7)),
							$ = l.createTextToSpeechSession(
								b,
								typeof y == "string" ? { language: y } : void 0,
							),
							v = Date.now();
						let S = !1;
						const I = new C.$Zc(),
							T = (P) => {
								(this.G = Math.max(0, this.G - 1)),
									this.hasActiveTextToSpeechSession || this.H.reset(),
									this.F.fire(),
									this.m.publicLog2("textToSpeechSession", {
										context: s,
										sessionDuration: Date.now() - v,
										sessionError: S,
										sessionLanguage: y,
									}),
									P && I.dispose();
							};
						return (
							I.add(b.onCancellationRequested(() => T(!0))),
							b.isCancellationRequested && T(!0),
							I.add(
								$.onDidChange((P) => {
									switch (P.status) {
										case a.TextToSpeechStatus.Started:
											this.G++, this.H.set(!0), this.C.fire();
											break;
										case a.TextToSpeechStatus.Stopped:
											T(!1);
											break;
										case a.TextToSpeechStatus.Error:
											this.g.error(
												`Speech provider error in text to speech session: ${P.text}`,
											),
												(S = !0);
											break;
									}
								}),
							),
							$
						);
					}
					get hasActiveKeywordRecognition() {
						return this.L > 0;
					}
					async recognizeKeyword(b) {
						const s = new u.$0h(),
							l = new C.$Zc();
						l.add(
							b.onCancellationRequested(() => {
								l.dispose(), s.complete(a.KeywordRecognitionStatus.Canceled);
							}),
						);
						const y = l.add(new C.$Zc());
						let $;
						const v = () => {
							y.clear();
							const I = new w.$Ce(b);
							y.add((0, C.$Yc)(() => I.dispose(!0)));
							const T = ($ = this.M(I.token).then(
								(P) => {
									T === $ && s.complete(P);
								},
								(P) => {
									T === $ && s.error(P);
								},
							));
						};
						l.add(
							this.j.onDidChangeFocus((I) => {
								!I && $ ? (y.clear(), ($ = void 0)) : $ || v();
							}),
						),
							this.j.hasFocus && v();
						let S;
						try {
							S = await s.p;
						} finally {
							l.dispose();
						}
						return (
							this.m.publicLog2("keywordRecognition", {
								keywordRecognized: S === a.KeywordRecognitionStatus.Recognized,
							}),
							S
						);
					}
					async M(b) {
						const l = (await this.z()).createKeywordRecognitionSession(b);
						this.L++, this.I.fire();
						const y = new C.$Zc(),
							$ = () => {
								(this.L = Math.max(0, this.L - 1)), this.J.fire(), y.dispose();
							};
						y.add(b.onCancellationRequested(() => $())),
							b.isCancellationRequested && $(),
							y.add(
								l.onDidChange((v) => {
									v.status === a.KeywordRecognitionStatus.Stopped && $();
								}),
							);
						try {
							return (await E.Event.toPromise(l.onDidChange)).status;
						} finally {
							$();
						}
					}
				};
				(e.$uIc = o),
					(e.$uIc = o =
						Ne(
							[
								j(0, m.$ik),
								j(1, d.$6j),
								j(2, r.$asb),
								j(3, h.$km),
								j(4, c.$gj),
								j(5, g.$q2),
							],
							o,
						));
			},
		)
