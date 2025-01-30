import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/log/common/log.js';
import '../common/extHost.protocol.js';
import '../../contrib/speech/common/speechService.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3367],
			he([1, 0, 15, 6, 3, 34, 88, 511, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*log*/,
 C /*extHost.protocol*/,
 d /*speechService*/,
 m /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$loc = void 0);
				let r = class {
					constructor(a, h, c) {
						(this.g = h),
							(this.h = c),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new Map()),
							(this.a = a.getProxy(C.$mbb.ExtHostSpeech));
					}
					$registerProvider(a, h, c) {
						this.h.trace(
							"[Speech] extension registered provider",
							c.extension.value,
						);
						const n = this.g.registerSpeechProvider(h, {
							metadata: c,
							createSpeechToTextSession: (g, p) => {
								if (g.isCancellationRequested)
									return { onDidChange: i.Event.None };
								const o = new w.$Zc(),
									f = Math.random();
								this.a.$createSpeechToTextSession(a, f, p?.language);
								const b = o.add(new i.$re());
								return (
									this.c.set(f, { onDidChange: b }),
									o.add(
										g.onCancellationRequested(() => {
											this.a.$cancelSpeechToTextSession(f),
												this.c.delete(f),
												o.dispose();
										}),
									),
									{ onDidChange: b.event }
								);
							},
							createTextToSpeechSession: (g, p) => {
								if (g.isCancellationRequested)
									return {
										onDidChange: i.Event.None,
										synthesize: async () => {},
									};
								const o = new w.$Zc(),
									f = Math.random();
								this.a.$createTextToSpeechSession(a, f, p?.language);
								const b = o.add(new i.$re());
								return (
									this.d.set(f, { onDidChange: b }),
									o.add(
										g.onCancellationRequested(() => {
											this.a.$cancelTextToSpeechSession(f),
												this.d.delete(f),
												o.dispose();
										}),
									),
									{
										onDidChange: b.event,
										synthesize: async (s) => {
											await this.a.$synthesizeSpeech(f, s),
												await (0, t.$Ah)(
													i.Event.toPromise(
														i.Event.filter(
															b.event,
															(l) => l.status === d.TextToSpeechStatus.Stopped,
														),
													),
													g,
												);
										},
									}
								);
							},
							createKeywordRecognitionSession: (g) => {
								if (g.isCancellationRequested)
									return { onDidChange: i.Event.None };
								const p = new w.$Zc(),
									o = Math.random();
								this.a.$createKeywordRecognitionSession(a, o);
								const f = p.add(new i.$re());
								return (
									this.f.set(o, { onDidChange: f }),
									p.add(
										g.onCancellationRequested(() => {
											this.a.$cancelKeywordRecognitionSession(o),
												this.f.delete(o),
												p.dispose();
										}),
									),
									{ onDidChange: f.event }
								);
							},
						});
						this.b.set(a, {
							dispose: () => {
								n.dispose();
							},
						});
					}
					$unregisterProvider(a) {
						const h = this.b.get(a);
						h && (h.dispose(), this.b.delete(a));
					}
					$emitSpeechToTextEvent(a, h) {
						this.c.get(a)?.onDidChange.fire(h);
					}
					$emitTextToSpeechEvent(a, h) {
						this.d.get(a)?.onDidChange.fire(h);
					}
					$emitKeywordRecognitionEvent(a, h) {
						this.f.get(a)?.onDidChange.fire(h);
					}
					dispose() {
						this.b.forEach((a) => a.dispose()),
							this.b.clear(),
							this.c.forEach((a) => a.onDidChange.dispose()),
							this.c.clear(),
							this.d.forEach((a) => a.onDidChange.dispose()),
							this.d.clear(),
							this.f.forEach((a) => a.onDidChange.dispose()),
							this.f.clear();
					}
				};
				(e.$loc = r),
					(e.$loc = r =
						Ne(
							[(0, m.$tmc)(C.$lbb.MainThreadSpeech), j(1, d.$V7), j(2, E.$ik)],
							r,
						));
			},
		),
		