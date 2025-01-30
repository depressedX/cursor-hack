import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import './extHost.protocol.js';
define(Pe[549], Ne([1, 0, 23, 3, 6]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$3id = void 0);
			class N {
				static {
					this.a = 1;
				}
				constructor(I) {
					(this.c = new Map()),
						(this.d = new Map()),
						(this.f = new Map()),
						(this.b = I.getProxy(S.$lbb.MainThreadSpeech));
				}
				async $createSpeechToTextSession(I, l, n) {
					const p = this.c.get(I);
					if (!p) return;
					const y = new r.$Zc(),
						d = new e.$Ce();
					this.d.set(l, d);
					const k = await p.provideSpeechToTextSession(
						d.token,
						n ? { language: n } : void 0,
					);
					k &&
						(y.add(
							k.onDidChange((g) => {
								d.token.isCancellationRequested ||
									this.b.$emitSpeechToTextEvent(l, g);
							}),
						),
						y.add(d.token.onCancellationRequested(() => y.dispose())));
				}
				async $cancelSpeechToTextSession(I) {
					this.d.get(I)?.dispose(!0), this.d.delete(I);
				}
				async $createTextToSpeechSession(I, l, n) {
					const p = this.c.get(I);
					if (!p) return;
					const y = new r.$Zc(),
						d = new e.$Ce();
					this.d.set(l, d);
					const k = await p.provideTextToSpeechSession(
						d.token,
						n ? { language: n } : void 0,
					);
					k &&
						(this.f.set(l, k),
						y.add(
							k.onDidChange((g) => {
								d.token.isCancellationRequested ||
									this.b.$emitTextToSpeechEvent(l, g);
							}),
						),
						y.add(d.token.onCancellationRequested(() => y.dispose())));
				}
				async $synthesizeSpeech(I, l) {
					this.f.get(I)?.synthesize(l);
				}
				async $cancelTextToSpeechSession(I) {
					this.d.get(I)?.dispose(!0), this.d.delete(I), this.f.delete(I);
				}
				async $createKeywordRecognitionSession(I, l) {
					const n = this.c.get(I);
					if (!n) return;
					const p = new r.$Zc(),
						y = new e.$Ce();
					this.d.set(l, y);
					const d = await n.provideKeywordRecognitionSession(y.token);
					d &&
						(p.add(
							d.onDidChange((k) => {
								y.token.isCancellationRequested ||
									this.b.$emitKeywordRecognitionEvent(l, k);
							}),
						),
						p.add(y.token.onCancellationRequested(() => p.dispose())));
				}
				async $cancelKeywordRecognitionSession(I) {
					this.d.get(I)?.dispose(!0), this.d.delete(I);
				}
				registerProvider(I, l, n) {
					const p = N.a++;
					return (
						this.c.set(p, n),
						this.b.$registerProvider(p, l, {
							extension: I,
							displayName: I.value,
						}),
						(0, r.$Yc)(() => {
							this.b.$unregisterProvider(p), this.c.delete(p);
						})
					);
				}
			}
			t.$3id = N;
		}),
		